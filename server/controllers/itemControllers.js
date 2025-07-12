const db = require('../config/db');
const { v4: uuidv4 } = require('uuid'); // For unique filenames, if storing locally

exports.createItem = async (req, res) => {
    // req.userId is available from verifyToken middleware
    const { title, description, category_id, type_id, size_id, condition_id, points_cost, tags } = req.body;
    const userId = req.userId; // ID of the user creating the item

    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'At least one image is required.' });
    }

    // In a real app, you'd upload images to cloud storage (S3, Cloudinary)
    // For local dev, you might save to a 'uploads' folder and store paths.
    // Example: const image_urls = req.files.map(file => `/uploads/${file.filename}`);
    // For simplicity, let's assume direct URLs for now if you were to manually upload
    // or if the frontend sends pre-signed URLs from cloud storage.
    // If you're using Multer and saving locally, adjust `image_url` logic.
    // Here, assuming `req.files` contains image info from Multer.

    let image_urls = [];
    if (req.files) {
        image_urls = req.files.map(file => {
            // For local storage, adjust this to your actual path
            return `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
        });
    }

    let connection;
    try {
        connection = await db.getConnection();
        await connection.beginTransaction();

        // 1. Insert item into 'items' table
        const [result] = await connection.execute(
            `INSERT INTO items (user_id, title, description, category_id, type_id, size_id, condition_id, points_cost)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [userId, title, description, category_id, type_id, size_id, condition_id, points_cost]
        );
        const itemId = result.insertId;

        // 2. Insert item images into 'item_images' table
        for (const url of image_urls) {
            await connection.execute(
                'INSERT INTO item_images (item_id, image_url, is_primary) VALUES (?, ?, ?)',
                [itemId, url, image_urls.indexOf(url) === 0] // First image as primary
            );
        }

        // 3. Handle tags (optional: if tags are free-form, you might need to insert new ones)
        if (tags && tags.length > 0) {
            const tagArray = JSON.parse(tags); // Assuming tags come as a JSON string array from frontend
            for (const tagName of tagArray) {
                // Find or insert tag
                const [existingTags] = await connection.execute('SELECT id FROM tags WHERE name = ?', [tagName]);
                let tagId;
                if (existingTags.length === 0) {
                    const [newTagResult] = await connection.execute('INSERT INTO tags (name) VALUES (?)', [tagName]);
                    tagId = newTagResult.insertId;
                } else {
                    tagId = existingTags[0].id;
                }
                // Link item to tag
                await connection.execute('INSERT INTO item_tags (item_id, tag_id) VALUES (?, ?)', [itemId, tagId]);
            }
        }

        await connection.commit();
        res.status(201).json({ message: 'Item created successfully!', itemId: itemId });

    } catch (error) {
        if (connection) await connection.rollback();
        console.error('Error creating item:', error);
        res.status(500).json({ message: 'Server error while creating item.' });
    } finally {
        if (connection) connection.release();
    }
};
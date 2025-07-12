const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { verifyToken } = require('../middleware/authJwt'); // Our authentication middleware
const upload = require('../middleware/upload'); // Multer middleware for image uploads

// Public routes
router.get('/', itemController.getAllItems); // For landing page "Browse Items"
router.get('/featured', itemController.getFeaturedItems); // For landing page carousel
router.get('/:id', itemController.getItemById); // For Item Detail Page

// Protected routes (require user to be logged in)
router.post('/', verifyToken, upload.array('images', 5), itemController.createItem); // 'images' is the field name for files, 5 is max count
router.put('/:id', verifyToken, itemController.updateItem);
router.delete('/:id', verifyToken, itemController.deleteItem);

// User-specific listings (can be on Dashboard)
router.get('/user/:userId', itemController.getItemsByUserId); // Used by dashboard or user profile page

module.exports = router;
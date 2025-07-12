import React from 'react';
import img1 from '../../../assets/download (1).jpeg';
import img2 from '../../../assets/download (2).jpeg';
import img3 from '../../../assets/download (3).jpeg';
import img4 from '../../../assets/download (4).jpeg';
import img5 from '../../../assets/download (5).jpeg';
import img6 from '../../../assets/download.jpeg';

const allProducts = [
  { id: 1, name: 'Denim Jacket', category: 'Men', image: img1 },
  { id: 2, name: 'Floral Dress', category: 'Women', image: img2 },
  { id: 3, name: 'Kids T-shirt', category: 'Kids', image: img3 },
  { id: 4, name: 'Woolen Scarf', category: 'Accessories', image: img4 },
  { id: 5, name: 'Running Shoes', category: 'Shoes', image: img5 },
  { id: 6, name: 'Winter Coat', category: 'Winter', image: img6 },
];

const ProductListings = ({ selectedCategory }) => {
  const filteredProducts =
    selectedCategory === 'All'
      ? allProducts
      : allProducts.filter((item) => item.category === selectedCategory);

  return (
    <section style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#444' }}>
        {selectedCategory === 'All' ? 'All Products' : `${selectedCategory} Items`}
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '1rem',
        }}
      >
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              padding: '1rem',
              textAlign: 'center',
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: '100%',
                height: '120px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '0.75rem',
              }}
            />
            <div style={{ fontWeight: '500', color: '#333' }}>{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductListings;

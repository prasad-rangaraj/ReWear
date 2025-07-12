import React from 'react';

const CategoriesSection = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['All', 'Men', 'Women', 'Kids', 'Accessories', 'Shoes', 'Winter'];

  return (
    <section style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#444' }}>Categories</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem' }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              backgroundColor: selectedCategory === category ? '#5d8a53' : '#f1ede7',
              color: selectedCategory === category ? '#fff' : '#5d8a53',
              border: 'none',
              borderRadius: '12px',
              padding: '1.5rem',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;

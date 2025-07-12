import React from 'react';

const ProductDescription = () => {
  return (
    <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '12px', padding: '1rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <h3 style={{ marginBottom: '1rem', color: '#444' }}>Add Product Description</h3>
      <textarea
        rows="10"
        placeholder="Describe the product..."
        style={{
          width: '96%',
          borderRadius: '10px',
          padding: '0.75rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
          resize: 'none'
        }}
      ></textarea>
      <button
        style={{
          marginTop: '1rem',
          backgroundColor: '#8ba96f',
          color: 'white',
          padding: '0.6rem 1.2rem',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '500',
          float: 'right'
        }}
      >
        Available / Swap
      </button>
    </div>
  );
};

export default ProductDescription;

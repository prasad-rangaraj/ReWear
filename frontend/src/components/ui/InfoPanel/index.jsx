import React from 'react';

const InfoPanel = () => {
  return (
    <div style={{ flex: 1, padding: '1rem' }}>
      <h2 style={{ color: '#333' }}>Product Name</h2>
      <p style={{ color: '#666', marginBottom: '1rem' }}>Short product description goes here.</p>
      <div style={{
        backgroundColor: '#eee',
        height: '150px',
        borderRadius: '12px',
        padding: '1rem',
        lineHeight: '1.5',
        color: '#555'
      }}>
        Detailed product description <br />
        with features, material, size, <br />
        condition and more.
      </div>
    </div>
  );
};

export default InfoPanel;

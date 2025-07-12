import React from 'react';

const ImageGallery = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h4 style={{ marginBottom: '0.5rem', color: '#444' }}>Product Images</h4>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '1rem'
      }}>
        {[1, 2, 3, 4].map((img) => (
          <div key={img} style={{
            height: '120px',
            backgroundColor: '#ddd',
            borderRadius: '10px',
            textAlign: 'center',
            lineHeight: '120px',
            color: '#888'
          }}>
            Image {img}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

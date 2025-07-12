import React from 'react';

const MainImage = () => {
  return (
    <div style={{ flex: 1, padding: '1rem' }}>
      <div style={{
        backgroundColor: '#ddd',
        borderRadius: '12px',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        color: '#666'
      }}>
        Product Image
      </div>
    </div>
  );
};

export default MainImage;

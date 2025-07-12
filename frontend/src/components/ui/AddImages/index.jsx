import React from 'react';

const AddImages = () => {
  return (
    <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '12px', padding: '1rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <h3 style={{ marginBottom: '1rem', color: '#444' }}>Add Images</h3>
      <div style={{
        width: '100%',
        height: '250px',
        backgroundColor: '#e0e0e0',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#666'
      }}>
        Upload Image
      </div>
    </div>
  );
};

export default AddImages;

import React from 'react';

const PreviousListings = () => {
  return (
    <div>
      <h3 style={{ marginBottom: '1rem', color: '#444' }}>Previous Listings</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            style={{
              height: '150px',
              backgroundColor: '#e0e0e0',
              borderRadius: '10px',
              textAlign: 'center',
              lineHeight: '150px',
              color: '#666'
            }}
          >
            Image {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousListings;

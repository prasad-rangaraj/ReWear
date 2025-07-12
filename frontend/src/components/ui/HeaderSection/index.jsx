import React from 'react';

const HeroSection = ({ onBrowseClick }) => {
  return (
    <section style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#e9f2e3' }}>
      <h1 style={{ fontSize: '2rem', color: '#5d8a53', marginBottom: '1rem' }}>
        Give Your Clothes a Second Life
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button
          style={{
            padding: '0.75rem 2rem',
            backgroundColor: '#8ba96f',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            cursor: 'pointer',
          }}
        >
          Start Swapping
        </button>
        <button
          onClick={onBrowseClick}
          style={{
            padding: '0.75rem 2rem',
            backgroundColor: '#f1ede7',
            border: '1px solid #8ba96f',
            borderRadius: '8px',
            color: '#5d8a53',
            fontWeight: '500',
            cursor: 'pointer',
          }}
        >
          Browse Items
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

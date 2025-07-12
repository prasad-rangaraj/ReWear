// ItemListing.jsx
import React from 'react';
import mainImage from '../assets/download (1).jpeg';
import img1 from '../assets/download (5).jpeg';
import img2 from '../assets/download (2).jpeg';
import img3 from '../assets/download (3).jpeg';

const ItemListing = () => {
  return (
    <div style={{
      fontFamily: 'Sen, sans-serif',
      backgroundColor: '#f9f9f5',
      padding: '2rem',
      minHeight: '100vh',
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
        marginBottom: '2rem',
      }}>
        <MainImage />
        <InfoPanel />
      </div>
      <ImageGallery />
    </div>
  );
};

const MainImage = () => (
  <div style={{ flex: '1 1 300px', maxWidth: '500px' }}>
    <img
      src={mainImage}
      alt="Main Item"
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '12px',
        objectFit: 'cover',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    />
  </div>
);

const InfoPanel = () => (
  <div style={{
    flex: '1 1 300px',
    maxWidth: '500px',
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
  }}>
    <h2 style={{ marginBottom: '0.5rem', color: '#5d8a53' }}>Vintage Denim Jacket</h2>
    <p style={{ color: '#777', marginBottom: '1rem' }}>A lightly used vintage denim jacket in great condition. Perfect for casual wear and layering.</p>
    <p style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>₹799</p>
    <p style={{ marginBottom: '0.5rem' }}><strong>Condition:</strong> Gently Used</p>
    <p style={{ marginBottom: '0.5rem' }}><strong>Category:</strong> Men</p>
    <p style={{ marginBottom: '1.5rem' }}><strong>Size:</strong> Medium</p>
    <button style={{
      padding: '0.75rem 2rem',
      backgroundColor: '#5d8a53',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontWeight: '600',
      cursor: 'pointer',
    }}>
      Swap Request
    </button>
  </div>
);

const ImageGallery = () => (
  <div style={{
    marginTop: '2rem',
    textAlign: 'center',
  }}>
    <h3 style={{ marginBottom: '1rem', color: '#444' }}>More Images</h3>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      flexWrap: 'wrap',
    }}>
      {[img1, img2, img3].map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Thumb ${index + 1}`}
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '8px',
            objectFit: 'cover',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          }}
        />
      ))}
    </div>
  </div>
);

export default ItemListing;

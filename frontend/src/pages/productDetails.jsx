import React from 'react';
import {
  AddImages,
  ProductDescription,
  PreviousListings
} from '../components';

const ProductDetails = () => {
  return (
    <div style={{ fontFamily: 'Sen, sans-serif', backgroundColor: '#f9f9f5', padding: '2rem',height: '100vh' }}>
      <h2 style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#5d8a53' }}>Product Detail Page</h2>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
        <AddImages />
        <ProductDescription />
      </div>
      <PreviousListings />
    </div>
  );
};

export default ProductDetails;

import React, { useRef, useState } from 'react';
import {
  Header,
  HeroSection,
  ImageCarousel,
} from '../components';
import CategoriesSection from '../components/ui/CategoriesSection';
import ProductListings from '../components/ui/ProductListings';

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categoryRef = useRef(null);

  const handleBrowseClick = () => {
    setSelectedCategory('All');
    categoryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: 'Sen, sans-serif', backgroundColor: '#f9f9f5' }}>
      <Header onCategorySelect={setSelectedCategory} />
      <HeroSection onBrowseClick={handleBrowseClick} />
      <div ref={categoryRef}>
        <CategoriesSection selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <ProductListings selectedCategory={selectedCategory} />
    </div>
  );
};

export default LandingPage;

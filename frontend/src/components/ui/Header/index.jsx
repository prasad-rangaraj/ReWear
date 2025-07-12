// src/components/ui/Header/index.jsx
import React, { useState } from 'react';

const Header = ({ onCategorySelect }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const categories = ['Men', 'Women', 'Kids', 'Shoes'];

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      position: 'relative'
    }}>
      <img src="/src/assets/rewear.png" alt="ReWear Logo" style={{ height: '40px' }} />

      <nav style={{ display: 'flex', gap: '1.5rem', position: 'relative' }}>
        <a href="#" style={navStyle}>Home</a>

        <div style={{ position: 'relative' }}>
          <span
            style={{ ...navStyle, cursor: 'pointer' }}
            onClick={() => setShowDropdown(prev => !prev)}
          >
            Browse ▾
          </span>

          {showDropdown && (
            <div style={dropdownStyle}>
              {categories.map(category => (
                <div
                  key={category}
                  onClick={() => {
                    onCategorySelect(category);
                    setShowDropdown(false);
                  }}
                  style={dropdownItemStyle}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>

        <a href="#" style={navStyle}>Login</a>
        <a href="#" style={navStyle}>Sign Up</a>
      </nav>
    </header>
  );
};

// Inline styles
const navStyle = {
  textDecoration: 'none',
  color: '#5d8a53',
  fontWeight: '500',
  position: 'relative'
};

const dropdownStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  padding: '0.5rem 0',
  zIndex: 10
};

const dropdownItemStyle = {
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  color: '#5d8a53',
  fontWeight: '500',
  textDecoration: 'none',
  backgroundColor: '#fff',
  transition: 'background 0.2s',
};

export default Header;

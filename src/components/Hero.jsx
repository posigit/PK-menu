import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = ({ searchQuery, onSearchChange }) => {
  const [loaded, setLoaded] = useState(false);
  const [localSearch, setLocalSearch] = useState(searchQuery);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleSearch = () => {
    onSearchChange(localSearch);
    // Scroll to menu content
    const menuContent = document.getElementById('menu-content');
    if (menuContent) {
      menuContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="hero">
      <div className="hero-background-wrapper">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
      </div>

      <div className={`hero-content ${loaded ? 'animate-in' : ''}`}>

        <div className="logo-container">
          <a href="https://preskenhotels.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/logo1.png"
              alt="Presken Hotels & Resorts"
              className="hero-logo"
            />
          </a>
        </div>

        <div className="brand-badge">
          <span className="brand-subtitle">PREMIUM DINING EXPERIENCE</span>
        </div>

        <h1 className="hero-title">
          <span className="text-gradient">Culinary</span> <br />
          Excellence
        </h1>

        <p className="hero-description">
          Experience the finest dining and nightlife at Presken.
        </p>

        <div className="search-wrapper-luxury">
          <div className="search-glass">
            <svg
              className="search-icon-luxury"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              className="search-input-luxury"
              placeholder="Search our exquisite menu..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="search-button-luxury" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

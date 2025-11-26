import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = ({ searchQuery, onSearchChange }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="hero">
      <div className="hero-background-wrapper">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className={`hero-content ${loaded ? 'animate-in' : ''}`}>
        <div className="brand-badge">
          <span className="brand-subtitle">EST. 2016</span>
        </div>
        
        <div className="logo-container">
           <img 
            src="/images/logo1.png" 
            alt="Presken Hotels & Resorts" 
            className="hero-logo"
          />
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
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
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

import React, { useState } from 'react';
import MenuItem from './MenuItem';
import './SubcategorySection.css';

const SubcategorySection = ({ subcategory, categoryName }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="subcategory-section-luxury">
      <div 
        className={`subcategory-header-luxury ${isExpanded ? 'active' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="header-content">
          <h3 className="subcategory-title-luxury">
            {subcategory.name}
          </h3>
          <span className="item-count-badge">{subcategory.items.length} items</span>
        </div>
        
        <div className={`icon-wrapper ${isExpanded ? 'expanded' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>
      
      <div className={`subcategory-items-grid ${isExpanded ? 'expanded' : ''}`}>
        <div className="grid-inner">
          {subcategory.items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubcategorySection;

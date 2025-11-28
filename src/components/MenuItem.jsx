import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div 
      className={`menu-item-luxury ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="menu-item-image-container">
        <img 
          src={item.image} 
          alt={item.name}
          className="menu-item-img"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('no-image');
          }}
        />
        <div className="menu-item-overlay"></div>
      </div>
      
      <div className="menu-item-details">
        <div className="menu-item-header">
          <h3 className="menu-item-title">{item.name}</h3>
          <span className="menu-item-price-luxury">{item.price}</span>
        </div>
        
        <p className={`menu-item-desc ${isExpanded ? 'expanded' : ''}`}>
          {item.description}
        </p>
        
        {/* Add button removed as per user request - pricelist only */}
      </div>
    </div>
  );
};

export default MenuItem;

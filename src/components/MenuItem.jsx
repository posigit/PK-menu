import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  return (
    <div 
      className={`menu-item-luxury ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={`menu-item-image-container ${imageError ? 'no-image' : ''}`}>
        {!imageError && (
          <>
            {/* Blur placeholder - shows while image is loading */}
            <div 
              className={`image-placeholder ${imageLoaded ? 'loaded' : ''}`}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />
            
            {/* Actual image */}
            <img 
              src={item.image} 
              alt={item.name}
              className={`menu-item-img ${imageLoaded ? 'loaded' : ''}`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                setImageError(true);
              }}
            />
          </>
        )}
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

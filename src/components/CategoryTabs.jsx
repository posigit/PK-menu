import React, { useRef, useEffect } from 'react';
import './CategoryTabs.css';

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  const tabsRef = useRef(null);

  // Auto-scroll to active tab
  useEffect(() => {
    if (tabsRef.current) {
      const activeTab = tabsRef.current.querySelector('.category-tab-luxury.active');
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeCategory]);

  const handleCategoryClick = (categoryId) => {
    onCategoryChange(categoryId);
    // Scroll to menu content
    const menuContent = document.getElementById('menu-content');
    if (menuContent) {
      menuContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="category-tabs-wrapper-luxury">
      <div className="category-tabs-container">
        <div className="category-tabs-luxury" ref={tabsRef}>
          <button
            className={`category-tab-luxury ${!activeCategory || activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('all')}
          >
            <span className="tab-text">All Menu</span>
            {(!activeCategory || activeCategory === 'all') && <div className="tab-glow" />}
          </button>
          
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-tab-luxury ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <span className="tab-text">{category.name}</span>
              {activeCategory === category.id && <div className="tab-glow" />}
            </button>
          ))}
        </div>
      </div>
      <div className="tabs-fade-right"></div>
    </div>
  );
};

export default CategoryTabs;

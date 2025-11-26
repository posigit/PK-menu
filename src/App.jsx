import { useState, useMemo } from 'react';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import SubcategorySection from './components/SubcategorySection';
import MenuItem from './components/MenuItem'; // Added import for MenuItem
import { menuData, getCategoryData, searchItems } from './data/menuData';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Get filtered data based on active category and search
  const displayData = useMemo(() => {
    // If searching, show search results
    if (searchQuery.trim()) {
      return searchItems(searchQuery);
    }
    
    // If "All" is selected, show all categories
    if (!activeCategory || activeCategory === 'all') {
      return menuData.categories;
    }
    
    // Show specific category
    const categoryData = getCategoryData(activeCategory);
    return categoryData ? [categoryData] : [];
  }, [searchQuery, activeCategory]);

  const isSearching = searchQuery.trim().length > 0;

  return (
    <div className="app">
      <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <CategoryTabs 
        categories={menuData.categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <main className="main-content">
        <div className="container">
          {isSearching ? (
            // Search results view
            displayData.length > 0 ? (
              <div className="search-results">
                <div className="search-results-header">
                  <span>🔍</span>
                  Found {displayData.reduce((acc, cat) => acc + cat.items.length, 0)} results for "{searchQuery}"
                </div>
                
                {displayData.map((result, idx) => (
                  <div key={idx} className="search-result-category">
                    <h2 className="category-name-luxury">
                      {result.category} <span style={{ opacity: 0.5, fontSize: '0.6em', marginLeft: '10px' }}>/ {result.subcategory}</span>
                    </h2>
                    <div className="grid-inner">
                      {result.items.map((item) => (
                        <MenuItem key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state-luxury">
                <div className="empty-icon">🍽️</div>
                <h3 className="empty-text">No culinary delights found</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  Try searching for something else on our exquisite menu.
                </p>
              </div>
            )
          ) : (
            // Category view
            displayData.length > 0 ? (
              displayData.map((category) => (
                <div key={category.id} className="category-section">
                  {(activeCategory === 'all') && (
                    <h2 className="category-name-luxury">{category.name}</h2>
                  )}
                  {category.subcategories.map((subcategory) => (
                    <SubcategorySection
                      key={subcategory.id}
                      subcategory={subcategory}
                      categoryName={category.name}
                    />
                  ))}
                </div>
              ))
            ) : (
              <div className="empty-state-luxury">
                <div className="empty-icon">📋</div>
                <h3 className="empty-text">Menu Section Empty</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  We are currently updating this section of our menu.
                </p>
              </div>
            )
          )}
        </div>
      </main>
      
      <footer className="footer-luxury">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 <span className="footer-brand">Presken Hotels & Resorts</span></p>
            <p style={{ marginTop: '8px', opacity: 0.6 }}>Redefining Hospitality with Technology and Speed</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

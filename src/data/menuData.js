// Hierarchical menu data structure for Presken
export const menuData = {
  categories: [
    {
      id: 'meals',
      name: 'Meals',
      subcategories: [
        {
          id: 'special-soups',
          name: 'Special Soups & Morsels',
          items: [
            {
              id: 1,
              name: 'White soup with any morsel',
              description: 'Served with turkey',
              price: '₦17,000.00',
              image: '/images/white-soup.jpg'
            },
            {
              id: 2,
              name: 'White soup with any morsel',
              description: 'Served with chicken or beef',
              price: '₦17,000.00',
              image: '/images/white-soup-2.jpg'
            },
            {
              id: 3,
              name: 'Vegetable soup with any morsel',
              description: 'Fresh vegetables with your choice of protein',
              price: '₦15,000.00',
              image: '/images/vegetable-soup.jpg'
            },
            {
              id: 4,
              name: 'Egusi soup special',
              description: 'Rich melon seed soup with assorted meat',
              price: '₦18,000.00',
              image: '/images/egusi-soup.jpg'
            }
          ]
        },
        {
          id: 'rice-dishes',
          name: 'Rice Dishes',
          items: [
            {
              id: 5,
              name: 'Jollof rice with chicken',
              description: 'Classic Nigerian jollof with grilled chicken',
              price: '₦12,000.00',
              image: '/images/jollof-rice.jpg'
            },
            {
              id: 6,
              name: 'Fried rice combo',
              description: 'Colorful fried rice with plantain and protein',
              price: '₦13,500.00',
              image: '/images/fried-rice.jpg'
            },
            {
              id: 7,
              name: 'Coconut rice',
              description: 'Aromatic rice cooked in coconut milk',
              price: '₦11,000.00',
              image: '/images/jollof-rice.jpg'
            }
          ]
        }
      ]
    },
    {
      id: 'grills',
      name: 'Grills',
      subcategories: [
        {
          id: 'chicken',
          name: 'Chicken',
          items: [
            {
              id: 8,
              name: 'Grilled chicken platter',
              description: 'Perfectly seasoned grilled chicken with sides',
              price: '₦15,000.00',
              image: '/images/grilled-chicken.jpg'
            },
            {
              id: 9,
              name: 'BBQ chicken wings',
              description: 'Spicy wings with our signature sauce',
              price: '₦8,500.00',
              image: '/images/grilled-chicken.jpg'
            }
          ]
        },
        {
          id: 'beef',
          name: 'Beef',
          items: [
            {
              id: 10,
              name: 'Suya platter',
              description: 'Spicy grilled beef skewers with onions',
              price: '₦8,000.00',
              image: '/images/suya.jpg'
            },
            {
              id: 11,
              name: 'BBQ ribs',
              description: 'Tender ribs with our signature BBQ sauce',
              price: '₦22,000.00',
              image: '/images/bbq-ribs.jpg'
            }
          ]
        },
        {
          id: 'fish',
          name: 'Fish & Seafood',
          items: [
            {
              id: 12,
              name: 'Grilled fish',
              description: 'Fresh tilapia grilled to perfection',
              price: '₦18,000.00',
              image: '/images/grilled-fish.jpg'
            }
          ]
        }
      ]
    },
    {
      id: 'drinks',
      name: 'Drinks',
      subcategories: [
        {
          id: 'soft-drinks',
          name: 'Soft Drinks',
          items: [
            {
              id: 13,
              name: 'Mineral Water',
              description: 'Chilled bottled water',
              price: '₦500.00',
              image: '/images/craft-beer.jpg'
            },
            {
              id: 14,
              name: 'Maltina',
              description: 'Non-alcoholic malt drink',
              price: '₦800.00',
              image: '/images/craft-beer.jpg'
            },
            {
              id: 15,
              name: 'Schweppes',
              description: 'Sparkling soft drink',
              price: '₦800.00',
              image: '/images/craft-beer.jpg'
            },
            {
              id: 16,
              name: 'Vita Milk',
              description: 'Refreshing milk drink',
              price: '₦600.00',
              image: '/images/craft-beer.jpg'
            }
          ]
        },
        {
          id: 'juices',
          name: 'Juices',
          items: [
            {
              id: 17,
              name: 'Fresh Orange Juice',
              description: 'Freshly squeezed orange juice',
              price: '₦2,500.00',
              image: '/images/chapman.jpg'
            },
            {
              id: 18,
              name: 'Pineapple Juice',
              description: 'Fresh pineapple juice',
              price: '₦2,500.00',
              image: '/images/chapman.jpg'
            }
          ]
        },
        {
          id: 'vodka',
          name: 'Vodka',
          items: [
            {
              id: 19,
              name: 'Smirnoff',
              description: 'Premium vodka',
              price: '₦15,000.00',
              image: '/images/craft-beer.jpg'
            },
            {
              id: 20,
              name: 'Absolut',
              description: 'Swedish vodka',
              price: '₦18,000.00',
              image: '/images/craft-beer.jpg'
            }
          ]
        },
        {
          id: 'cognac',
          name: 'Cognac',
          items: [
            {
              id: 21,
              name: 'Hennessy VS',
              description: 'Classic cognac',
              price: '₦45,000.00',
              image: '/images/craft-beer.jpg'
            },
            {
              id: 22,
              name: 'Rémy Martin VSOP',
              description: 'Premium cognac',
              price: '₦55,000.00',
              image: '/images/craft-beer.jpg'
            }
          ]
        },
        {
          id: 'whiskey',
          name: 'Whiskey',
          items: [
            {
              id: 23,
              name: 'Jameson',
              description: 'Irish whiskey',
              price: '₦25,000.00',
              image: '/images/craft-beer.jpg'
            },
            {
              id: 24,
              name: 'Jack Daniels',
              description: 'Tennessee whiskey',
              price: '₦28,000.00',
              image: '/images/craft-beer.jpg'
            }
          ]
        },
        {
          id: 'wine',
          name: 'Wine',
          items: [
            {
              id: 25,
              name: 'Red Wine (House)',
              description: 'Our selection of red wine',
              price: '₦12,000.00',
              image: '/images/palm-wine.jpg'
            },
            {
              id: 26,
              name: 'White Wine (House)',
              description: 'Our selection of white wine',
              price: '₦12,000.00',
              image: '/images/palm-wine.jpg'
            }
          ]
        },
        {
          id: 'beer',
          name: 'Beer',
          items: [
            {
              id: 27,
              name: 'Heineken',
              description: 'Premium lager beer',
              price: '₦1,500.00',
              image: '/images/craft-beer.jpg'
            },
            {
              id: 28,
              name: 'Guinness',
              description: 'Stout beer',
              price: '₦1,500.00',
              image: '/images/craft-beer.jpg'
            }
          ]
        },
        {
          id: 'cocktails',
          name: 'Cocktails',
          items: [
            {
              id: 29,
              name: 'Chapman',
              description: 'Refreshing Nigerian cocktail with citrus',
              price: '₦3,500.00',
              image: '/images/chapman.jpg'
            },
            {
              id: 30,
              name: 'Mojito',
              description: 'Classic mint and lime cocktail',
              price: '₦4,000.00',
              image: '/images/chapman.jpg'
            }
          ]
        },
        {
          id: 'local-drinks',
          name: 'Local Drinks',
          items: [
            {
              id: 31,
              name: 'Zobo drink',
              description: 'Hibiscus tea with ginger and pineapple',
              price: '₦2,000.00',
              image: '/images/zobo.jpg'
            },
            {
              id: 32,
              name: 'Fresh palm wine',
              description: 'Traditional palm wine served chilled',
              price: '₦4,000.00',
              image: '/images/palm-wine.jpg'
            }
          ]
        }
      ]
    },
    {
      id: 'smoothies',
      name: 'Smoothies',
      subcategories: [
        {
          id: 'fruit-smoothies',
          name: 'Fruit Smoothies',
          items: [
            {
              id: 33,
              name: 'Tropical mango smoothie',
              description: 'Fresh mango blended with yogurt',
              price: '₦3,000.00',
              image: '/images/mango-smoothie.jpg'
            },
            {
              id: 34,
              name: 'Berry blast',
              description: 'Mixed berries with banana and honey',
              price: '₦3,500.00',
              image: '/images/berry-smoothie.jpg'
            },
            {
              id: 35,
              name: 'Pineapple paradise',
              description: 'Fresh pineapple with coconut milk',
              price: '₦3,200.00',
              image: '/images/pineapple-smoothie.jpg'
            }
          ]
        },
        {
          id: 'detox-smoothies',
          name: 'Detox Smoothies',
          items: [
            {
              id: 36,
              name: 'Green detox',
              description: 'Spinach, apple, cucumber, and lime',
              price: '₦4,000.00',
              image: '/images/green-smoothie.jpg'
            }
          ]
        }
      ]
    }
  ]
};

// Get all items in a category (including all subcategories)
export const getItemsByCategory = (categoryId) => {
  if (!categoryId || categoryId === 'all') {
    // Return all items from all categories
    const allItems = [];
    menuData.categories.forEach(category => {
      category.subcategories.forEach(subcategory => {
        allItems.push(...subcategory.items);
      });
    });
    return allItems;
  }
  
  const category = menuData.categories.find(cat => cat.id === categoryId);
  if (!category) return [];
  
  const items = [];
  category.subcategories.forEach(subcategory => {
    items.push(...subcategory.items);
  });
  return items;
};

// Get category with all its subcategories
export const getCategoryData = (categoryId) => {
  return menuData.categories.find(cat => cat.id === categoryId);
};

// Search items across all categories
export const searchItems = (query) => {
  const lowerQuery = query.toLowerCase();
  const results = [];
  
  menuData.categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      const matchingItems = subcategory.items.filter(item => 
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery)
      );
      if (matchingItems.length > 0) {
        results.push({
          category: category.name,
          subcategory: subcategory.name,
          items: matchingItems
        });
      }
    });
  });
  
  return results;
};

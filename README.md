# Presken Hotels & Resorts - Menu App

A professional, modern React-based digital menu application for Presken Hotels & Resorts. Features a sophisticated design matching Presken's brand identity, with hierarchical menu organization and intuitive navigation.

## Features

- 🎨 **Premium Professional Design** - Clean, sophisticated aesthetic inspired by high-end restaurants
- 📊 **Hierarchical Menu Structure** - Categories → Subcategories → Items (e.g., Drinks → Soft Drinks → Mineral Water)
- 🔍 **Real-time Search** - Instantly filter menu items by name or description
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- 🏷️ **Category Filtering** - Browse by Meals, Grills, Drinks, Smoothies, and more
- ✨ **Smooth Animations** - Polished micro-interactions and transitions
- 🖼️ **Beautiful Food Photography** - AI-generated professional food images

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your system:
- [Download Node.js](https://nodejs.org/) (includes npm)

### Installation

1. Navigate to the project directory:
```bash
cd MeNu
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (typically `http://localhost:5173`)

## Project Structure

```
MeNu/
├── public/
│   └── images/          # Menu item images
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── CategoryTabs.jsx
│   │   ├── MenuItem.jsx
│   │   └── MenuSection.jsx
│   ├── data/
│   │   └── menuData.js  # Menu items and categories
│   ├── App.jsx          # Main application component
│   ├── App.css
│   ├── index.css        # Design system and global styles
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Updating Menu Items

Edit `src/data/menuData.js` to add, remove, or modify menu items:

```javascript
{
  id: 1,
  name: 'Your Dish Name',
  description: 'Delicious description',
  price: '₦10,000.00',
  category: 'Meals',
  image: '/images/your-image.jpg'
}
```

### Adding Categories

Update the `categories` array in `src/data/menuData.js`:

```javascript
categories: ['All', 'Meals', 'Grills', 'Drinks', 'Your Category']
```

### Changing Colors

Modify CSS variables in `src/index.css`:

```css
:root {
  --color-accent-primary: #ff6b35;
  --color-accent-secondary: #f7931e;
  /* Add your custom colors */
}
```

### Restaurant Name

Update the hero title in `src/components/Hero.jsx`:

```jsx
<h1 className="hero-title fade-in">Welcome to Your Restaurant</h1>
```

## Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Technologies Used

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with CSS variables
- **Google Fonts** - Inter and Playfair Display

## License

© 2025 Presken Hotels & Resorts. All rights reserved.

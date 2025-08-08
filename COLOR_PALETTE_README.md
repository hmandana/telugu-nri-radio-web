# Color Palette Documentation

This document outlines the custom color palette implementation for Telugu NRI Radio Web application.

## 🎨 Brand Color Palette

The following colors have been added to the application:

- **Orange** (`#e68b24`) - Primary brand color
- **Cream** (`#fbecc1`) - Light background and accent
- **Yellow** (`#fac736`) - Bright accent color
- **Amber** (`#f9ab28`) - Warm secondary color
- **Gold** (`#f2b768`) - Golden tone for highlights

## 🛠️ Implementation

### 1. Tailwind Configuration

The colors are defined in `tailwind.config.js`:

```javascript
colors: {
  brand: {
    orange: '#e68b24',
    cream: '#fbecc1',
    yellow: '#fac736',
    amber: '#f9ab28',
    gold: '#f2b768',
  },
  custom: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    accent: 'var(--color-accent)',
    background: 'var(--color-background)',
    surface: 'var(--color-surface)',
  }
}
```

### 2. CSS Custom Properties

CSS variables are defined in `src/index.css` for theme-aware colors:

```css
:root {
  /* Brand Colors (static) */
  --brand-orange: #e68b24;
  --brand-cream: #fbecc1;
  --brand-yellow: #fac736;
  --brand-amber: #f9ab28;
  --brand-gold: #f2b768;
  
  /* Theme-aware colors (dynamic) */
  --color-primary: #f9ab28;
  --color-secondary: #e68b24;
  --color-accent: #fac736;
  --color-background: #fbecc1;
  --color-surface: #ffffff;
}
```

### 3. Theme Context Enhancement

The `ThemeContext.jsx` has been enhanced to include:

- Brand color object for static access
- Theme-aware color mappings that change based on dark/light mode
- Dynamic CSS custom property updates

## 🚀 Usage

### Static Brand Colors

Use these for consistent brand colors across themes:

```jsx
// Tailwind classes
<div className="bg-brand-orange text-brand-cream">
  Brand colored content
</div>

// Theme context
const { brand } = useTheme();
<div style={{ backgroundColor: brand.orange }}>
  Direct color usage
</div>
```

### Theme-Aware Colors

These colors adapt to the current theme (light/dark):

```jsx
// CSS custom properties
<div className="bg-custom-primary text-custom-accent">
  Theme-aware content
</div>

// Theme context
const { theme } = useTheme();
<button className={theme.button.primary}>
  Themed button
</button>
```

### Available Tailwind Classes

#### Background Colors
- `bg-brand-orange`, `bg-brand-cream`, `bg-brand-yellow`, `bg-brand-amber`, `bg-brand-gold`
- `bg-custom-primary`, `bg-custom-secondary`, `bg-custom-accent`, `bg-custom-background`, `bg-custom-surface`

#### Text Colors
- `text-brand-orange`, `text-brand-cream`, `text-brand-yellow`, `text-brand-amber`, `text-brand-gold`
- `text-custom-primary`, `text-custom-secondary`, `text-custom-accent`

#### Border Colors
- `border-brand-orange`, `border-brand-cream`, `border-brand-yellow`, `border-brand-amber`, `border-brand-gold`

## 🎯 Theme Context API

### Properties Available

```javascript
const {
  isDarkMode,        // Boolean: current theme mode
  toggleTheme,       // Function: switch between light/dark
  brand,            // Object: static brand colors
  theme            // Object: theme-aware styles
} = useTheme();
```

### Theme Object Structure

```javascript
theme: {
  bg: {
    primary: "...",           // Main background
    secondary: "...",         // Secondary background
    tertiary: "...",          // Tertiary background
    card: "...",             // Card backgrounds
    cardHover: "...",        // Card hover state
    accent: "...",           // Brand gradient accent
    accentMuted: "...",      // Subtle brand accent
    brandPrimary: "...",     // Direct brand primary
    brandSecondary: "...",   // Direct brand secondary
    brandAccent: "...",      // Direct brand accent
  },
  text: {
    primary: "...",          // Main text
    secondary: "...",        // Secondary text
    tertiary: "...",         // Muted text
    accent: "...",           // Theme-aware accent
    brandPrimary: "...",     // Brand primary text
    brandSecondary: "...",   // Brand secondary text
    brandAccent: "...",      // Brand accent text
    hoverAccent: "...",      // Interactive text
  },
  border: {
    primary: "...",          // Main borders
    secondary: "...",        // Secondary borders
    light: "...",            // Light borders
    brand: "...",            // Brand colored borders
    brandAccent: "...",      // Brand accent borders
  },
  button: {
    primary: "...",          // Main buttons
    secondary: "...",        // Secondary buttons
    ghost: "...",            // Ghost buttons
    brandOutline: "...",     // Brand outline buttons
  },
  navbar: {
    bg: "...",               // Navbar background
    text: "...",             // Navbar text
    textMuted: "...",        // Navbar muted text
    textHover: "...",        // Navbar hover text
    buttonBg: "...",         // Navbar button background
  },
  player: {
    background: "...",       // Player background
    border: "...",           // Player border
    text: "...",             // Player text
    textMuted: "...",        // Player muted text
  }
}
```

## 🧪 Testing

Visit `/colors` route to see the color palette demo with:
- All brand colors displayed
- Theme-aware component examples
- Interactive theme switching
- Usage instructions and examples

## 🔄 Theme Switching

Colors automatically adapt when switching between light and dark modes:

### Light Mode
- Primary: `#f9ab28` (amber)
- Secondary: `#e68b24` (orange)
- Background: `#fbecc1` (cream)

### Dark Mode
- Primary: `#e68b24` (orange)
- Secondary: `#f9ab28` (amber)
- Background: `#1f2937` (dark gray)

## 📱 Responsive Behavior

All colors maintain their contrast ratios and accessibility across different screen sizes and themes.

## 🎨 Color Accessibility

The palette has been designed with accessibility in mind:
- Sufficient contrast ratios for text readability
- Color combinations that work for colorblind users
- Consistent visual hierarchy across themes

## 🔧 Customization

To modify colors:

1. Update hex values in `tailwind.config.js`
2. Adjust CSS custom properties in `src/index.css`
3. Update theme mappings in `src/contexts/ThemeContext.jsx`
4. Test changes using the `/colors` demo route

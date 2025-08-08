import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Default to system preference
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update document class for global styling
    const root = document.documentElement;
    const body = document.body;
    
    if (isDarkMode) {
      root.classList.add('dark');
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      body.classList.add('light');
    }
    
    // Set CSS custom properties for theme-aware colors
    if (isDarkMode) {
      // Dark theme colors
      root.style.setProperty('--color-primary', '#e68b24');
      root.style.setProperty('--color-secondary', '#f9ab28');
      root.style.setProperty('--color-accent', '#fac736');
      root.style.setProperty('--color-background', '#0f0f0f');
      root.style.setProperty('--color-surface', '#1a1a1a');
    } else {
      // Light theme colors
      root.style.setProperty('--color-primary', '#f9ab28');
      root.style.setProperty('--color-secondary', '#e68b24');
      root.style.setProperty('--color-accent', '#fac736');
      root.style.setProperty('--color-background', '#fbecc1');
      root.style.setProperty('--color-surface', '#ffffff');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const value = {
    isDarkMode,
    toggleTheme,
    // Enhanced brand colors with better contrast
    brand: {
      orange: '#ff6b35',     // More vibrant orange
      cream: '#fff8dc',      // Softer cream/cornsilk
      yellow: '#ffd700',     // Pure gold yellow
      amber: '#ff8c00',      // Dark orange/amber
      gold: '#daa520',       // Goldenrod
      blue: '#4a90e2',       // Soft blue accent
      purple: '#8e44ad',     // Purple accent
    },
    theme: {
      // Background colors with softer, more comfortable gradients
      bg: {
        primary: isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900' 
          : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100',
        secondary: isDarkMode 
          ? 'bg-gradient-to-r from-slate-800/90 via-gray-800 to-slate-800/90' 
          : 'bg-gradient-to-r from-gray-200/80 to-gray-300/60',
        tertiary: isDarkMode 
          ? 'bg-gradient-to-br from-slate-700/80 via-gray-700 to-slate-700/80' 
          : 'bg-gradient-to-br from-gray-200 to-gray-100/80',
        card: isDarkMode ? 'bg-slate-800/95 backdrop-blur-md' : 'bg-gray-50/95 backdrop-blur-md',
        cardHover: isDarkMode ? 'hover:bg-slate-700/90 border-slate-600' : 'hover:bg-gray-100 border-gray-300',
        accent: isDarkMode 
          ? 'bg-gradient-to-r from-orange-600 to-amber-600' 
          : 'bg-gradient-to-r from-orange-500 to-yellow-500',
        accentMuted: isDarkMode 
          ? 'bg-gradient-to-r from-orange-600/20 to-amber-600/20' 
          : 'bg-gradient-to-r from-orange-400/30 to-yellow-400/30',
        brandPrimary: isDarkMode ? 'bg-orange-600' : 'bg-orange-500',
        brandSecondary: isDarkMode ? 'bg-amber-600' : 'bg-amber-500',
        brandAccent: isDarkMode ? 'bg-yellow-500' : 'bg-yellow-400',
      },
      // Text colors with improved contrast and readability on softer backgrounds
      text: {
        primary: isDarkMode ? 'text-gray-100' : 'text-gray-800',
        secondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
        tertiary: isDarkMode ? 'text-gray-400' : 'text-gray-500',
        muted: isDarkMode ? 'text-gray-500' : 'text-gray-400',
        accent: isDarkMode ? 'text-yellow-400' : 'text-orange-600',
        dark: 'text-black',
        brandPrimary: isDarkMode ? 'text-orange-400' : 'text-orange-700',
        brandSecondary: isDarkMode ? 'text-amber-400' : 'text-amber-700',
        brandAccent: isDarkMode ? 'text-yellow-400' : 'text-yellow-600',
        hoverAccent: isDarkMode ? 'hover:text-orange-300' : 'hover:text-orange-500',
      },
      // Border colors with better visual separation
      border: {
        primary: isDarkMode ? 'border-slate-600' : 'border-gray-300',
        secondary: isDarkMode ? 'border-slate-500' : 'border-gray-400',
        light: isDarkMode ? 'border-slate-700' : 'border-gray-200',
        brand: isDarkMode ? 'border-orange-500/60' : 'border-orange-400/60',
        brandAccent: isDarkMode ? 'border-yellow-400/40' : 'border-orange-400/40',
      },
      // Button colors using enhanced system
      button: {
        primary: isDarkMode 
          ? 'bg-brand-orange-500 hover:bg-brand-amber-500 text-white border border-brand-orange-400' 
          : 'bg-brand-amber-500 hover:bg-brand-orange-500 text-white border border-brand-amber-400',
        secondary: isDarkMode 
          ? 'bg-dark-bg-tertiary hover:bg-dark-bg-card text-dark-text-primary border border-dark-border-primary' 
          : 'bg-brand-cream-200 hover:bg-brand-gold-200 text-light-text-primary border border-light-border-secondary',
        ghost: isDarkMode 
          ? 'hover:bg-brand-orange-500/20 text-brand-orange-400 border border-transparent hover:border-brand-orange-500/30' 
          : 'hover:bg-brand-amber-400/20 text-brand-amber-600 border border-transparent hover:border-brand-amber-400/40',
        brandOutline: isDarkMode 
          ? 'border-2 border-brand-orange-500 text-brand-orange-400 hover:bg-brand-orange-500 hover:text-white' 
          : 'border-2 border-brand-amber-500 text-brand-amber-600 hover:bg-brand-amber-500 hover:text-white',
      },
      // Navbar specific with enhanced colors
      navbar: {
        bg: isDarkMode 
          ? 'bg-gradient-to-r from-dark-bg-primary/95 via-dark-bg-secondary/90 to-dark-bg-primary/95 backdrop-blur-xl' 
          : 'bg-gradient-to-r from-light-bg-primary/95 via-brand-cream-100/80 to-light-bg-primary/95 backdrop-blur-xl',
        text: isDarkMode ? 'text-dark-text-primary' : 'text-light-text-primary',
        textMuted: isDarkMode ? 'text-dark-text-secondary' : 'text-light-text-secondary',
        textHover: isDarkMode ? 'text-brand-yellow-400' : 'text-brand-orange-500',
        buttonBg: isDarkMode 
          ? 'hover:bg-brand-orange-500/10 border border-transparent hover:border-brand-orange-500/20' 
          : 'hover:bg-brand-amber-400/10 border border-transparent hover:border-brand-amber-400/20',
      },
      // Player specific with elegant, subtle colors
      player: {
        background: isDarkMode 
          ? 'bg-gradient-to-r from-slate-800 to-slate-700' 
          : 'bg-gradient-to-r from-white to-gray-50',
        border: isDarkMode 
          ? 'border border-slate-600/50 hover:border-slate-500/70' 
          : 'border border-gray-300/50 hover:border-gray-400/70',
        text: isDarkMode ? 'text-white font-semibold' : 'text-gray-800 font-semibold',
        textMuted: isDarkMode ? 'text-gray-300' : 'text-gray-600',
      }
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

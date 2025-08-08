/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom brand color palette
        brand: {
          orange: {
            DEFAULT: '#e68b24',
            50: '#fef7ed',
            100: '#fdedd3',
            200: '#fad9a6',
            300: '#f6bd6f',
            400: '#f19536',
            500: '#e68b24',
            600: '#d16013',
            700: '#b04112',
            800: '#8f3317',
            900: '#742b16',
          },
          cream: {
            DEFAULT: '#fbecc1',
            50: '#fefef9',
            100: '#fdfcf0',
            200: '#fbf6dc',
            300: '#f8edc1',
            400: '#f4df9b',
            500: '#edc569',
            600: '#dda63a',
            700: '#c8941f',
            800: '#a3791c',
            900: '#85651c',
          },
          amber: {
            DEFAULT: '#f9ab28',
            50: '#fefbf0',
            100: '#fef4d6',
            200: '#fce7ad',
            300: '#f9d479',
            400: '#f9ab28',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
          },
          yellow: {
            DEFAULT: '#fac736',
            50: '#fefce8',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#fac736',
            500: '#eab308',
            600: '#ca8a04',
            700: '#a16207',
            800: '#854d0e',
            900: '#713f12',
          },
          gold: {
            DEFAULT: '#f2b768',
            50: '#fef8f0',
            100: '#fdefd6',
            200: '#fbdcad',
            300: '#f8c179',
            400: '#f2b768',
            500: '#ee9833',
            600: '#df7c1f',
            700: '#b9611c',
            800: '#944e1d',
            900: '#78421b',
          },
        },
        // Dark mode specific colors
        dark: {
          bg: {
            primary: '#0f0f0f',
            secondary: '#1a1a1a',
            tertiary: '#262626',
            card: '#2a2a2a',
          },
          text: {
            primary: '#ffffff',
            secondary: '#d1d5db',
            tertiary: '#9ca3af',
            muted: '#6b7280',
          },
          border: {
            primary: '#404040',
            secondary: '#525252',
            light: '#333333',
          },
        },
        // Light mode specific colors
        light: {
          bg: {
            primary: '#ffffff',
            secondary: '#f8fafc',
            tertiary: '#f1f5f9',
            card: '#ffffff',
          },
          text: {
            primary: '#1f2937',
            secondary: '#4b5563',
            tertiary: '#6b7280',
            muted: '#9ca3af',
          },
          border: {
            primary: '#e5e7eb',
            secondary: '#d1d5db',
            light: '#f3f4f6',
          },
        },
        // Theme-aware custom colors
        custom: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          accent: 'var(--color-accent)',
          background: 'var(--color-background)',
          surface: 'var(--color-surface)',
        }
      },
      backgroundImage: {
        'brand-gradient-light': 'linear-gradient(135deg, #fbecc1 0%, #f9ab28 100%)',
        'brand-gradient-dark': 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
        'brand-gradient-orange': 'linear-gradient(135deg, #f9ab28 0%, #e68b24 100%)',
        'brand-gradient-yellow': 'linear-gradient(135deg, #fac736 0%, #f2b768 100%)',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'live-glow': 'live-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'live-glow': {
          '0%': { opacity: '0.5', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}

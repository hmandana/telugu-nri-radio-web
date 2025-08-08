import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ColorPaletteDemo = () => {
  const { theme, brand, toggleTheme, isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen p-8 transition-all duration-300 ${theme.bg.primary}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className={`text-3xl font-bold ${theme.text.primary}`}>
            Color Palette Demo
          </h1>
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${theme.button.primary}`}
          >
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>

        {/* Brand Colors Section */}
        <div className={`p-6 rounded-xl mb-8 ${theme.bg.card}`}>
          <h2 className={`text-2xl font-semibold mb-6 ${theme.text.primary}`}>
            Brand Color Palette
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {Object.entries(brand).map(([name, color]) => (
              <div key={name} className="flex flex-col items-center">
                <div
                  className="w-20 h-20 rounded-lg shadow-lg mb-3 border-2 border-gray-200 dark:border-gray-600"
                  style={{ backgroundColor: color }}
                ></div>
                <h3 className={`text-sm font-medium ${theme.text.primary} capitalize`}>
                  {name}
                </h3>
                <p className={`text-xs ${theme.text.tertiary} font-mono`}>
                  {color}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Theme-Aware Components Demo */}
        <div className={`p-6 rounded-xl mb-8 ${theme.bg.card}`}>
          <h2 className={`text-2xl font-semibold mb-6 ${theme.text.primary}`}>
            Theme-Aware Components
          </h2>
          
          {/* Buttons */}
          <div className="mb-6">
            <h3 className={`text-lg font-medium mb-3 ${theme.text.secondary}`}>
              Button Variants
            </h3>
            <div className="flex flex-wrap gap-4">
              <button className={`px-4 py-2 rounded-lg ${theme.button.primary} transition-colors`}>
                Primary Button
              </button>
              <button className={`px-4 py-2 rounded-lg ${theme.button.secondary} transition-colors`}>
                Secondary Button
              </button>
              <button className={`px-4 py-2 rounded-lg border ${theme.button.brandOutline} transition-colors`}>
                Brand Outline
              </button>
              <button className={`px-4 py-2 rounded-lg ${theme.button.ghost} transition-colors ${theme.text.primary}`}>
                Ghost Button
              </button>
            </div>
          </div>

          {/* Cards with different backgrounds */}
          <div className="mb-6">
            <h3 className={`text-lg font-medium mb-3 ${theme.text.secondary}`}>
              Background Variations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg ${theme.bg.accent}`}>
                <h4 className="text-white font-semibold mb-2">Accent Background</h4>
                <p className="text-white/80 text-sm">Gradient brand colors</p>
              </div>
              <div className={`p-4 rounded-lg ${theme.bg.accentMuted}`}>
                <h4 className={`font-semibold mb-2 ${theme.text.primary}`}>Accent Muted</h4>
                <p className={`text-sm ${theme.text.secondary}`}>Subtle brand accent</p>
              </div>
              <div className={`p-4 rounded-lg ${theme.bg.cardHover} ${theme.border.brand} border-2`}>
                <h4 className={`font-semibold mb-2 ${theme.text.primary}`}>Brand Border</h4>
                <p className={`text-sm ${theme.text.secondary}`}>With brand border</p>
              </div>
            </div>
          </div>

          {/* Text Color Variations */}
          <div className="mb-6">
            <h3 className={`text-lg font-medium mb-3 ${theme.text.secondary}`}>
              Text Color Variations
            </h3>
            <div className="space-y-2">
              <p className={`${theme.text.brandPrimary} font-semibold`}>
                Brand Primary Text Color
              </p>
              <p className={`${theme.text.brandSecondary} font-semibold`}>
                Brand Secondary Text Color
              </p>
              <p className={`${theme.text.brandAccent} font-semibold`}>
                Brand Accent Text Color
              </p>
              <p className={`${theme.text.accent} hover:${theme.text.hoverAccent} cursor-pointer transition-colors`}>
                Interactive Accent Text (hover me!)
              </p>
            </div>
          </div>
        </div>

        {/* Live Demo of Theme Variables */}
        <div className={`p-6 rounded-xl ${theme.bg.card}`}>
          <h2 className={`text-2xl font-semibold mb-6 ${theme.text.primary}`}>
            CSS Custom Properties Demo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg bg-custom-primary shadow-md mb-2"></div>
              <span className={`text-xs ${theme.text.tertiary}`}>Primary</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg bg-custom-secondary shadow-md mb-2"></div>
              <span className={`text-xs ${theme.text.tertiary}`}>Secondary</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg bg-custom-accent shadow-md mb-2"></div>
              <span className={`text-xs ${theme.text.tertiary}`}>Accent</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg bg-custom-background shadow-md mb-2"></div>
              <span className={`text-xs ${theme.text.tertiary}`}>Background</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-lg bg-custom-surface shadow-md mb-2"></div>
              <span className={`text-xs ${theme.text.tertiary}`}>Surface</span>
            </div>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className={`p-6 rounded-xl mt-8 ${theme.bg.secondary}`}>
          <h2 className={`text-2xl font-semibold mb-4 ${theme.text.primary}`}>
            Usage Instructions
          </h2>
          <div className={`space-y-3 ${theme.text.secondary}`}>
            <p>
              <strong>Brand Colors:</strong> Use <code className="bg-gray-700 text-brand-yellow px-2 py-1 rounded">bg-brand-orange</code>, 
              <code className="bg-gray-700 text-brand-yellow px-2 py-1 rounded">text-brand-amber</code>, etc.
            </p>
            <p>
              <strong>Theme-Aware:</strong> Use <code className="bg-gray-700 text-brand-yellow px-2 py-1 rounded">bg-custom-primary</code>, 
              <code className="bg-gray-700 text-brand-yellow px-2 py-1 rounded">text-custom-accent</code> for colors that change with theme.
            </p>
            <p>
              <strong>Theme Object:</strong> Access theme colors via <code className="bg-gray-700 text-brand-yellow px-2 py-1 rounded">theme.bg.accent</code>, 
              <code className="bg-gray-700 text-brand-yellow px-2 py-1 rounded">theme.text.brandPrimary</code>, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteDemo;

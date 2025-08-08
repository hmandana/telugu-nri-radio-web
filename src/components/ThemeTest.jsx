import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeTest = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${theme.bg.primary} p-8`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`${theme.bg.card} rounded-lg p-6 mb-8 ${theme.border.primary} border-2`}>
          <h1 className={`text-3xl font-bold ${theme.text.primary} mb-4`}>
            Telugu NRI Radio - Theme Test
          </h1>
          <p className={`${theme.text.secondary} mb-4`}>
            Current theme: <span className={`font-semibold ${theme.text.accent}`}>
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
          </p>
          <button 
            onClick={toggleTheme}
            className={`${theme.button.primary} px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105`}
          >
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>

        {/* Color Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Text Colors */}
          <div className={`${theme.bg.card} rounded-lg p-6 ${theme.border.primary} border`}>
            <h3 className={`text-xl font-bold ${theme.text.primary} mb-4`}>Text Colors</h3>
            <div className="space-y-2">
              <p className={theme.text.primary}>Primary Text</p>
              <p className={theme.text.secondary}>Secondary Text</p>
              <p className={theme.text.tertiary}>Tertiary Text</p>
              <p className={theme.text.muted}>Muted Text</p>
              <p className={theme.text.accent}>Accent Text</p>
              <p className={theme.text.brandPrimary}>Brand Primary</p>
              <p className={theme.text.brandSecondary}>Brand Secondary</p>
              <p className={theme.text.brandAccent}>Brand Accent</p>
            </div>
          </div>

          {/* Background Colors */}
          <div className={`${theme.bg.card} rounded-lg p-6 ${theme.border.primary} border`}>
            <h3 className={`text-xl font-bold ${theme.text.primary} mb-4`}>Background Colors</h3>
            <div className="space-y-3">
              <div className={`${theme.bg.brandPrimary} p-3 rounded text-white font-semibold`}>
                Brand Primary
              </div>
              <div className={`${theme.bg.brandSecondary} p-3 rounded text-white font-semibold`}>
                Brand Secondary
              </div>
              <div className={`${theme.bg.brandAccent} p-3 rounded text-black font-semibold`}>
                Brand Accent
              </div>
              <div className={`${theme.bg.accent} p-3 rounded text-white font-semibold`}>
                Gradient Accent
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className={`${theme.bg.card} rounded-lg p-6 ${theme.border.primary} border`}>
            <h3 className={`text-xl font-bold ${theme.text.primary} mb-4`}>Button Styles</h3>
            <div className="space-y-3">
              <button className={`${theme.button.primary} px-4 py-2 rounded w-full`}>
                Primary Button
              </button>
              <button className={`${theme.button.secondary} px-4 py-2 rounded w-full`}>
                Secondary Button
              </button>
              <button className={`${theme.button.ghost} px-4 py-2 rounded w-full transition-colors duration-200`}>
                Ghost Button
              </button>
              <button className={`${theme.button.brandOutline} px-4 py-2 rounded w-full transition-all duration-200`}>
                Brand Outline
              </button>
            </div>
          </div>
        </div>

        {/* Live Demo Card */}
        <div className={`${theme.bg.card} rounded-xl p-8 ${theme.border.brand} border-2`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-live-glow"></div>
            <h2 className={`text-2xl font-bold ${theme.text.primary}`}>Live Radio Player Preview</h2>
            <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">LIVE</span>
          </div>
          
          <div className={`${theme.player.background} rounded-2xl p-6 ${theme.player.border}`}>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎵</span>
              </div>
              <div className="flex-1">
                <h3 className={`${theme.player.text} text-lg font-bold`}>
                  Telugu NRI Radio - LIVE
                </h3>
                <p className={`${theme.player.textMuted} text-sm`}>
                  Connecting Telugu hearts worldwide
                </p>
              </div>
              <button className="bg-white/20 hover:bg-white/30 text-black font-bold p-3 rounded-full transition-all duration-200 hover:scale-110">
                ▶
              </button>
            </div>
          </div>
        </div>

        {/* Theme Details */}
        <div className={`${theme.bg.card} rounded-lg p-6 mt-8 ${theme.border.primary} border`}>
          <h3 className={`text-xl font-bold ${theme.text.primary} mb-4`}>Theme System Info</h3>
          <div className={`${theme.text.secondary} space-y-2 text-sm font-mono`}>
            <p>Mode: {isDarkMode ? 'Dark' : 'Light'}</p>
            <p>Primary: {isDarkMode ? '#e68b24' : '#f9ab28'}</p>
            <p>Background: {isDarkMode ? '#0f0f0f' : '#fbecc1'}</p>
            <p>Surface: {isDarkMode ? '#1a1a1a' : '#ffffff'}</p>
            <p>Text: {isDarkMode ? '#ffffff' : '#1f2937'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeTest;

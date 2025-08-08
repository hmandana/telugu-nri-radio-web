import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const MusicWaveBackground = ({ 
  intensity = 'normal', 
  children, 
  mode = 'fullscreen', // 'fullscreen' or 'banner'
  className = '',
  containerHeight = 'min-h-screen'
}) => {
  const { theme, isDarkMode } = useTheme();
  const [waveHeights, setWaveHeights] = useState(Array(100).fill(0));
  const [animationTime, setAnimationTime] = useState(0);

  // Set wave parameters based on intensity and mode
  const getIntensitySettings = () => {
    const baseSettings = {
      light: { baseHeight: 40, maxHeight: 150, speed: 180, opacity1: 0.12, opacity2: 0.06 },
      strong: { baseHeight: 80, maxHeight: 320, speed: 100, opacity1: 0.28, opacity2: 0.16 },
      normal: { baseHeight: 60, maxHeight: 250, speed: 130, opacity1: 0.18, opacity2: 0.10 }
    };
    
    const settings = baseSettings[intensity] || baseSettings.normal;
    
    // Adjust opacity for banner mode to match fullscreen intensity
    if (mode === 'banner') {
      return {
        ...settings,
        opacity1: settings.opacity1 * 1.0, // Same intensity as fullscreen
        opacity2: settings.opacity2 * 1.0  // Same intensity as fullscreen
      };
    }
    
    return settings;
  };

  const { baseHeight, maxHeight, speed, opacity1, opacity2 } = getIntensitySettings();

  // Get gradient colors based on theme
  const getGradientColors = (index, total) => {
    const progress = index / total;
    if (isDarkMode) {
      // Bright yellow to orange gradient for dark mode
      const yellow = { r: 251, g: 191, b: 36 }; // yellow-400 (bright)
      const orange = { r: 249, g: 115, b: 22 }; // orange-500 (bright)
      const r = Math.round(yellow.r + (orange.r - yellow.r) * progress);
      const g = Math.round(yellow.g + (orange.g - yellow.g) * progress);
      const b = Math.round(yellow.b + (orange.b - yellow.b) * progress);
      return `rgb(${r}, ${g}, ${b})`;
    } else {
      // Medium orange to yellow gradient for light mode - visible but not too bright
      const orange = { r: 217, g: 119, b: 6 }; // orange-600 (medium)
      const yellow = { r: 202, g: 138, b: 4 }; // yellow-600 (medium)
      const r = Math.round(orange.r + (yellow.r - orange.r) * progress);
      const g = Math.round(orange.g + (yellow.g - orange.g) * progress);
      const b = Math.round(orange.b + (yellow.b - orange.b) * progress);
      return `rgb(${r}, ${g}, ${b})`;
    }
  };

  // Music wave animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setWaveHeights(prev => 
        prev.map(() => Math.random() * maxHeight + baseHeight)
      );
      setAnimationTime(prev => prev + 0.1);
    }, speed);

    return () => clearInterval(interval);
  }, [baseHeight, maxHeight, speed]);

  // Different rendering based on mode
  if (mode === 'banner') {
    return (
      <>
        {/* Wave background positioned absolutely behind content */}
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
          {/* Primary wave layer */}
          <div 
            className="absolute top-1/2 left-0 right-0 flex items-center justify-between overflow-hidden px-2 transform -translate-y-1/2"
            style={{ opacity: opacity1 }}
          >
            {waveHeights.map((height, index) => (
              <div
                key={index}
                className="rounded-full transition-all duration-150 ease-in-out flex-shrink-0"
                style={{
                  width: 'calc(100% / 100 - 2px)',
                  minWidth: '3px',
                  maxWidth: '8px',
                  height: `${height * 0.7}px`,
                  backgroundColor: getGradientColors(index, waveHeights.length),
                  animationDelay: `${index * 20}ms`,
                  transform: `translateY(${Math.sin(index * 0.5 + animationTime) * 20}px)`
                }}
              />
            ))}
          </div>

          {/* Secondary wave layer for depth */}
          <div 
            className="absolute top-1/2 left-0 right-0 flex items-center justify-between overflow-hidden px-3 transform -translate-y-1/2"
            style={{ opacity: opacity2 }}
          >
            {waveHeights.map((height, index) => (
              <div
                key={`wave2-${index}`}
                className="rounded-full transition-all duration-200 ease-in-out flex-shrink-0"
                style={{
                  width: 'calc(100% / 100 - 3px)',
                  minWidth: '2px',
                  maxWidth: '6px',
                  height: `${height * 0.5}px`,
                  backgroundColor: getGradientColors(index, waveHeights.length),
                  animationDelay: `${index * 15}ms`,
                  transform: `translateY(${Math.sin((index + 10) * 0.4 + animationTime) * 15}px)`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Content rendered normally */}
        {children}
      </>
    );
  }

  // Default fullscreen mode
  return (
    <div className={`relative ${containerHeight} overflow-hidden ${className}`}>
      {/* Primary wave layer */}
      <div 
        className="absolute top-1/2 left-0 right-0 flex items-center justify-between overflow-hidden px-2 transform -translate-y-1/2"
        style={{ opacity: opacity1 }}
      >
        {waveHeights.map((height, index) => (
          <div
            key={index}
            className="rounded-full transition-all duration-150 ease-in-out flex-shrink-0"
            style={{
              width: 'calc(100vw / 100 - 2px)',
              minWidth: '4px',
              maxWidth: '12px',
              height: `${height}px`,
              backgroundColor: getGradientColors(index, waveHeights.length),
              animationDelay: `${index * 20}ms`,
              transform: `translateY(${Math.sin(index * 0.5 + animationTime) * 30}px)`
            }}
          />
        ))}
      </div>

      {/* Secondary wave layer for depth */}
      <div 
        className="absolute top-1/2 left-0 right-0 flex items-center justify-between overflow-hidden px-3 transform -translate-y-1/2"
        style={{ opacity: opacity2 }}
      >
        {waveHeights.map((height, index) => (
          <div
            key={`wave2-${index}`}
            className="rounded-full transition-all duration-200 ease-in-out flex-shrink-0"
            style={{
              width: 'calc(100vw / 100 - 3px)',
              minWidth: '3px',
              maxWidth: '10px',
              height: `${height * 0.8}px`,
              backgroundColor: getGradientColors(index, waveHeights.length),
              animationDelay: `${index * 15}ms`,
              transform: `translateY(${Math.sin((index + 10) * 0.4 + animationTime) * 25}px)`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default MusicWaveBackground;

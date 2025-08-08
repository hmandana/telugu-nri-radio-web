import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import MusicWaveBackground from './MusicWaveBackground';
import logoSvg from '/logo.svg';

const Banner = ({ 
  title, 
  description, 
  subtitle, // New optional subtitle
  children, 
  titleElement = 'h2',
  showLogo = true,
  logoSize = 'medium', // 'small', 'medium', 'large'
  className = '',
  showBackground = true, // Whether to show the music wave background
  backgroundIntensity = 'strong', // 'light', 'normal', 'strong'
  layout = 'default' // 'default', 'centered', 'side-by-side'
}) => {
  const { theme } = useTheme();

  const getLogoSizeClasses = () => {
    switch (logoSize) {
      case 'small':
        return 'w-12 h-12 sm:w-16 sm:h-16';
      case 'medium':
        return 'w-16 h-16 sm:w-20 sm:h-20';
      case 'large':
        return 'w-20 h-20 sm:w-24 sm:h-24';
      default:
        return 'w-16 h-16 sm:w-20 sm:h-20';
    }
  };

  const getTitleClasses = () => {
    if (titleElement === 'h1') {
      return `text-xl sm:text-2xl md:text-3xl font-bold ${theme.text.primary} mb-2 drop-shadow-lg`;
    }
    return `text-lg sm:text-xl font-semibold ${theme.text.secondary} mb-2`;
  };

  const TitleComponent = titleElement;

  const bannerContent = (
    <div className={`relative ${theme.bg.card} backdrop-blur-lg rounded-2xl border ${theme.border.light} shadow-xl w-full max-w-4xl mx-auto mb-6 overflow-hidden ${className}`}>
      {/* Gradient overlay for enhanced visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-yellow-500/5 to-transparent pointer-events-none"></div>
      
      {/* Main content container with compact layout */}
      <div className="relative z-10 p-4 sm:p-6">
        {layout === 'side-by-side' ? (
          /* Compact side-by-side layout */
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Logo Section */}
            {showLogo && (
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/30 to-orange-500/20 rounded-full blur-lg scale-125"></div>
                <img
                  src={logoSvg}
                  alt="Telugu NRI Radio Logo"
                  className={`${getLogoSizeClasses()} relative z-10 drop-shadow-xl hover:scale-105 transition-all duration-300`}
                />
              </div>
            )}
            
            {/* Content Section */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              {title && (
                <TitleComponent className={getTitleClasses()}>
                  <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    {title}
                  </span>
                </TitleComponent>
              )}
              
              {subtitle && (
                <p className={`text-base sm:text-lg font-medium ${theme.text.secondary}`}>
                  {subtitle}
                </p>
              )}
              
              {description && (
                <p className={`text-sm sm:text-base ${theme.text.tertiary} leading-relaxed`}>
                  {description}
                </p>
              )}
            </div>
          </div>
        ) : (
          /* Compact centered layout */
          <div className="text-center space-y-3">
            {/* Logo and Title in same section for compactness */}
            <div className="flex flex-col items-center gap-3">
              {showLogo && (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/30 to-orange-500/20 rounded-full blur-lg scale-125"></div>
                  <img
                    src={logoSvg}
                    alt="Telugu NRI Radio Logo"
                    className={`${getLogoSizeClasses()} relative z-10 drop-shadow-xl hover:scale-105 transition-all duration-300`}
                  />
                </div>
              )}
              
              {title && (
                <TitleComponent className={getTitleClasses()}>
                  <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    {title}
                  </span>
                </TitleComponent>
              )}
            </div>
            
            {/* Subtitle and Description */}
            {(subtitle || description) && (
              <div className="max-w-2xl mx-auto space-y-2">
                {subtitle && (
                  <p className={`text-base sm:text-lg font-medium ${theme.text.secondary}`}>
                    {subtitle}
                  </p>
                )}
                
                {description && (
                  <p className={`text-sm sm:text-base ${theme.text.tertiary} leading-relaxed`}>
                    {description}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
        
        {/* Custom Content - more compact placement */}
        {children && (
          <div className="mt-4 space-y-3">
            {children}
          </div>
        )}
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-yellow-400/15 to-orange-500/15 rounded-full blur-sm"></div>
      <div className="absolute bottom-2 left-2 w-6 h-6 bg-gradient-to-tr from-orange-400/15 to-yellow-500/15 rounded-full blur-sm"></div>
    </div>
  );

  if (showBackground) {
    return (
      <div className="relative">
        <MusicWaveBackground 
          mode="banner" 
          intensity={backgroundIntensity}
        >
          {bannerContent}
        </MusicWaveBackground>
      </div>
    );
  }

  return bannerContent;
};

export default Banner;

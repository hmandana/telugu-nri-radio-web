import React, { useState } from 'react';
import { PlayIcon, PauseIcon, WarningIcon, VolumeHighIcon, VolumeLowIcon, VolumeMutedIcon } from '../icons/index.jsx';
import { useTheme } from '../contexts/ThemeContext';
import { usePlayer } from '../contexts/PlayerContext';

const PlayerControls = () => {
  const { theme } = useTheme();
  const {
    isLoading,
    hasError,
    isPlaying,
    volume,
    isMuted,
    handlePlay,
    handlePause,
    handleRetry,
    handleVolumeChange,
    toggleMute
  } = usePlayer();

  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return VolumeMutedIcon;
    if (volume < 0.5) return VolumeLowIcon;
    return VolumeHighIcon;
  };

  const VolumeIcon = getVolumeIcon();

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      {/* Status Indicator */}
      {isLoading && (
        <div className={`${theme.text.accent} flex items-center gap-1 sm:gap-2`}>
          <div className={`animate-spin h-4 w-4 border-2 ${theme.text.accent.replace('text-', 'border-')} border-t-transparent rounded-full`}></div>
          <span className="text-xs sm:text-sm font-medium hidden sm:inline">Connecting...</span>
        </div>
      )}
      
      {hasError && (
        <div className="flex items-center gap-1 sm:gap-2">
          <WarningIcon className="w-4 h-4 text-red-400" />
          <button
            onClick={handleRetry}
            className="text-red-400 hover:text-red-300 text-xs sm:text-sm font-medium underline transition-colors"
          >
            <span className="hidden sm:inline">Retry Connection</span>
            <span className="sm:hidden">Retry</span>
          </button>
        </div>
      )}
      
      {isPlaying && (
        <div className="flex items-center gap-1 sm:gap-2 text-green-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs sm:text-sm font-medium hidden sm:inline">Streaming</span>
        </div>
      )}
      
      {/* Play/Stop Button */}
      {!isPlaying && !isLoading && !hasError && (
        <button 
          onClick={handlePlay}
          className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-3 sm:px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 flex items-center gap-1 sm:gap-2 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <PlayIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Play</span>
        </button>
      )}
      
      {isPlaying && (
        <button 
          onClick={handlePause}
          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 sm:px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 flex items-center gap-1 sm:gap-2 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <PauseIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Stop</span>
        </button>
      )}
      
      {/* Volume Control - Hidden on Mobile */}
      <div 
        className="relative hidden md:flex items-center"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        <button
          onClick={toggleMute}
          className={`p-2 rounded-lg transition-all duration-200 ${theme.player.textMuted} hover:${theme.player.text} hover:bg-white/20`}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          <VolumeIcon className="w-4 h-4" />
        </button>
        
        {/* Vertical Volume Slider */}
        <div className={`absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 transition-all duration-200 ${showVolumeSlider ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className={`${theme.bg.card} backdrop-blur-lg rounded-lg p-3 border ${theme.border.light} shadow-xl flex flex-col items-center gap-3`}>
            <span className={`text-xs ${theme.text.tertiary}`}>
              {Math.round(volume * 100)}%
            </span>
            <div className="relative w-1 h-20 bg-gray-600 rounded-full">
              <div 
                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-orange-500 to-yellow-500 rounded-full transition-all duration-150"
                style={{ height: `${volume * 100}%` }}
              ></div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer vertical-slider"
                style={{ writingMode: 'bt-lr', WebkitAppearance: 'slider-vertical' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;

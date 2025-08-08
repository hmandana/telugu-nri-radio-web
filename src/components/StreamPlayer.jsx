import React, { useState, useRef, useEffect } from 'react';
import { PlayIcon, PauseIcon, WarningIcon, LinkIcon } from '../icons/index.jsx';
import { useTheme } from '../contexts/ThemeContext';

const StreamPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const audioRef = useRef(null);
  const { theme } = useTheme();

  // Telugu NRI Radio stream URL
  const streamUrl = 'https://cast5.asurahosting.com:2199/proxy/telugunr?mp=/stream';

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handlePlay = async () => {
    if (!audioRef.current) return;

    try {
      setIsLoading(true);
      setHasError(false);

      console.log('Attempting to play stream:', streamUrl);
      
      // Create a new audio element each time to ensure fresh connection
      audioRef.current.src = streamUrl + '?t=' + Date.now(); // Add timestamp to prevent caching
      audioRef.current.load();

      await audioRef.current.play();
      
      setIsPlaying(true);
      setIsLoading(false);
      console.log('Stream playing successfully');
    } catch (error) {
      console.error('Failed to play stream:', error);
      setHasError(true);
      setIsLoading(false);
      setIsPlaying(false);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleError = (event) => {
    console.error('Audio error occurred:', event.target?.error);
    setIsLoading(false);
    setHasError(true);
    setIsPlaying(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className={`${theme.bg.card} rounded-xl p-4 border ${theme.border.light} shadow-lg`}>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        onError={handleError}
        onCanPlay={handleCanPlay}
        onLoadStart={handleLoadStart}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        preload="none"
        style={{ display: 'none' }}
      />

      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className={`w-12 h-12 ${theme.bg.accent} rounded-lg flex items-center justify-center`}>
            <img src="/logo.svg" alt="Telugu NRI Radio" className="w-8 h-8" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className={`${theme.text.primary} font-semibold text-sm mb-1`}>
            Telugu NRI Radio - LIVE
          </h3>
          <p className={`${theme.text.secondary} text-xs mb-2`}>
            Telugu Classical & Modern Hits
          </p>

          {/* Status */}
          <div className="mb-2">
            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-blue-400">
                <div className="animate-spin w-3 h-3 border border-blue-400 border-t-transparent rounded-full"></div>
                Connecting...
              </div>
            )}
            
            {hasError && (
              <div className="flex items-center gap-2 text-xs text-red-400">
                <WarningIcon className="w-3 h-3" />
                Connection failed
              </div>
            )}
            
            {isPlaying && !isLoading && (
              <div className="flex items-center gap-2 text-xs text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Live streaming
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={isPlaying ? handlePause : handlePlay}
              disabled={isLoading}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : isPlaying 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : `${theme.button.primary} hover:scale-105`
              }`}
            >
              {isLoading ? (
                <div className="animate-spin w-3 h-3 border border-white border-t-transparent rounded-full"></div>
              ) : isPlaying ? (
                <PauseIcon className="w-3 h-3" />
              ) : (
                <PlayIcon className="w-3 h-3" />
              )}
              {isLoading ? 'Loading' : isPlaying ? 'Stop' : 'Play'}
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-2 ml-2">
              <span className={`text-xs ${theme.text.tertiary}`}>Vol:</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-gray-300 rounded-lg cursor-pointer"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamPlayer;

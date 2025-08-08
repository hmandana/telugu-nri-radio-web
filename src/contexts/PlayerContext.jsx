import React, { createContext, useContext, useState, useRef } from 'react';

const PlayerContext = createContext();

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};

export const PlayerProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0); // Volume from 0.0 to 1.0
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(1.0);
  const audioRef = useRef(null);
  
  // Stream URL - Updated URLs and fallback options
  const streamUrls = [
    // Primary stream URLs
    'https://cast5.asurahosting.com:2199/proxy/telugunr?mp=/stream',
    'http://cast5.asurahosting.com:2199/proxy/telugunr?mp=/stream',
    'https://cast5.asurahosting.com:2199/stream/telugunr',
    'http://cast5.asurahosting.com:2199/stream/telugunr',
    // Alternative formats
    'https://cast5.asurahosting.com:2199/proxy/telugunr/;stream/1',
    'http://cast5.asurahosting.com:2199/proxy/telugunr/;stream/1',
    // Common Shoutcast/Icecast formats
    'https://cast5.asurahosting.com:2199/telugunr',
    'http://cast5.asurahosting.com:2199/telugunr',
    // Test with common radio streaming URLs
    'https://cast5.asurahosting.com:2199/telugunr.mp3',
    'http://cast5.asurahosting.com:2199/telugunr.mp3'
  ];
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);

  const tryNextUrl = () => {
    if (currentUrlIndex < streamUrls.length - 1) {
      setCurrentUrlIndex(currentUrlIndex + 1);
      return true;
    }
    return false;
  };

  const handlePlay = async () => {
    if (audioRef.current) {
      try {
        setIsLoading(true);
        setHasError(false);
        
        console.log(`Attempting to play stream URL ${currentUrlIndex + 1}/${streamUrls.length}:`, streamUrls[currentUrlIndex]);
        
        // Set the current stream URL
        audioRef.current.src = streamUrls[currentUrlIndex];
        audioRef.current.load();
        
        // Add a timeout for the play attempt
        const playPromise = audioRef.current.play();
        
        // Wait for play to start or timeout after 10 seconds
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Connection timeout')), 10000)
        );
        
        await Promise.race([playPromise, timeoutPromise]);
        
        setIsPlaying(true);
        setIsLoading(false);
        console.log('Stream started successfully');
      } catch (error) {
        console.error('Error playing audio:', error);
        
        // Try next URL if available
        if (tryNextUrl()) {
          console.log(`Trying next URL in 2 seconds...`);
          setTimeout(() => handlePlay(), 2000); // Try next URL after 2 seconds
          return;
        }
        
        setHasError(true);
        setIsLoading(false);
        console.log('All stream URLs failed');
      }
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleError = (event) => {
    console.error('Audio error:', event);
    setIsLoading(false);
    setIsPlaying(false);
    
    // Try next URL if available
    if (tryNextUrl()) {
      console.log(`Trying fallback URL ${currentUrlIndex + 1}:`, streamUrls[currentUrlIndex + 1]);
      setTimeout(() => handlePlay(), 2000);
    } else {
      setHasError(true);
    }
  };

  const handleRetry = () => {
    setCurrentUrlIndex(0); // Reset to first URL
    setHasError(false);
    handlePlay();
  };

  const handleVolumeChange = (newVolume) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolume(clampedVolume);
    setIsMuted(clampedVolume === 0);
    if (audioRef.current) {
      audioRef.current.volume = clampedVolume;
    }
    // Store non-zero volume as previous volume for unmute
    if (clampedVolume > 0) {
      setPreviousVolume(clampedVolume);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      // Unmute: restore previous volume
      const volumeToRestore = previousVolume > 0 ? previousVolume : 0.5;
      handleVolumeChange(volumeToRestore);
    } else {
      // Mute: set volume to 0
      setPreviousVolume(volume);
      handleVolumeChange(0);
    }
  };

  const value = {
    isLoading,
    hasError,
    isPlaying,
    volume,
    isMuted,
    audioRef,
    handlePlay,
    handlePause,
    handleError,
    handleRetry,
    handleVolumeChange,
    toggleMute,
    setIsLoading,
    setIsPlaying
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};

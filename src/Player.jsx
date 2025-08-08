import React, { useEffect } from 'react';
import { usePlayer } from './contexts/PlayerContext';

const Player = () => {
  const {
    audioRef,
    volume,
    handleError,
    setIsLoading,
    setIsPlaying
  } = usePlayer();

  // Initialize volume when audio element is ready
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume, audioRef]);

  return (
    /* Hidden Audio Element */
    <audio 
      ref={audioRef}
      preload="none"
      onError={handleError}
      onLoadStart={() => setIsLoading(true)}
      onCanPlay={() => {
        setIsLoading(false);
        // Ensure volume is set when audio is ready
        if (audioRef.current) {
          audioRef.current.volume = volume;
        }
      }}
      onWaiting={() => setIsLoading(true)}
      onPlaying={() => {
        setIsLoading(false);
        setIsPlaying(true);
      }}
      onPause={() => setIsPlaying(false)}
      onEnded={() => setIsPlaying(false)}
      onStalled={() => {
        console.log('Stream stalled, retrying...');
      }}
      onSuspend={() => console.log('Stream suspended')}
      onAbort={() => console.log('Stream aborted')}
      controls={false}
      style={{ display: 'none' }}
    />
  );
};

export default Player;

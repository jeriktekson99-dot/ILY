import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  showButton?: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ showButton = true }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);

  // Initialize Player
  useEffect(() => {
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player('youtube-audio', {
        height: '0',
        width: '0',
        videoId: 'I4LsT808rRI', // Die With A Smile
        playerVars: {
          'autoplay': 1,
          'controls': 0,
          'loop': 1,
          'playlist': 'I4LsT808rRI',
          'playsinline': 1,
          'disablekb': 1,
          'fs': 0
        },
        events: {
          'onReady': (event: any) => {
            event.target.setVolume(20);
            event.target.playVideo();
          },
          'onStateChange': (event: any) => {
            if (event.data === (window as any).YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === (window as any).YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            }
          }
        }
      });
    };
  }, []);

  // Global interaction listener to force play if autoplay failed
  useEffect(() => {
    const attemptPlay = () => {
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        // If not playing (state 1), try to play
        if (playerRef.current.getPlayerState() !== 1) {
          playerRef.current.playVideo();
        }
      }
    };

    if (!isPlaying) {
      const events = ['click', 'touchstart', 'keydown', 'scroll'];
      // Use capture: true to ensure we catch it early
      events.forEach(e => document.addEventListener(e, attemptPlay, { capture: true }));

      return () => {
        events.forEach(e => document.removeEventListener(e, attemptPlay, { capture: true }));
      };
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (playerRef.current && typeof playerRef.current.getPlayerState === 'function') {
      const state = playerRef.current.getPlayerState();
      if (state === 1) { // Playing
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  return (
    <>
      <div id="youtube-audio" className="absolute top-0 left-0 w-0 h-0 opacity-0 pointer-events-none" />
      
      {showButton && (
        <button
          onClick={togglePlay}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/30 backdrop-blur-md transition-all duration-300 group shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]"
          aria-label="Toggle Music"
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-gold-200" />
          ) : (
            <VolumeX className="w-5 h-5 text-gold-200/50" />
          )}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500"></span>
            </span>
          )}
        </button>
      )}
    </>
  );
};

export default MusicPlayer;
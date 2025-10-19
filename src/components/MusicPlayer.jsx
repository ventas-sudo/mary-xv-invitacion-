import { Music, Play, Pause, Volume2 } from 'lucide-react';
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const MusicPlayer = forwardRef((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log('Error al reproducir:', error);
      }
    }
  }));

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        loop
        preload="auto"
      >
        <source src="https://sensible-spoonbill-485.convex.cloud/api/storage/ca0beeb1-c95d-46ab-8961-7ebf9c65c78c" type="audio/mpeg" />
      </audio>

      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={togglePlay}
          className="bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all group relative"
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-6 h-6 animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
            </>
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>
        
        {isPlaying && (
          <div className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-xl p-4 whitespace-nowrap animate-fade-in">
            <div className="flex items-center gap-3">
              <Music className="w-5 h-5 text-purple-500" />
              <div>
                <p className="font-medium text-gray-800">Reproduciendo</p>
                <p className="text-sm text-gray-600">Música de fondo</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
});

MusicPlayer.displayName = 'MusicPlayer';

export default MusicPlayer;

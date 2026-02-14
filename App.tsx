import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import LoveLetter from './components/LoveLetter';
import Gallery from './components/Gallery';
import Reasons from './components/Reasons';
import Countdown from './components/Countdown';
import FinalSurprise from './components/FinalSurprise';
import MusicPlayer from './components/MusicPlayer';
import { APP_NAME } from './constants';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = APP_NAME;
    
    // Safety fallback: If animation fails or user tabs out, 
    // force loading to false after a maximum wait time (e.g. 5 seconds)
    // Preloader animation is ~4s total (2.5 delay + 1.5 fade)
    const safetyTimer = setTimeout(() => {
      setLoading(false);
    }, 5500);

    return () => clearTimeout(safetyTimer);
  }, []);

  return (
    <>
      <MusicPlayer showButton={!loading} />
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <main className="bg-wine-950 min-h-screen text-rose-50 selection:bg-rose-900 selection:text-white animate-fade-in">
          <Hero />
          <Timeline />
          <LoveLetter />
          <Gallery />
          <Reasons />
          <Countdown />
          <FinalSurprise />
          
          {/* Simple Footer */}
          <footer className="py-8 text-center text-rose-900/30 text-xs font-sans uppercase tracking-widest">
            Made with love for you
          </footer>
        </main>
      )}
    </>
  );
}

export default App;
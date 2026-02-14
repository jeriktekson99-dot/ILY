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
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <main className="bg-wine-950 min-h-screen text-rose-50 selection:bg-rose-900 selection:text-white">
          <Hero />
          <Timeline />
          <LoveLetter />
          <Gallery />
          <Reasons />
          <Countdown />
          <FinalSurprise />
          <MusicPlayer />
          
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
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import canvasConfetti from 'canvas-confetti';

const FinalSurprise: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    triggerConfetti();
  };

  const triggerConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Use rose colors
      const colors = ['#e11d48', '#fb7185', '#ffe4e6', '#d4af37'];

      canvasConfetti({
        ...defaults, 
        particleCount,
        colors,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      canvasConfetti({
        ...defaults, 
        particleCount, 
        colors,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  return (
    <section id="surprise" className="min-h-[80vh] flex flex-col items-center justify-center bg-wine-950 relative overflow-hidden pb-24">
       {/* Background Decoration */}
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/20 via-wine-950 to-wine-950 pointer-events-none"></div>

      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <motion.div
            key="button"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <button
              onClick={handleReveal}
              className="px-12 py-6 bg-gradient-to-r from-rose-900 to-wine-900 border border-gold-500/30 rounded-full shadow-[0_0_40px_rgba(225,29,72,0.3)] hover:shadow-[0_0_60px_rgba(225,29,72,0.5)] transition-all duration-500 group"
            >
              <span className="font-display text-xl text-rose-50 tracking-widest uppercase group-hover:text-gold-200 transition-colors">
                Open Your Surprise
              </span>
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center z-10 px-6"
          >
            <motion.h1 
              className="font-serif text-5xl md:text-7xl text-rose-100 mb-8 leading-tight text-glow"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              Will you be <br/>
              <span className="text-rose-500 font-handwriting text-7xl md:text-9xl">my Valentine?</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 2 }}
              className="mt-12 font-sans text-gold-200/60 uppercase tracking-[0.4em] text-sm"
            >
              Forever & Always
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FinalSurprise;
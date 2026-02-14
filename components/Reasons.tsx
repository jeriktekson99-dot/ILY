import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { REASONS } from '../constants';
import { Star } from 'lucide-react';

const Reasons: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REASONS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reasons" className="py-32 bg-black relative flex flex-col items-center justify-center overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-900/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 text-center w-full max-w-4xl px-6">
        <h3 className="font-display text-gold-400 tracking-[0.3em] uppercase text-sm mb-16">
          Why I Love You
        </h3>

        <div className="h-40 md:h-56 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="mb-6 flex justify-center">
                 <Star className="w-6 h-6 text-gold-500 fill-gold-500/20" />
              </div>
              <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-rose-50 leading-tight">
                "{REASONS[currentIndex].text}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {REASONS.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'w-8 bg-gold-400' : 'w-2 bg-wine-900'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
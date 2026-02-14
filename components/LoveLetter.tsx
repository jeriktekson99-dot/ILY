import React from 'react';
import { motion } from 'framer-motion';
import { LOVE_LETTER_CONTENT } from '../constants';

const LoveLetter: React.FC = () => {
  return (
    <section id="letter" className="py-24 relative flex items-center justify-center min-h-screen">
       {/* Background */}
       <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2787&auto=format&fit=crop")',
        }}
      ></div>
      <div className="absolute inset-0 bg-wine-950/80"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="glass-card p-8 md:p-16 rounded-sm shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Corners */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-gold-400/30"></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-gold-400/30"></div>

          <div className="text-center">
            <motion.h2 
              className="font-display text-gold-200 uppercase tracking-widest text-sm mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              My Vows to You
            </motion.h2>

            <motion.div
              className="font-handwriting text-2xl md:text-3xl lg:text-4xl leading-relaxed text-rose-50/90 space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
            >
              {LOVE_LETTER_CONTENT.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetter;
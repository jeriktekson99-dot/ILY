import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-wine-950 flex flex-col items-center justify-center text-gold-100"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ duration: 1.5, delay: 2.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            textShadow: ["0 0 10px rgba(212,175,55,0)", "0 0 30px rgba(212,175,55,0.5)", "0 0 10px rgba(212,175,55,0)"]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart className="w-16 h-16 text-rose-700 fill-rose-900/50 mb-6" />
        </motion.div>
        
        <h2 className="font-display text-2xl tracking-[0.3em] uppercase text-gold-200">
          Lumière d'Amour
        </h2>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mt-4"></div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
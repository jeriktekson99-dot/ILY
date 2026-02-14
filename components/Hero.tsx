import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const timeline = document.getElementById('timeline');
    timeline?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax-like static positioning */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2940&auto=format&fit=crop")',
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-wine-950/20 to-wine-950"></div>
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
      </div>

      {/* Floating Particles (Simulated with div) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold-200/20 blur-xl"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-gold-400 tracking-[0.2em] uppercase text-sm md:text-base mb-6"
        >
          My Dearest Valentine
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-rose-50 mb-8 leading-tight text-glow"
        >
          For the Love <br/> 
          <span className="italic font-handwriting text-6xl md:text-8xl text-rose-200">of My Life</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="font-sans text-rose-100/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          This is just a small reminder of how much you mean to me.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToNext}
          className="group relative px-8 py-4 bg-transparent border border-gold-400/50 rounded-sm overflow-hidden"
        >
          <div className="absolute inset-0 bg-gold-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          <span className="relative font-display text-gold-100 tracking-widest uppercase text-xs flex items-center gap-2">
            Enter My Heart
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </span>
        </motion.button>
      </div>

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-wine-950 to-transparent"></div>
    </section>
  );
};

export default Hero;
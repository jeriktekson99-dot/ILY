import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MEMORIES } from '../constants';
import { ImageOff } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-32 bg-wine-950 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-rose-50 mb-4">Frozen in Time</h2>
          <p className="font-sans text-gold-200/60 uppercase tracking-widest text-xs">Our Favorite Moments</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 px-8">
          {MEMORIES.map((memory, index) => (
            <GalleryItem key={memory.id} memory={memory} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryItem: React.FC<{ memory: typeof MEMORIES[0], index: number }> = ({ memory, index }) => {
  const [error, setError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, rotate: 0 }}
      whileInView={{ opacity: 1, rotate: memory.rotation }}
      whileHover={{ 
        scale: 1.1, 
        rotate: 0, 
        zIndex: 10,
        transition: { duration: 0.3 } 
      }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="bg-rose-50 p-4 pb-12 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform cursor-pointer relative group h-fit"
    >
      {/* Strictly enforced 3:4 Aspect Ratio Container */}
      <div className="relative w-full aspect-[3/4] mb-4 bg-gray-200 overflow-hidden flex items-center justify-center">
        {!error ? (
          <img 
            src={memory.url} 
            alt={memory.caption} 
            className="absolute inset-0 w-full h-full object-cover object-center filter sepia-[0.2] contrast-[0.9] group-hover:filter-none transition-all duration-500" 
            loading="lazy"
            onError={() => setError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-wine-950/50 p-4 text-center">
            <ImageOff className="w-8 h-8 mb-2 opacity-50" />
            <span className="text-[10px] font-sans uppercase tracking-widest">Image missing</span>
            <span className="text-[8px] font-mono mt-1 opacity-50 break-all">{memory.url}</span>
          </div>
        )}
      </div>
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="font-handwriting text-2xl text-wine-900/80">{memory.caption}</p>
      </div>
    </motion.div>
  );
};

export default Gallery;
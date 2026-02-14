import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_EVENTS } from '../constants';
import { Heart } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 md:py-32 relative bg-wine-950 overflow-hidden">
      {/* Subtle Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Heart className="w-8 h-8 text-gold-500 mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-5xl text-rose-50 mb-4">Our Story</h2>
          <div className="w-16 h-[1px] bg-gold-500/50 mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold-500/30 to-transparent"></div>

          {TIMELINE_EVENTS.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-center justify-between mb-16 md:mb-24 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content Side */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="font-display text-gold-400 text-sm md:text-base tracking-widest mb-2">
                  {event.year}
                </div>
                <h3 className="font-serif text-xl md:text-3xl text-rose-100 mb-3">{event.title}</h3>
                <p className="font-sans text-rose-100/70 text-sm md:text-base leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-wine-900 border border-gold-500/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  <div className="text-gold-200 transform scale-75">
                    {event.icon}
                  </div>
                </div>
              </div>

              {/* Empty Side for balance */}
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
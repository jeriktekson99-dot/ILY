import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Countdown: React.FC = () => {
  // Use a fixed date for demonstration (Next Valentine's)
  // Logic checks if today is past Feb 14th of current year, if so, target next year
  const getNextValentines = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const valentines = new Date(currentYear, 1, 14); // Month is 0-indexed (1 is Feb)
    
    if (now > valentines) {
      valentines.setFullYear(currentYear + 1);
    }
    return valentines;
  };

  const calculateTimeLeft = () => {
    const difference = +getNextValentines() - +new Date();
    
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-4 md:mx-8">
      <span className="font-serif text-4xl md:text-6xl text-rose-50 tabular-nums">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="font-sans text-xs md:text-sm text-gold-400/70 uppercase tracking-widest mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <section id="countdown" className="py-24 bg-gradient-to-b from-black to-wine-950 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <div className="flex items-center justify-center mb-12">
            <Heart className="w-12 h-12 text-rose-600 animate-pulse-slow fill-rose-900/30" />
        </div>
        
        <h2 className="font-display text-2xl md:text-3xl text-rose-100/90 mb-12">
          Until our next Valentine's
        </h2>

        <div className="flex flex-wrap justify-center mb-12">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        <p className="font-handwriting text-3xl md:text-4xl text-gold-200 opacity-80">
          “Every second with you is my favorite.”
        </p>
      </motion.div>
    </section>
  );
};

export default Countdown;
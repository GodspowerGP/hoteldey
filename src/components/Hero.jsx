import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop" 
          alt="Lagos Luxury Hotel"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-hoteldey-navy/50 bg-gradient-to-b from-hoteldey-navy/40 to-hoteldey-navy/80" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.span 
          variants={itemVariants}
          className="inline-block text-hoteldey-gold font-bold tracking-[0.2em] uppercase mb-4"
        >
          Welcome to Hoteldey
        </motion.span>
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
        >
          Experience Nigeria's <br /> 
          <span className="text-hoteldey-gold italic font-serif">Finest</span> Hospitality
        </motion.h1>
        
        {/* Glass Search Widget */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 glass-card rounded-3xl p-2 md:p-3 overflow-hidden shadow-2xl border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
              <MapPin className="text-hoteldey-gold shrink-0" size={20} />
              <div className="text-left">
                <label className="text-white/40 text-[10px] uppercase font-bold tracking-wider">Location</label>
                <input 
                  type="text" 
                  placeholder="Where to?" 
                  className="bg-transparent border-none outline-none text-white placeholder:text-white/60 w-full font-medium"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
              <Calendar className="text-hoteldey-gold shrink-0" size={20} />
              <div className="text-left">
                <label className="text-white/40 text-[10px] uppercase font-bold tracking-wider">Check-in</label>
                <input 
                  type="text" 
                  placeholder="Add dates" 
                  className="bg-transparent border-none outline-none text-white placeholder:text-white/60 w-full font-medium"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
              <Users className="text-hoteldey-gold shrink-0" size={20} />
              <div className="text-left">
                <label className="text-white/40 text-[10px] uppercase font-bold tracking-wider">Guests</label>
                <input 
                  type="text" 
                  placeholder="2 Guests" 
                  className="bg-transparent border-none outline-none text-white placeholder:text-white/60 w-full font-medium"
                />
              </div>
            </div>

            <button 
              whileTap={{ scale: 0.95 }}
              className="bg-hoteldey-gold hover:bg-hoteldey-gold/90 text-hoteldey-navy font-bold rounded-2xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 py-4 md:py-0"
            >
              <Search size={20} />
              <span>Search</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-1.5 bg-hoteldey-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

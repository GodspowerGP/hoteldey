import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Calendar, Search } from 'lucide-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Hero = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

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

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop" 
          alt="Lagos Luxury Hotel"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-hoteldey-navy/40 bg-gradient-to-b from-hoteldey-navy/30 to-hoteldey-navy/90" />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight tracking-tight drop-shadow-lg"
        >
          Come Enjoy <br /> 
          <span className="text-hoteldey-gold italic font-serif">Nija Finest</span> Hospitality
        </motion.h1>
        
        {/* Glass Search Widget */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 glass-card rounded-[2rem] p-4 md:p-6 shadow-2xl border-white/20 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Destination Input */}
            <div className="md:col-span-5 flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-white/10 text-hoteldey-navy h-full">
              <MapPin className="text-hoteldey-gold shrink-0" size={24} />
              <div className="text-left w-full">
                <input 
                  type="text" 
                  placeholder="where you dey go" 
                  className="bg-transparent border-none outline-none text-hoteldey-navy placeholder:text-gray-400 w-full font-bold text-lg"
                />
              </div>
            </div>
            
            {/* Date Picker */}
            <div className="md:col-span-5 flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-white/10 text-hoteldey-navy h-full relative z-50">
              <Calendar className="text-hoteldey-gold shrink-0" size={24} />
              <div className="text-left w-full">
                <DatePicker
                  selected={startDate}
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  placeholderText="check in - check out"
                  className="bg-transparent border-none outline-none text-hoteldey-navy placeholder:text-gray-400 w-full font-bold text-lg focus:ring-0"
                  calendarClassName="!font-sans !rounded-xl !border-0 !shadow-xl"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-2 h-full">
                <button 
                  whileTap={{ scale: 0.95 }}
                  className="w-full h-full bg-hoteldey-gold hover:bg-hoteldey-gold/90 text-hoteldey-navy font-extrabold text-lg rounded-2xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 py-4 md:py-0 shadow-lg shadow-hoteldey-gold/20"
                >
                  <span>Oya search</span>
                </button>
            </div>
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

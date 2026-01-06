import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      initial="hidden" 
      animate="visible" 
      variants={staggerContainer}
      className={`fixed w-full z-50 transition-all duration-500 bg-hoteldey-navy/95 backdrop-blur-md ${
        scrolled || isOpen
          ? 'shadow-lg py-3' 
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <motion.a 
          variants={fadeInUp}
          href="#" 
          className="text-2xl font-bold text-white tracking-tight relative z-50"
        >
          HotelDey
        </motion.a>

        {/* Desktop Nav */}
        <motion.div variants={fadeInUp} className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white/80 hover:text-hoteldey-gold transition-colors font-medium">Blog</a>
          
          <div className="relative">
            <button 
              onClick={() => setIsAccountOpen(!isAccountOpen)}
              className="flex items-center gap-2 text-white/80 hover:text-hoteldey-gold transition-colors font-medium"
            >
              Account <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {isAccountOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl overflow-hidden py-2 z-20"
                >
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">My Bookings</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Out</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button 
          variants={fadeInUp}
          className="md:hidden text-white relative z-50 p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-hoteldey-navy w-full h-screen z-40 flex flex-col items-center justify-center md:hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" 
              style={{
                backgroundImage: 'radial-gradient(circle at center, #f59e0b 2px, transparent 2px)',
                backgroundSize: '40px 40px'
              }} 
            />

            <div className="flex flex-col items-center gap-8 text-center">
              <motion.a 
                href="#" 
                variants={itemVariants}
                className="text-4xl font-bold text-white hover:text-hoteldey-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </motion.a>
              <motion.a 
                href="#" 
                variants={itemVariants}
                className="text-4xl font-bold text-white hover:text-hoteldey-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </motion.a>
              <motion.div variants={itemVariants} className="w-16 h-1 bg-white/10 rounded-full my-4" />
              
              <div className="flex flex-col gap-4">
                <motion.a 
                  href="#" 
                  variants={itemVariants}
                  className="text-xl font-medium text-white/60 hover:text-white transition-colors"
                >
                  My Bookings
                </motion.a>
                <motion.a 
                  href="#" 
                  variants={itemVariants}
                  className="text-xl font-medium text-white/60 hover:text-white transition-colors"
                >
                  Profile
                </motion.a>
                <motion.a 
                  href="#" 
                  variants={itemVariants}
                  className="text-xl font-medium text-hoteldey-gold hover:text-white transition-colors"
                >
                  Sign Out
                </motion.a>
              </div>
            </div>

            {/* Bottom Decoration */}
             <motion.div 
               variants={itemVariants}
               className="absolute bottom-10 text-white/20 text-sm font-medium tracking-widest uppercase"
             >
               Experience Nija Luxury
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zig-Zag Border (Only show when menu is closed) */}
      {!isOpen && (
        <div className="absolute bottom-0 left-0 w-full h-[20px] z-10 translate-y-[99%]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%230f172a' d='M0,0 H100 V10 C 90,0 60,0 50,10 C 40,20 10,20 0,10 Z' /%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat-x',
              backgroundSize: '40px 100%' 
            }}
          />
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;

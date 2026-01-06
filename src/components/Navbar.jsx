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

  return (
    <motion.nav 
      initial="hidden" 
      animate="visible" 
      variants={staggerContainer}
      className={`fixed w-full z-50 transition-all duration-500 bg-hoteldey-navy/95 backdrop-blur-md ${
        scrolled 
          ? 'shadow-lg py-3' 
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          variants={fadeInUp}
          href="#" 
          className="text-2xl font-bold text-white tracking-tight"
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
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </motion.button>
      </div>

      {/* Zig-Zag Border */}
      <div className="absolute bottom-0 left-0 w-full h-[20px] z-10 translate-y-[99%]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%230f172a' d='M0,0 H100 V10 C 90,0 60,0 50,10 C 40,20 10,20 0,10 Z' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: '40px 100%' // Adjusted for "compressed" but clean look
          }}
        />
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-hoteldey-navy/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="fixed right-0 top-0 h-full w-64 bg-hoteldey-navy border-l border-white/10 z-50 p-8 flex flex-col gap-8 md:hidden shadow-2xl"
            >
              <div className="flex justify-end">
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                <a href="#" className="text-xl font-medium text-white/80 hover:text-hoteldey-gold transition-colors">Blog</a>
                
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs font-bold text-white/40 uppercase mb-4">Account</p>
                  <a href="#" className="block py-2 text-white/80 hover:text-hoteldey-gold">My Bookings</a>
                  <a href="#" className="block py-2 text-white/80 hover:text-hoteldey-gold">Profile</a>
                  <a href="#" className="block py-2 text-white/80 hover:text-hoteldey-gold">Sign Out</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

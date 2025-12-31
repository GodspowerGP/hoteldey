import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass-card rounded-2xl px-6 py-3 border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-hoteldey-gold rounded-lg flex items-center justify-center font-bold text-hoteldey-navy">
            H
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Hoteldey</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="nav-link">Destinations</a>
          <a href="#" className="nav-link">Hotels</a>
          <a href="#" className="nav-link">Experiences</a>
          <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition-all">
            <User size={18} />
            <span className="font-medium">Sign In</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
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
                <a href="#" className="text-xl font-medium text-white/80 hover:text-hoteldey-gold transition-colors">Destinations</a>
                <a href="#" className="text-xl font-medium text-white/80 hover:text-hoteldey-gold transition-colors">Hotels</a>
                <a href="#" className="text-xl font-medium text-white/80 hover:text-hoteldey-gold transition-colors">Experiences</a>
              </div>
              <div className="mt-auto">
                <button className="w-full flex items-center justify-center gap-2 bg-hoteldey-gold text-hoteldey-navy font-bold py-4 rounded-xl">
                  <User size={18} />
                  <span>Sign In</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

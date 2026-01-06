import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { staggerContainer, fadeInUp, scaleUp } from '../utils/animations';

const Newsletter = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-hoteldey-navy text-4xl md:text-5xl font-bold mb-6">Dey wit us</motion.h2>
        <motion.p variants={fadeInUp} className="text-gray-500 mb-8 text-lg">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</motion.p>
        
        <motion.div variants={scaleUp} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-6 py-4 rounded-xl bg-gray-100 border-2 border-transparent focus:bg-white focus:border-hoteldey-gold outline-none transition-all"
          />
          <button className="bg-hoteldey-gold text-hoteldey-navy font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-hoteldey-gold/90 transition-colors">
            <span>Subscribe</span>
            <Send size={18} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Newsletter;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const destinations = [
  { name: 'Lagos', state: 'Lagos State', image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
  { name: 'Abuja', state: 'FCT', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { name: 'Calabar', state: 'Cross River', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-2' },
  { name: 'Port Harcourt', state: 'Rivers', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
];

const BentoDestinations = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-hoteldey-navy text-4xl font-bold mb-4">Discover Nigeria</h2>
        <p className="text-hoteldey-navy/60 max-w-2xl">From the bustling energy of Lagos to the serene landscapes of Calabar, explore the heartbeat of the nation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
        {destinations.map((dest, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 0.98 }}
            className={`relative rounded-[2rem] overflow-hidden group cursor-pointer ${dest.colSpan} ${dest.rowSpan}`}
          >
            <img 
              src={dest.image} 
              alt={dest.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hoteldey-navy/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
              <div>
                <p className="text-hoteldey-gold font-bold uppercase tracking-widest text-xs mb-1">{dest.state}</p>
                <h3 className="text-white text-3xl font-bold">{dest.name}</h3>
              </div>
              <motion.div 
                whileHover={{ rotate: 45 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20"
              >
                <ArrowUpRight size={24} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BentoDestinations;

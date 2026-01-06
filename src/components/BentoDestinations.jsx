import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  { 
    name: 'Abuja', 
    motto: 'Center of Unity', 
    count: '230 hotels',
    image: 'https://images.unsplash.com/photo-1598379060906-12e3da344262?auto=format&fit=crop&w=800&q=80'
  },
  { 
    name: 'Lagos', 
    motto: 'Center of Excellence', 
    count: '9882 hotels',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80'
  },
  { 
    name: 'Calabar', 
    motto: 'People\'s Paradise', 
    count: '150 hotels',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'
  },
  { 
    name: 'Port Harcourt', 
    motto: 'Treasure Base', 
    count: '340 hotels',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
  },
  { 
    name: 'Uyo', 
    motto: 'Land of Promise', 
    count: '180 hotels',
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=800&q=80'
  },
  { 
    name: 'Owerri', 
    motto: 'Eastern Heartland', 
    count: '130 hotels',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80'
  }
];

const BentoDestinations = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12 flex flex-col items-center justify-center text-center">
        <h2 className="text-hoteldey-navy text-4xl font-bold mb-4">Popular Destination</h2>
        <p className="text-gray-500 max-w-2xl">Explore the most visited cities in Nigeria.</p>
      </div>

      <div className="relative group">
        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 p-3 rounded-full shadow-lg text-hoteldey-navy hover:bg-hoteldey-gold hover:text-white transition-colors hidden md:block opacity-0 group-hover:opacity-100 duration-300"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 p-3 rounded-full shadow-lg text-hoteldey-navy hover:bg-hoteldey-gold hover:text-white transition-colors hidden md:block opacity-0 group-hover:opacity-100 duration-300"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slider Container */}
        <motion.div 
          ref={scrollRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar scroll-smooth"
        >
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="w-[280px] md:w-[350px] h-[400px] md:h-[500px] relative rounded-[2rem] overflow-hidden group cursor-pointer snap-center shadow-lg flex-shrink-0"
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div>
                  <h3 className="text-white text-3xl font-bold mb-1">{dest.name}</h3>
                  <p className="text-hoteldey-gold font-bold uppercase tracking-wider text-xs mb-3">{dest.motto}</p>
                  
                  <div className="flex items-center justify-between border-t border-white/20 pt-4">
                    <span className="text-white/80 text-sm font-medium">{dest.count}</span>
                    <motion.div className="w-8 h-8 rounded-full bg-white text-hoteldey-navy flex items-center justify-center">
                      <ArrowUpRight size={16} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BentoDestinations;

import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Wifi, Coffee, Users } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const hotels = [
  {
    name: "The George Residence",
    price: "125,000",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Transcorp Hilton",
    price: "145,000",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop"
  },
  {
    name: "Wheatbaker Hotel",
    price: "110,000",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Radisson Blu",
    price: "95,000",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop"
  }
];

const FeaturedHotels = () => {
  return (
    <section className="py-24 px-6 bg-hoteldey-slate">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-hoteldey-navy text-4xl font-bold mb-2">Trending Hotels</h2>
          <p className="text-gray-500">Most sought-after stays this week.</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {hotels.map((hotel, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star fill="#f59e0b" className="text-hoteldey-gold" size={12} />
                  <span className="text-xs font-bold text-hoteldey-navy">{hotel.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-hoteldey-navy text-xl font-bold mb-2 line-clamp-1">{hotel.name}</h3>
                
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-2xl font-bold text-hoteldey-gold">₦{hotel.price}</span>
                  <span className="text-gray-400 text-sm mb-1">/night</span>
                </div>

                <button className="w-full py-3 rounded-xl border-2 border-hoteldey-navy/5 text-hoteldey-navy font-bold hover:bg-hoteldey-navy hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedHotels;

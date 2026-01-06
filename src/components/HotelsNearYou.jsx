import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';

const nearbyHotels = [
  {
    name: "Eko Hotel & Suites",
    distance: "1.2 km away",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "InterContinental",
    distance: "2.5 km away",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Oriental Hotel",
    distance: "3.0 km away",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Four Points",
    distance: "3.8 km away",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
  }
];

const HotelsNearYou = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <div>
          <h2 className="text-hoteldey-navy text-4xl font-bold mb-2">Hotels Near You</h2>
          <p className="text-gray-500 mb-4">Based on your current location in Victoria Island.</p>
        </div>
        <button className="text-hoteldey-gold font-bold hover:underline">View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {nearbyHotels.map((hotel, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
          >
            <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
              <img 
                src={hotel.image} 
                alt={hotel.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold">
                <Star size={10} className="fill-hoteldey-gold text-hoteldey-gold" />
                {hotel.rating}
              </div>
            </div>
            
            <h3 className="font-bold text-lg text-hoteldey-navy mb-1">{hotel.name}</h3>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <MapPin size={14} className="text-hoteldey-gold" />
              <span>{hotel.distance}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HotelsNearYou;

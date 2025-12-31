import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Heart, MapPin, Wifi, Users, Coffee, ChevronLeft, ChevronRight } from 'lucide-react';

const hotels = [
  {
    name: "The George Residence",
    location: "Ikoyi, Lagos",
    price: "125,000",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    amenities: [<Wifi size={14}/>, <Coffee size={14}/>, <Users size={14}/>]
  },
  {
    name: "Transcorp Hilton",
    location: "Maitama, Abuja",
    price: "145,000",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",
    amenities: [<Wifi size={14}/>, <Coffee size={14}/>, <Users size={14}/>]
  },
  {
    name: "Wheatbaker Hotel",
    location: "Ikoyi, Lagos",
    price: "110,000",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    amenities: [<Wifi size={14}/>, <Coffee size={14}/>, <Users size={14}/>]
  },
  {
    name: "Radisson Blu",
    location: "VI, Lagos",
    price: "95,000",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop",
    amenities: [<Wifi size={14}/>, <Coffee size={14}/>, <Users size={14}/>]
  }
];

const FeaturedHotels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (hotels.length - 2));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + (hotels.length - 2)) % (hotels.length - 2));
  };

  return (
    <section className="py-24 px-6 bg-hoteldey-navy overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">Featured Stays</h2>
            <p className="text-white/40">Exclusive boutique hotels curated for the discerning traveler.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-hoteldey-gold hover:text-hoteldey-navy hover:border-hoteldey-gold transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-hoteldey-gold hover:text-hoteldey-navy hover:border-hoteldey-gold transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <motion.div 
          className="flex gap-8 transition-all duration-700 ease-in-out"
          animate={{ x: `-${currentIndex * (33.33 + 2)}%` }} // Adjusted for gap
          style={{ width: `${(hotels.length / 3) * 100}%` }}
        >
          {hotels.map((hotel, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(245, 158, 11, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-[calc(33.33%-20px)] flex-shrink-0 bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 group cursor-pointer transition-all duration-500"
            >
              <div className="relative h-72">
                <img 
                  src={hotel.image} 
                  alt={hotel.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button className="absolute top-6 right-6 w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-hoteldey-gold hover:text-hoteldey-navy transition-colors">
                  <Heart size={20} />
                </button>
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-white border border-white/20 flex items-center gap-2">
                  <Star fill="#f59e0b" className="text-hoteldey-gold" size={16} />
                  <span className="font-bold">{hotel.rating}</span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-hoteldey-gold text-xs font-bold uppercase tracking-widest mb-2">
                  <MapPin size={14} />
                  <span>{hotel.location}</span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-6">{hotel.name}</h3>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div>
                    <span className="text-white/40 text-sm block">Starting from</span>
                    <span className="text-white text-xl font-bold">₦{hotel.price}</span>
                    <span className="text-white/40 text-sm"> /night</span>
                  </div>
                  <div className="flex gap-2">
                    {hotel.amenities.map((item, i) => (
                      <div key={i} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/60">
                        {item}
                      </div>
                    ))}
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

export default FeaturedHotels;

import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Trees, Map, Camera } from 'lucide-react';

const experiences = [
  {
    title: "Lagos Atlantic Yacht Cruise",
    desc: "A private evening cruise along the Eko Atlantic skyline with gourmet catering.",
    icon: <Ship size={24} />,
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop",
    category: "Waterside"
  },
  {
    title: "Obudu Mountain Retreat",
    desc: "Experience the clouds at 1,576 meters above sea level in the heart of Cross River.",
    icon: <Trees size={24} />,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
    category: "Nature"
  },
  {
    title: "Zuma Rock Heli-Tour",
    desc: "A breathtaking aerial view of Nigeria's iconic monolith and Abuja's skyline.",
    icon: <Camera size={24} />,
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop",
    category: "Adventure"
  }
];

const EliteExperiences = () => {
  return (
    <section className="py-24 px-6 bg-hoteldey-slate">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-hoteldey-navy text-4xl md:text-5xl font-bold mb-6"
          >
            Elite Experiences
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-hoteldey-navy/60 max-w-2xl mx-auto"
          >
            Curated journeys that go beyond the stay. Discover the soul of Nigeria through our exclusive partnerships.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ rotateY: 5 }}
              transition={{ delay: idx * 0.1, type: 'spring' }}
              className="relative h-[500px] rounded-[3rem] overflow-hidden group shadow-2xl"
            >
              <img 
                src={exp.image} 
                alt={exp.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hoteldey-navy via-hoteldey-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-14 h-14 bg-hoteldey-gold/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-hoteldey-gold mb-6 border border-hoteldey-gold/30">
                  {exp.icon}
                </div>
                <span className="text-hoteldey-gold font-bold uppercase tracking-widest text-xs mb-2">
                  {exp.category}
                </span>
                <h3 className="text-white text-3xl font-bold mb-4">{exp.title}</h3>
                <p className="text-white/70 leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {exp.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-hoteldey-gold font-bold cursor-pointer group/link">
                  <span>Explore More</span>
                  <Map size={18} className="translate-x-0 group-hover/link:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EliteExperiences;

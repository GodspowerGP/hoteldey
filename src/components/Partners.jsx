import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "Air Peace", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Air_Peace_logo.png/1200px-Air_Peace_logo.png" },
  { name: "Marriott", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lufthansa_Logo_2018.svg/1200px-Lufthansa_Logo_2018.svg.png" },
  { name: "Lufthansa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lufthansa_Logo_2018.svg/1200px-Lufthansa_Logo_2018.svg.png" },
  { name: "Zenith Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lufthansa_Logo_2018.svg/1200px-Lufthansa_Logo_2018.svg.png"}
];

const Partners = () => {
  return (
    <section className="py-12 px-6 bg-hoteldey-slate border-y border-hoteldey-navy/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
        <span className="text-hoteldey-navy/40 font-bold uppercase tracking-widest text-xs shrink-0 text-center md:text-left">
          Our Trusted <br /> Experience Partners
        </span>
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-12 md:gap-20">
          {partners.map((partner, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="h-8 md:h-10 w-auto"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-full w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

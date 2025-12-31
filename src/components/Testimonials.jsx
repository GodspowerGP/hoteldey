import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Tunde Ednut",
    role: "CEO, TechHarbor",
    text: "Hoteldey has redefined how I travel across Nigeria. The boutique selection in Lagos is unparalleled. The glassmorphic UI is just the icing on the cake!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Chinwe Egbo",
    role: "International Architect",
    text: "As a designer, I appreciate the attention to detail. Every hotel suggested by Hoteldey fits my aesthetic and privacy needs perfectly.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Dr. Alim Bashir",
    role: "Philanthropist",
    text: "Seamless booking, elite concierge service, and the most stunning properties in Abuja. Hoteldey is my only travel partner now.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-hoteldey-navy relative overflow-hidden">
      {/* Decorative Blur and Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-hoteldey-gold/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-hoteldey-gold/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">What Our Guest Say</h2>
            <p className="text-white/40 max-w-xl">Join the circle of elite travelers who have discovered Nigeria's finest hospitality secrets.</p>
          </div>
          <div className="flex gap-1 text-hoteldey-gold">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="#f59e0b" size={20} />)}
            <span className="ml-2 text-white font-bold">5.0 / 5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] border-white/5 bg-white/[0.02]"
            >
              <Quote className="text-hoteldey-gold/20 mb-6" size={40} />
              <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-hoteldey-gold/20"
                />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-hoteldey-gold/60 text-sm font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, Gem, Gift } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const benefits = [
  {
    title: "Priority Access",
    desc: "Early booking for seasonal suites and exclusive hotel launches.",
    icon: <Crown className="text-hoteldey-gold" size={24} />,
    color: "bg-blue-500/10"
  },
  {
    title: "Curated Upgrades",
    desc: "Complimentary room upgrades and spa credits at partner hotels.",
    icon: <Sparkles className="text-hoteldey-gold" size={24} />,
    color: "bg-purple-500/10"
  },
  {
    title: "Concierge Elite",
    desc: "24/7 dedicated travel assistant for all your local and luxury needs.",
    icon: <Gem className="text-hoteldey-gold" size={24} />,
    color: "bg-emerald-500/10"
  },
  {
    title: "Bespoke Gifts",
    desc: "Handcrafted Nigerian welcome gifts upon arrival at major stays.",
    icon: <Gift className="text-hoteldey-gold" size={24} />,
    color: "bg-pink-500/10"
  }
];

const MemberBenefits = () => {
  return (
    <section className="py-24 px-6 bg-hoteldey-slate overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-hoteldey-gold font-bold tracking-[0.2em] uppercase text-sm block mb-4"
            >
              The Circle of Luxury
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-hoteldey-navy text-4xl md:text-5xl font-bold mb-8 leading-tight"
            >
              Unlock a World of <br />
              <span className="text-hoteldey-gold font-serif italic">Exclusive Privileges</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-hoteldey-navy/60 text-lg mb-10 leading-relaxed"
            >
              Being a Hoteldey member isn't just about bookings; it's about being part of an elite community that values the finer things in life.
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-hoteldey-navy text-white font-bold py-4 px-10 rounded-2xl shadow-xl hover:shadow-hoteldey-navy/20 transition-all"
            >
              Become a Member
            </motion.button>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-hoteldey-navy/5 hover:shadow-xl hover:border-hoteldey-gold/20 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>
                <h4 className="text-hoteldey-navy font-bold text-xl mb-3">{benefit.title}</h4>
                <p className="text-hoteldey-navy/50 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MemberBenefits;

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, HeartHandshake } from 'lucide-react';
import { staggerContainer, fadeInUp, slideInLeft } from '../utils/animations';

const features = [
  {
    icon: <Shield size={32} />,
    title: "Secure Booking",
    description: "We guarantee the safety of your personal data and payment information with top-tier encryption standards."
  },
  {
    icon: <Clock size={32} />,
    title: "24/7 Support",
    description: "Our dedicated support team is always available to assist you with any inquiries or issues, anytime, anywhere."
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Best Price Guarantee",
    description: "Find a lower price elsewhere? We'll match it. We ensure you get the best value for your stay."
  }
];

const WhyChoose = () => {
  return (
    <section className="py-24 px-6 bg-hoteldey-navy text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideInLeft}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose HotelDey?</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Experience the pinnacle of Nigerian hospitality booking. We curate only the finest establishments to ensure your stay is nothing short of exceptional. From instant confirmations to exclusive local deals, HotelDey is your trusted partner in travel.
          </p>
          <motion.div variants={staggerContainer} className="space-y-4">
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-hoteldey-gold" />
              <span className="font-medium text-white/80">Curated Selection of Premium Hotels</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-hoteldey-gold" />
              <span className="font-medium text-white/80">Local Expertise & Support</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-hoteldey-gold" />
              <span className="font-medium text-white/80">Seamless Booking Experience</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <div className="text-hoteldey-gold mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hoteldey-navy pt-24 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-hoteldey-gold rounded-lg flex items-center justify-center font-bold text-hoteldey-navy">
              H
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">Hoteldey</span>
          </div>
          <p className="text-white/60 leading-relaxed mb-8">
            Curating the finest hospitality experiences across the heart of Nigeria. Luxury, defined.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-hoteldey-gold hover:text-hoteldey-navy transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-hoteldey-gold hover:text-hoteldey-navy transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-hoteldey-gold hover:text-hoteldey-navy transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8">Company</h4>
          <ul className="flex flex-col gap-4 text-white/60">
            <li><a href="#" className="hover:text-hoteldey-gold transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-hoteldey-gold transition-colors">Press</a></li>
            <li><a href="#" className="hover:text-hoteldey-gold transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-hoteldey-gold transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8">Resources</h4>
          <ul className="flex flex-col gap-4 text-white/60">
            <li><a href="#" className="hover:text-hoteldey-gold transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-hoteldey-gold transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-hoteldey-gold transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-hoteldey-gold transition-colors">Luxury Guide</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8">Newsletter</h4>
          <p className="text-white/60 mb-6">Subscribe for exclusive travel insights and early bird luxury offers.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white outline-none focus:border-hoteldey-gold transition-colors"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-hoteldey-gold text-hoteldey-navy px-4 rounded-lg font-bold">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/40 text-sm">© 2025 Hoteldey. All rights reserved.</p>
        <div className="flex items-center gap-2 text-white/40 text-sm">
          <span>Built for the culture.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

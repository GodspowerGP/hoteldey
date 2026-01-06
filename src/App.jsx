import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoDestinations from './components/BentoDestinations';
import FeaturedHotels from './components/FeaturedHotels';
import HotelsNearYou from './components/HotelsNearYou';
import WhyChoose from './components/WhyChoose';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-hoteldey-slate selection:bg-hoteldey-gold selection:text-hoteldey-navy font-sans">
      <Navbar />
      <main>
        <Hero />
        <BentoDestinations />
        <FeaturedHotels />
        <HotelsNearYou />
        <WhyChoose />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;

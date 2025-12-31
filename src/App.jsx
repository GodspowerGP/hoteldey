import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import BentoDestinations from './components/BentoDestinations';
import EliteExperiences from './components/EliteExperiences';
import MemberBenefits from './components/MemberBenefits';
import Testimonials from './components/Testimonials';
import FeaturedHotels from './components/FeaturedHotels';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-hoteldey-slate selection:bg-hoteldey-gold selection:text-hoteldey-navy">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <BentoDestinations />
        <EliteExperiences />
        <MemberBenefits />
        <Testimonials />
        <FeaturedHotels />
      </main>
      <Footer />
    </div>
  );
}

export default App;

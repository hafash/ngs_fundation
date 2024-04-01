import React from 'react';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Partners from './Partners'; // Import Partners component
import Navbar from '../Navbar';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Partners /> {/* Render Partners component within Home */}
      <Footer />
    </>
  );
}

export default Home;

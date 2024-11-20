import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

function Home() {
  return (
    <div style={{
      background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,88,1) 35%, rgba(12,19,20,1) 100%)",
    }}>
      <HeroSection />
      <Cards />
    </div>
  );
}

export default Home;
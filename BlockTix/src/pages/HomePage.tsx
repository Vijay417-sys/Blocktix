import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import UpcomingEvents from '../components/home/UpcomingEvents';
import HowItWorks from '../components/home/HowItWorks';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  // Update page title on component mount
  useEffect(() => {
    document.title = 'BlockTix - Decentralized Event Ticketing on Polygon';
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <UpcomingEvents />
      <HowItWorks />
      <CTASection />
    </>
  );
};

export default HomePage;
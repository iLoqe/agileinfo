"use client";

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/sections/LoadingScreen';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CollaboratorsSection from '@/components/sections/CollaboratorsSection';
import ChatWidget from '@/components/sections/ChatWidget';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Matches the duration in LoadingScreen component

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-dark to-black min-h-screen text-white">
      {isLoading && <LoadingScreen />}
      
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Navigation />
        <main>
          <HeroSection />
          <ServicesSection />
          <CertificationsSection />
          <TestimonialsSection />
          <CollaboratorsSection />
        </main>
        <ChatWidget />
        <Footer />
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ChatSimulation from '@/components/ChatSimulation';
import ReputationManagement from '@/components/ReputationManagement';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <ChatSimulation />
      <ReputationManagement />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

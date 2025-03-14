
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
    // Make all content visible immediately
    document.querySelectorAll('.opacity-0').forEach(element => {
      element.classList.add('opacity-100');
    });
    
    // Ensure animation classes are applied properly
    document.querySelectorAll('.animate-fade-in').forEach(element => {
      element.classList.add('opacity-100');
    });
    
    // Implement proper smooth scroll for anchor links
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
      <div className="content-wrapper">
        <Hero />
        <Services />
        <ChatSimulation />
        <ReputationManagement />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

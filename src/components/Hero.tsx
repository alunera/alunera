
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroRef.current?.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen flex flex-col justify-center opacity-0">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4 py-1 px-3 rounded-full bg-primary/5 border border-primary/10">
                <span className="text-sm font-medium">AI-Powered Conversation Agents</span>
              </div>
              <h1 className="section-title !text-5xl sm:!text-6xl lg:!text-7xl mb-6">
                Intelligent AI Agents for <span className="relative inline-block">
                  <span className="absolute inset-x-0 bottom-2 h-3 bg-agent-whatsapp/20"></span>
                  <span className="relative">WhatsApp</span>
                </span>, <span className="relative inline-block">
                  <span className="absolute inset-x-0 bottom-2 h-3 bg-agent-instagram/20"></span>
                  <span className="relative">Instagram</span>
                </span> & <span className="relative inline-block">
                  <span className="absolute inset-x-0 bottom-2 h-3 bg-agent-web/20"></span>
                  <span className="relative">Web</span>
                </span>
              </h1>
              <p className="section-subtitle !text-xl">
                Transform your customer engagement with AI agents that provide instant, 
                personalised responses across all your digital channels.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base rounded-md px-6" asChild>
                <a href="https://calendly.com/grow-alunera/30min">
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base rounded-md px-6">
                Explore Services
              </Button>
            </div>
          </div>
          <div className="relative lg:h-[600px]">
            <div className="absolute -bottom-10 -right-5 w-56 h-56 bg-agent-whatsapp/10 rounded-full filter blur-3xl animate-pulse-subtle"></div>
            <div className="absolute -top-5 -left-10 w-72 h-72 bg-agent-instagram/10 rounded-full filter blur-3xl animate-pulse-subtle"></div>
            <div className="glass-panel p-6 md:p-8 max-w-lg mx-auto h-auto animate-float">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-agent-whatsapp flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                      <path d="M9 15.5a3.5 3.5 0 0 0 6 0"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold">WhatsApp AI Agent</h3>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="message-bubble message-bubble-user">
                    <p>Hi, I'd like to know your opening hours.</p>
                  </div>
                  <div className="message-bubble message-bubble-agent">
                    <p>Hello! Our store is open Monday to Friday from 9 AM to 7 PM, and on Saturdays from 10 AM to 5 PM. We're closed on Sundays. Is there anything specific you'd like to know about our services?</p>
                  </div>
                  <div className="message-bubble message-bubble-user">
                    <p>Yes, do you have the new iPhone 15 Pro in stock?</p>
                  </div>
                  <div className="message-bubble message-bubble-agent">
                    <p>Yes, we currently have the iPhone 15 Pro in stock in all colours. The 128GB and 256GB variants are available for immediate pickup, while the 512GB and 1TB versions can be reserved and will be available within 2 business days. Would you like me to reserve one for you?</p>
                  </div>
                  <div className="message-bubble message-bubble-user">
                    <p>That would be great! Can I reserve the 256GB in Black Titanium?</p>
                  </div>
                  <div className="message-bubble message-bubble-agent">
                    <p>Perfect! I've reserved an iPhone 15 Pro 256GB in Black Titanium for you. To complete the reservation, I just need your name and when you'd like to pick it up. The phone will be held for 48 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

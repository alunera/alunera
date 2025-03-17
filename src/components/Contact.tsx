
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your message has been sent! We'll be in touch soon.");
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    }, 1500);
  };

  useEffect(() => {
    // Fix animation by ensuring visibility
    if (sectionRef.current) {
      // Short timeout to ensure DOM is ready
      setTimeout(() => {
        sectionRef.current?.classList.add('opacity-100');
      }, 100);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      id="contact" 
      className="py-24 transition-opacity duration-500 ease-in-out" 
      ref={sectionRef} 
      style={{ opacity: 0 }}
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Ready to Transform Your Customer Experience?</h2>
          <p className="section-subtitle">
            Get in touch with our team to discover how our AI agents can elevate your customer 
            interactions and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-panel p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-primary">grow@alunera.co.za</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p className="text-primary">+27 605091362</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Schedule a Demo</h3>
              <p className="text-muted-foreground mb-6">
                Experience the power of our AI agents firsthand with a personalized demo 
                tailored to your business needs.
              </p>
              <Button variant="outline" size="lg" className="w-full">
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

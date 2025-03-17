
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [{
    name: 'Services',
    href: '#services'
  }, {
    name: 'How It Works',
    href: '#how-it-works'
  }, {
    name: 'Reputation',
    href: '#reputation'
  }, {
    name: 'Contact',
    href: '#contact'
  }];

  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src="/lovable-uploads/c0c4fd0b-c8ca-4988-9e7a-b8f3c7d579c6.png" alt="Alunera Logo" className="h-16 md:h-24" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.name}
              </a>)}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="https://calendly.com/grow-alunera/30min">
                Book a Demo
              </a>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-background border-b">
          <div className="px-4 py-5 space-y-4">
            {navLinks.map(link => <a key={link.name} href={link.href} className="block text-base font-medium text-foreground hover:text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>)}
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="https://calendly.com/grow-alunera/30min">
                Book a Demo
              </a>
            </Button>
          </div>
        </div>}
    </nav>;
};

export default Navbar;

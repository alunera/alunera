
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  useEffect(() => {
    // Add Mailchimp validation script
    const script = document.createElement('script');
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.async = true;
    document.body.appendChild(script);

    // Add Mailchimp initialization script
    const initScript = document.createElement('script');
    initScript.type = "text/javascript";
    initScript.text = `
      (function($) {
        window.fnames = new Array();
        window.ftypes = new Array();
        fnames[1]='FNAME';ftypes[1]='text';
        fnames[0]='EMAIL';ftypes[0]='email';
        fnames[6]='COMPANY';ftypes[6]='text';
        fnames[2]='LNAME';ftypes[2]='text';
        fnames[3]='ADDRESS';ftypes[3]='address';
        fnames[4]='PHONE';ftypes[4]='phone';
        fnames[5]='BIRTHDAY';ftypes[5]='birthday';
      }(jQuery));
      var $mcj = jQuery.noConflict(true);
    `;
    document.body.appendChild(initScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(initScript);
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
            {/* Mailchimp Embedded Form */}
            <link 
              href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" 
              rel="stylesheet" 
              type="text/css" 
            />
            <style jsx>{`
              #mc_embed_signup {
                background: transparent; 
                clear: left; 
                font: inherit;
                width: 100%;
                max-width: 100%;
              }
              #mc_embed_signup .indicates-required {
                margin-bottom: 15px;
              }
              #mc_embed_signup .mc-field-group {
                margin-bottom: 15px;
              }
              #mc_embed_signup input {
                border: 1px solid var(--border);
                border-radius: 0.375rem;
                padding: 0.5rem 0.75rem;
                width: 100%;
                font: inherit;
              }
              #mc_embed_signup input:focus {
                outline: none;
                ring: 1px var(--primary);
              }
              #mc_embed_signup label {
                display: block;
                margin-bottom: 5px;
                font-size: 0.875rem;
                font-weight: 500;
              }
              #mc_embed_signup .button {
                background-color: hsl(var(--primary));
                color: hsl(var(--primary-foreground));
                border: none;
                padding: 0.5rem 1rem;
                font-weight: 500;
                border-radius: 0.375rem;
                cursor: pointer;
                height: 2.75rem;
                transition: background-color 0.2s ease;
              }
              #mc_embed_signup .button:hover {
                background-color: hsl(var(--primary) / 0.9);
              }
            `}</style>
            <div id="mc_embed_signup">
              <form 
                action="https://gmail.us19.list-manage.com/subscribe/post?u=f6bb7e316e32564f56f2383a3&amp;id=b962b9e7a3&amp;f_id=00c9c7e4f0" 
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className="validate" 
                target="_blank"
              >
                <div id="mc_embed_signup_scroll">
                  <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                  <div className="indicates-required">
                    <span className="asterisk">*</span> indicates required
                  </div>
                  
                  <div className="mc-field-group">
                    <label htmlFor="mce-FNAME">Your Name </label>
                    <input type="text" name="FNAME" className="text" id="mce-FNAME" value="" />
                  </div>
                  
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">
                      Email Address <span className="asterisk">*</span>
                    </label>
                    <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" value="" required />
                  </div>
                  
                  <div className="mc-field-group">
                    <label htmlFor="mce-COMPANY">Company </label>
                    <input type="text" name="COMPANY" className="text" id="mce-COMPANY" value="" />
                  </div>
                  
                  <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                  </div>
                  
                  {/* Hidden field for bot prevention */}
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                    <input type="text" name="b_f6bb7e316e32564f56f2383a3_b962b9e7a3" tabIndex={-1} value="" />
                  </div>
                  
                  <div className="optionalParent">
                    <div className="clear foot">
                      <input 
                        type="submit" 
                        name="subscribe" 
                        id="mc-embedded-subscribe" 
                        className="button" 
                        value="Subscribe" 
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
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
                Experience the power of our AI agents firsthand with a personalised demo 
                tailored to your business needs.
              </p>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href="https://calendly.com/aluneramarketing/onboarding">
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

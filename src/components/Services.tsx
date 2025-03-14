import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Share2, Bot } from 'lucide-react';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  color,
  delay
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  color: string;
  delay: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      setTimeout(() => {
        cardRef.current?.classList.add('opacity-100');
      }, 100);
    }
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={`opacity-0 transition-opacity duration-500 ease-in-out ${delay} rounded-xl p-8 border border-border bg-white shadow-sm hover:shadow-md transition-all duration-300`}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color} mb-6`}>
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-text">{description}</p>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.classList.add('opacity-100');
      }, 100);
    }
  }, []);

  return (
    <div 
      id="services" 
      className="bg-secondary/30 py-24 transition-opacity duration-500 ease-in-out" 
      ref={sectionRef} 
      style={{ opacity: 0 }}
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">AI-Powered Solutions</h2>
          <p className="section-subtitle">
            Our intelligent agents transform customer interactions across platforms, 
            delivering personalized experiences that drive engagement and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Bot className="h-6 w-6 text-agent-whatsapp" />}
            title="WhatsApp AI Agents"
            description="Engage customers 24/7 on WhatsApp with intelligent agents that understand context, answer questions, and facilitate transactions."
            color="bg-agent-whatsapp/10"
            delay="delay-100"
          />
          <ServiceCard 
            icon={<Bot className="h-6 w-6 text-agent-instagram" />}
            title="Instagram AI Agents"
            description="Convert social media followers into customers with AI-powered DM responses, product recommendations, and seamless shopping experiences."
            color="bg-agent-instagram/10"
            delay="delay-200"
          />
          <ServiceCard 
            icon={<Bot className="h-6 w-6 text-agent-web" />}
            title="Website AI Agents"
            description="Implement conversational AI on your website to guide visitors, answer questions, and nurture leads through personalized interactions."
            color="bg-agent-web/10"
            delay="delay-300"
          />
          <ServiceCard 
            icon={<ShieldCheck className="h-6 w-6 text-primary" />}
            title="Reputation Management"
            description="Monitor, analyze, and improve your online reputation with our AI-powered tools that track sentiment and respond to reviews."
            color="bg-primary/10"
            delay="delay-400"
          />
          <ServiceCard 
            icon={<Share2 className="h-6 w-6 text-primary" />}
            title="Cross-Platform Integration"
            description="Deliver consistent customer experiences across all channels with our unified AI platform that synchronizes data and conversations."
            color="bg-primary/10"
            delay="delay-500"
          />
          <ServiceCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 14.76v-3.26a2.5 2.5 0 0 0-5 0v3.26a9.54 9.54 0 0 0-4.33 1.73A4.99 4.99 0 0 0 2.5 21h19a4.97 4.97 0 0 0-2.17-4.51A9.54 9.54 0 0 0 14 14.76Z"></path>
              <path d="M16.71 7.41a7.5 7.5 0 1 0-9.42 0"></path>
              <path d="M9.73 14.65 12 17l2.27-2.35"></path>
            </svg>}
            title="Customer Insights"
            description="Gain valuable insights from AI-analyzed conversations to understand customer needs, preferences, and pain points."
            color="bg-primary/10"
            delay="delay-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

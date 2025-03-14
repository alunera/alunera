import React, { useEffect, useRef } from 'react';
import { Check, Star, ThumbsUp, ShieldCheck } from 'lucide-react';

const FeatureBox = ({ 
  icon, 
  title, 
  description,
  delay
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: string;
}) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      setTimeout(() => {
        boxRef.current?.classList.add('opacity-100');
      }, 100);
    }
  }, []);

  return (
    <div ref={boxRef} className={`opacity-0 transition-opacity duration-500 ease-in-out ${delay} flex flex-col bg-white rounded-xl p-6 border border-border shadow-sm`}>
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const ReputationManagement = () => {
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
      id="reputation" 
      className="bg-secondary/30 py-24 transition-opacity duration-500 ease-in-out" 
      ref={sectionRef} 
      style={{ opacity: 0 }}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title">AI-Powered Reputation Management</h2>
            <p className="section-subtitle">
              Protect and enhance your brand's reputation with our intelligent monitoring 
              and response system.
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">24/7 Sentiment Monitoring</h4>
                  <p className="text-muted-foreground">
                    Our AI constantly scans social media, review sites, and news sources to track 
                    your brand sentiment in real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Automated Review Responses</h4>
                  <p className="text-muted-foreground">
                    Our AI crafts personalized responses to reviews across Google, Yelp, and other 
                    platforms to maintain your brand voice.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Crisis Alerts & Management</h4>
                  <p className="text-muted-foreground">
                    Receive immediate alerts on potential reputation threats with AI-suggested 
                    response strategies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Competitive Analysis</h4>
                  <p className="text-muted-foreground">
                    Track how your reputation compares to competitors with detailed analytics and 
                    actionable insights.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureBox 
              icon={<Star className="h-6 w-6 text-primary" />}
              title="Review Management"
              description="Monitor and respond to customer reviews across all platforms to build trust and loyalty."
              delay="delay-100"
            />
            <FeatureBox 
              icon={<ThumbsUp className="h-6 w-6 text-primary" />}
              title="Sentiment Analysis"
              description="Track brand sentiment across social media and news sources with AI-powered analytics."
              delay="delay-200"
            />
            <FeatureBox 
              icon={<ShieldCheck className="h-6 w-6 text-primary" />}
              title="Brand Protection"
              description="Identify and address potential reputation threats before they escalate to crises."
              delay="delay-300"
            />
            <FeatureBox 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path>
                <path d="M12 16H7"></path>
                <path d="M12 12H7"></path>
                <path d="M12 8H7"></path>
                <circle cx="18" cy="16" r="2"></circle>
                <path d="m22 22-3.5-3.5"></path>
              </svg>}
              title="Insight Reports"
              description="Gain actionable insights with detailed reports on your brand's reputation landscape."
              delay="delay-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReputationManagement;

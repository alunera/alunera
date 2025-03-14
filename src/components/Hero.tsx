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
                personalized responses across all your digital channels.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base rounded-md px-6">
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-base rounded-md px-6">
                Explore Services
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Trusted by forward-thinking companies worldwide
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-8">
                <div className="h-7 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                  <svg className="h-full" viewBox="0 0 124 34" fill="currentColor">
                    <path d="M16.526 12.013H0v9.98h16.526v11.977H28.5V0h-11.974v12.013zm81.522 0v-2.613c0-1.46-.148-2.891-.71-4.39-1.21-3.225-4.198-5.026-7.632-5.026-2.336 0-4.492.768-6.093 2.08-1.601 1.342-2.78 3.166-3.314 5.423-.208.945-.297 1.89-.297 2.836v17.684h11.974V12.013h6.072zm-45.392 9.98c4.79 0 7.185-2.318 7.185-6.955 0-4.636-2.395-6.954-7.185-6.954h-17.66v21.957h11.973V21.994h5.687zM124 11.04v-1.32c0-1.401-.117-2.7-.528-4.034C122.503 2.227 119.516 0 115.214 0h-10.665v11.04H124zM104.55 21.994V33.97h11.974V21.994H104.55zm0-10.954h16.526v-1.91h-16.526v1.91z" />
                  </svg>
                </div>
                <div className="h-6 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                  <svg className="h-full" viewBox="0 0 126 31" fill="currentColor">
                    <path d="M36.65 9.355h4.202v21.033h-4.202V9.355zM36.45 3.486c0-.633.219-1.173.657-1.62.452-.446.996-.67 1.631-.67.636 0 1.18.224 1.631.67.452.447.678.987.678 1.62 0 .619-.226 1.153-.678 1.6-.451.447-.995.67-1.63.67-.636 0-1.18-.223-1.632-.67-.438-.447-.657-.981-.657-1.6zm51.334 11.165c1.198-1.44 2.55-2.616 4.057-3.528 1.506-.911 3.19-1.367 5.052-1.367 2.41 0 4.326.66 5.747 1.98 1.42 1.307 2.13 3.2 2.13 5.68v13.972h-4.202V18.21c0-1.71-.39-2.991-1.172-3.843-.781-.866-1.884-1.3-3.308-1.3-1.198 0-2.288.307-3.268.92-.967.599-1.817 1.407-2.55 2.426a10.887 10.887 0 0 0-1.694 3.486V30.39h-4.201V18.21c0-1.71-.392-2.991-1.173-3.843-.781-.866-1.891-1.3-3.328-1.3-1.171 0-2.248.3-3.229.9-.967.585-1.81 1.387-2.529 2.405a11.935 11.935 0 0 0-1.693 3.506V30.39h-4.201V9.355h4.02v4.824c1.144-1.68 2.475-2.978 3.994-3.89 1.52-.925 3.197-1.387 5.032-1.387 2.018 0 3.687.467 5.008 1.4 1.335.92 2.303 2.271 2.905 4.057l.602 1.293zm30.299-3.857c-2.222 0-4.174.526-5.857 1.58-1.683 1.04-2.992 2.513-3.926 4.417-.935 1.89-1.402 4.056-1.402 6.5 0 2.401.467 4.541 1.402 6.418.934 1.877 2.236 3.343 3.906 4.397 1.683 1.04 3.635 1.56 5.857 1.56 1.825 0 3.43-.327 4.818-.982 1.402-.654 2.557-1.573 3.464-2.755l2.884 2.324c-1.21 1.71-2.756 3.018-4.64 3.924-1.87.893-4.044 1.34-6.526 1.34-2.935 0-5.54-.654-7.818-1.96-2.277-1.32-4.064-3.146-5.36-5.481-1.28-2.35-1.92-5.026-1.92-8.03 0-3.018.64-5.71 1.92-8.072 1.296-2.363 3.083-4.201 5.36-5.52 2.278-1.334 4.883-2.001 7.818-2.001 2.496 0 4.683.454 6.567 1.361 1.884.894 3.437 2.176 4.66 3.843l-2.883 2.365c-.907-1.196-2.07-2.129-3.485-2.796-1.416-.681-3.029-1.021-4.84-1.021zM24.286 26.88c1.924 2.053 4.659 3.174 7.827 3.174 3.1 0 5.854-1.134 7.815-3.21a5.57 5.57 0 0 0 1.076-1.683h4.41c-.711 1.872-1.833 3.497-3.302 4.836-2.856 2.604-6.474 4.002-10.463 4.002-2.698 0-5.17-.548-7.36-1.63a12.66 12.66 0 0 1-5.183-4.644H16.03a16.598 16.598 0 0 1-3.282 3.469c-1.881 1.44-3.896 2.401-6.006 2.87A21.18 21.18 0 0 1 1.765 34C1.17 33.958.58 33.898 0 33.821V0h4.202v20.743a8.118 8.118 0 0 0 1.234-1.87 8.92 8.92 0 0 0 .834-3.782v-.308h4.202v.308c0 2.271-.531 4.29-1.578 6.013a11.637 11.637 0 0 1-4.339 4.47c-.088.05-.178.097-.267.144.795.033 1.597.007 2.4-.085 1.67-.193 3.211-.696 4.586-1.503 2.097-1.227 3.848-2.995 5.194-5.25h4.118c.407-.695.697-1.458.864-2.272h4.41a9.817 9.817 0 0 1-1.574 3.973zm-8.91-20.487v-2.8c.63.014 1.249.107 1.844.29 1.384.427 2.585 1.347 3.553 2.737.963 1.382 1.456 2.924 1.477 4.584h-4.202a3.56 3.56 0 0 0-1.165-2.647c-.417-.387-.92-.647-1.507-.787v-1.378zm28.126-1.074h4.202v4.584h5.194v3.486h-5.194v10.816c0 .82.191 1.427.574 1.82.397.394.984.59 1.763.59.354 0 .643-.02.868-.061.225-.04.485-.108.78-.204v3.607c-.41.18-.847.313-1.31.395-.463.083-.929.124-1.4.124-1.775 0-3.137-.487-4.084-1.46-.934-.974-1.401-2.356-1.401-4.148V13.389h-3.845V9.903h3.853V5.319z" />
                  </svg>
                </div>
                <div className="h-6 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                  <svg className="h-full" viewBox="0 0 98 26" fill="currentColor">
                    <path d="M.785 25.229c.25.1.65.1.851.1 1.75 0 2.752-1.193 3.752-3.581L12.47 3.937H8.517L12.22.256h7.707L11.67 19.862l-.3.798c-.351.897-.652 1.294-1.202 1.294-.3 0-.651-.2-.952-.398l-1.2 3.183c.75.299 1.652.498 2.603.498 3.503 0 5.005-1.593 6.507-5.473L26.286.256h5.254L22.984 19.763c-2.402 5.473-5.354 7.166-10.21 7.166-1.8 0-3.302-.3-4.553-.9l-7.436-25.772h5.405L.785 25.229zm48.91-10.747h-8.358c.25 3.382 2.803 5.674 6.757 5.674 2.152 0 3.904-.698 5.605-1.793v3.98c-1.701 1.096-4.053 1.694-6.506 1.694-6.256 0-10.76-4.08-10.76-10.25 0-6.27 4.304-10.55 10.059-10.55 5.754 0 9.258 4.08 9.258 9.95 0 .5-.05.798-.05 1.295zm-8.408-3.083h4.253c-.15-2.685-1.451-4.378-3.903-4.378-2.402 0-3.953 1.793-4.353 4.378h4.003zm34.249-8.456c-1.401 0-2.702.797-3.603 2.291h-.2c-1.201-1.693-2.952-2.491-5.154-2.491-4.303 0-7.456 3.082-7.456 7.066 0 5.273 4.654 6.868 7.707 7.566 2.202.5 3.303 1.096 3.303 2.59 0 1.594-1.251 2.591-3.153 2.591-1.751 0-3.502-.997-3.502-3.087h-5.205c0 4.876 3.803 7.167 8.557 7.167 5.004 0 8.657-2.59 8.657-7.067 0-5.474-4.954-6.77-7.907-7.467-1.902-.498-3.102-1.095-3.102-2.49 0-1.395 1.1-2.292 2.802-2.292 1.801 0 2.952 1.096 2.952 2.79h5.054c.1-4.08-3.403-6.868-7.656-6.868-4.554 0-7.957 2.79-7.957 6.968 0 1.494.4 2.79 1.1 3.785h-.15c-1.05-1.295-2.702-2.192-4.753-2.192-4.704 0-7.907 3.78-7.907 8.458 0 4.677 3.203 8.457 7.907 8.457 2.402 0 4.353-1.096 5.655-2.89h.15v2.49h4.854V9.46c0-.797.55-1.295 1.401-1.295.6 0 1.05.2 1.451.399l1.401-3.88a7.55 7.55 0 0 0-2.702-.499c-1.551 0-2.902.7-3.753 1.993h-.15c-1.301-1.494-3.153-2.292-5.555-2.292-1.852 0-3.553.597-4.904 1.693h-.15V2.94h-4.854v19.265c0 1.295-.4 1.793-1.251 1.793-.4 0-.75-.1-1.051-.399l-1.2 3.184c.65.398 1.65.598 2.652.598 1.9 0 3.403-.797 4.053-2.291h.15c1.351 1.693 3.403 2.59 5.855 2.59 2.302 0 4.203-.898 5.555-2.39h.15c1.1 1.692 3.202 2.59 5.404 2.59 4.704 0 7.907-3.78 7.907-8.457v-5.275c1.2-.598 2.202-.897 3.353-.897 2.302 0 3.903 1.494 3.903 3.885v11.344h5.204V14.734c0-4.677-3.403-7.767-7.506-7.767zm-22.984 18.012c-2.103 0-3.503-1.594-3.503-3.786s1.4-3.785 3.503-3.785c2.102 0 3.502 1.593 3.502 3.785 0 2.192-1.4 3.786-3.502 3.786z" fillRule="nonzero"/>
                  </svg>
                </div>
              </div>
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
                    <p>Yes, we currently have the iPhone 15 Pro in stock in all colors. The 128GB and 256GB variants are available for immediate pickup, while the 512GB and 1TB versions can be reserved and will be available within 2 business days. Would you like me to reserve one for you?</p>
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

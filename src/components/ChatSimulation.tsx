import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Message = ({ 
  sender, 
  content, 
  time, 
  isUser 
}: { 
  sender: string; 
  content: string; 
  time: string;
  isUser: boolean;
}) => (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
    <div className={`max-w-[80%] ${isUser ? 'bg-agent-whatsapp/20 text-right' : 'bg-white'} p-3 rounded-lg shadow-sm`}>
      {!isUser && <p className="text-xs font-semibold mb-1">{sender}</p>}
      <p className="text-sm">{content}</p>
      <p className="text-xs text-muted-foreground mt-1">{time}</p>
    </div>
  </div>
);

const WhatsAppDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([
    { 
      sender: "AI Agent", 
      content: "Hello! 👋 How can I help you today?", 
      time: "10:02 AM",
      isUser: false 
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (newMessage: { sender: string; content: string; time: string; isUser: boolean }) => {
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateResponse = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "I'd be happy to help you with that! What specific information are you looking for?",
        "Thanks for your question. Our AI agents can be deployed within 48 hours of finalizing your requirements.",
        "Our pricing is based on the number of conversations and features you need. Would you like me to have someone from sales contact you with a custom quote?",
        "Yes, our AI agents can integrate with your existing CRM system. We support Salesforce, HubSpot, and many other platforms."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addMessage({
        sender: "AI Agent",
        content: randomResponse,
        time: "10:" + String(Math.floor(Math.random() * 59)).padStart(2, '0') + " AM",
        isUser: false
      });
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    addMessage({
      sender: "You",
      content: inputValue,
      time: timeString,
      isUser: true
    });
    
    setInputValue("");
    simulateResponse();
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="w-full h-[500px] bg-gray-50 rounded-xl border border-border overflow-hidden shadow-sm">
      <div className="bg-white border-b border-border p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-agent-whatsapp flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
              <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
              <path d="M9 15.5a3.5 3.5 0 0 0 6 0"></path>
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="font-medium">ArcaneAI Assistant</h3>
            <p className="text-xs text-muted-foreground">Online • Usually responds in minutes</p>
          </div>
        </div>
      </div>
      
      <div ref={containerRef} className="p-4 h-[380px] overflow-y-auto bg-gray-50">
        {messages.map((msg, index) => (
          <Message
            key={index}
            sender={msg.sender}
            content={msg.content}
            time={msg.time}
            isUser={msg.isUser}
          />
        ))}
        
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-white">
        <div className="flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-border rounded-l-md focus:outline-none focus:ring-1 focus:ring-agent-whatsapp"
          />
          <Button 
            type="submit" 
            className="rounded-l-none bg-agent-whatsapp hover:bg-agent-whatsapp/90"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

const InstagramDemo = () => {
  return (
    <div className="w-full h-[500px] bg-gray-50 rounded-xl border border-border overflow-hidden shadow-sm">
      <div className="bg-white border-b border-border p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-agent-instagram flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="font-medium">ArcaneAI for Instagram</h3>
            <p className="text-xs text-muted-foreground">Active now</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 h-[380px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-2">Instagram Demo</p>
          <p className="text-sm">Try the WhatsApp demo to see our AI in action!</p>
        </div>
      </div>
      
      <div className="p-4 border-t border-border bg-white">
        <div className="flex items-center">
          <input
            type="text"
            disabled
            placeholder="Message..."
            className="flex-1 p-2 border border-border rounded-l-md"
          />
          <Button 
            disabled
            className="rounded-l-none bg-agent-instagram hover:bg-agent-instagram/90"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

const WebsiteDemo = () => {
  return (
    <div className="w-full h-[500px] bg-gray-50 rounded-xl border border-border overflow-hidden shadow-sm">
      <div className="bg-white border-b border-border p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-agent-web flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="font-medium">ArcaneAI Website Chat</h3>
            <p className="text-xs text-muted-foreground">Online 24/7</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 h-[380px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-2">Website Chat Demo</p>
          <p className="text-sm">Try the WhatsApp demo to see our AI in action!</p>
        </div>
      </div>
      
      <div className="p-4 border-t border-border bg-white">
        <div className="flex items-center">
          <input
            type="text"
            disabled
            placeholder="Ask me anything..."
            className="flex-1 p-2 border border-border rounded-l-md"
          />
          <Button 
            disabled
            className="rounded-l-none bg-agent-web hover:bg-agent-web/90"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

const ChatSimulation = () => {
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
      id="how-it-works" 
      className="py-24 transition-opacity duration-500 ease-in-out" 
      ref={sectionRef} 
      style={{ opacity: 0 }}
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Experience Our AI Agents</h2>
          <p className="section-subtitle">
            Try our interactive demo to see how our AI agents deliver natural, 
            helpful responses across different platforms.
          </p>
        </div>

        <Tabs defaultValue="whatsapp" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="whatsapp" className="data-[state=active]:bg-agent-whatsapp/10">WhatsApp</TabsTrigger>
            <TabsTrigger value="instagram" className="data-[state=active]:bg-agent-instagram/10">Instagram</TabsTrigger>
            <TabsTrigger value="website" className="data-[state=active]:bg-agent-web/10">Website</TabsTrigger>
          </TabsList>
          <TabsContent value="whatsapp">
            <WhatsAppDemo />
          </TabsContent>
          <TabsContent value="instagram">
            <InstagramDemo />
          </TabsContent>
          <TabsContent value="website">
            <WebsiteDemo />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ChatSimulation;

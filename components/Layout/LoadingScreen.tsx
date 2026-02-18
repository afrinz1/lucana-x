
import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 150);

    // Fade out sequence
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for fade-out animation
    }, 2200);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Brand Identity Block with PNG Demo Logo */}
        <div className="flex flex-col items-center gap-8 mb-12 animate-in slide-in-from-bottom-8 duration-1000 ease-out">
          <div className="relative">
            {/* Pulsing ring behind the logo */}
            <div className="absolute inset-0 bg-accent/20 rounded-full scale-150 animate-pulse blur-2xl"></div>
            <img 
              src="https://res.cloudinary.com/dz3sbdyps/image/upload/v1770272191/logo-1_yqye8v.png" 
              alt="Lucana International Logo" 
              className="h-24 w-auto object-contain relative z-10 drop-shadow-2xl"
            />
          </div>
          
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-[0.4em] text-charcoal uppercase leading-none">
              Lucana Tackles
            </h1>
          </div>
        </div>
        
        {/* Subtle Progress Bar */}
        <div className="w-64 h-[1px] bg-divider relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-accent transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Subtext */}
        <div className="mt-8 overflow-hidden">
          <p className="text-[9px] font-bold tracking-[0.5em] uppercase text-muted animate-in fade-in slide-in-from-top-4 duration-1000 delay-500">
            Precision Engineering • Since 1998
          </p>
        </div>
      </div>
      
      {/* Decorative corner accents */}
      <div className="absolute top-12 left-12 w-16 h-16 border-t border-l border-divider/40"></div>
      <div className="absolute bottom-12 right-12 w-16 h-16 border-b border-r border-divider/40"></div>
    </div>
  );
};

export default LoadingScreen;

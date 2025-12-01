import { useEffect, useState } from "react";
import logo from "@/assets/logo-lins-neves.png";

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onLoadingComplete, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-primary via-primary to-accent flex flex-col items-center justify-center transition-opacity duration-800 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className={`mb-12 transition-all duration-1000 ${
        isExiting ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
      }`}>
        <img 
          src={logo} 
          alt="Lins Neves" 
          className="w-64 md:w-80 h-auto animate-fade-in"
          style={{ animationDelay: '200ms' }}
        />
      </div>

      {/* Stylized Loading Spinner */}
      <div className="relative w-20 h-20">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
        
        {/* Animated arc */}
        <div 
          className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"
          style={{ animationDuration: '1.2s' }}
        ></div>
        
        {/* Inner pulsing dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-3 h-3 bg-white rounded-full animate-pulse"
            style={{ animationDuration: '1.5s' }}
          ></div>
        </div>
      </div>

      {/* Loading text */}
      <p 
        className="mt-8 text-white text-sm tracking-widest uppercase animate-fade-in"
        style={{ animationDelay: '400ms' }}
      >
        Carregando
      </p>
    </div>
  );
};

export default LoadingScreen;

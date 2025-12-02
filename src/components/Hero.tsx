import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo-lins-neves.png";
import bgVideo from "@/assets/bg-video.mp4";

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 300, 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Logo animation values
  const logoScale = 1 - (scrollProgress * 0.5);
  const logoOpacity = 1 - scrollProgress;
  const logoTranslateY = scrollProgress * -100;
  const logoTranslateX = scrollProgress * -50;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div 
          className="animate-fade-in pt-20 transition-none"
          style={{
            transform: `scale(${logoScale}) translateY(${logoTranslateY}px) translateX(${logoTranslateX}px)`,
            opacity: logoOpacity,
            transformOrigin: 'left center'
          }}
        >
          <img 
            src={logo} 
            alt="Lins Neves Advocacia" 
            className="w-72 md:w-[400px] lg:w-[500px] h-auto"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('credentials')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
        aria-label="Scroll para próxima seção"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;

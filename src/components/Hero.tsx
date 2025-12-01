import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo-lins-neves.png";
import bgVideo from "@/assets/bg-video.mp4";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
        <div className="animate-fade-in pt-20">
          <img 
            src={logo} 
            alt="Lins Neves Advocacia" 
            className="w-48 md:w-72 h-auto"
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

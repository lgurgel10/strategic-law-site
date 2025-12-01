import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-lins-neves.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="animate-fade-in">
          <img 
            src={logo} 
            alt="Lins Neves Advocacia" 
            className="w-48 md:w-64 h-auto"
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

import { Button } from "@/components/ui/button";
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
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <img 
            src={logo} 
            alt="Lins Neves Advocacia" 
            className="mx-auto mb-8 w-64 md:w-96 h-auto"
          />
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            Expertise Jurídica e Inteligência Estratégica para Impulsionar o Crescimento
          </p>

          <Button 
            variant="secondary"
            size="lg"
            onClick={() => scrollToSection('about')}
            className="text-lg px-8 py-6 shadow-glow hover-scale"
          >
            Conheça Nossa Abordagem
          </Button>
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

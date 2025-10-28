import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Modern business environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            LINS NEVES
            <span className="block text-accent mt-2">ADVOCACIA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            Expertise Jurídica e Inteligência Estratégica para Impulsionar seu Crescimento
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

        {/* Badge - Hub de Negócios */}
        <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 animate-float hidden md:block">
          <p className="text-white font-semibold text-lg">Hub de Negócios</p>
          <p className="text-white/80 text-sm mt-1">Direito Empresarial Moderno e Integrado</p>
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

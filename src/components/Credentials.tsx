import { Users, Award, Calendar, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import bgTexture from "@/assets/bg-texture.jpg";

const stats = [
  {
    icon: Users,
    value: 10,
    prefix: "+",
    label: "Profissionais Especializados"
  },
  {
    icon: Award,
    value: 15,
    prefix: "+",
    label: "Êxitos Processuais Relevantes"
  },
  {
    icon: Calendar,
    value: 8,
    prefix: "+",
    label: "Anos de Atuação"
  },
  {
    icon: Building2,
    value: null,
    text: "Conexão",
    label: "Direta com Bancos de Fomento (BNDES, FINEP)"
  }
];

const StatCard = ({ stat, index, isVisible }: any) => {
  const Icon = stat.icon;
  const count = useCountUp(stat.value || 0, 1200, isVisible);
  
  return (
    <div 
      className={`flex flex-col items-center justify-center text-center p-8 transition-all duration-700 h-[280px] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-glow">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <p className="text-3xl font-bold text-primary mb-2">
        {stat.value ? `${stat.prefix}${count}` : stat.text}
      </p>
      <p className="text-foreground text-sm leading-tight">{stat.label}</p>
    </div>
  );
};

const Credentials = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      id="credentials" 
      className="py-20 relative overflow-hidden" 
      ref={ref}
      style={{ 
        backgroundImage: `url(${bgTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-primary transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Nossos Números e Credenciais
        </h2>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {stats.map((stat, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <StatCard stat={stat} index={index} isVisible={isVisible} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent text-accent hover:text-primary hover:bg-transparent border-none h-10 w-10 -left-4 md:-left-12" />
          <CarouselNext className="bg-transparent text-accent hover:text-primary hover:bg-transparent border-none h-10 w-10 -right-4 md:-right-12" />
        </Carousel>

        {/* Mobile navigation dots */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {stats.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-primary/30" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;

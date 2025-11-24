import { Users, Award, Calendar, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

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
      className={`relative group transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`}
      style={{ transitionDelay: `${200 + index * 150}ms` }}
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
      
      {/* Main circle */}
      <div className="relative bg-card rounded-full aspect-square flex flex-col items-center justify-center p-8 shadow-2xl border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-110">
        {/* Icon circle */}
        <div className="absolute -top-6 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow transform group-hover:rotate-12 transition-transform duration-500">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Number/Text */}
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-transparent mb-3 mt-4">
          {stat.value ? `${stat.prefix}${count}` : stat.text}
        </div>
        
        {/* Label */}
        <p className="text-muted-foreground text-sm md:text-base text-center font-medium leading-tight px-2">
          {stat.label}
        </p>
        
        {/* Decorative dots */}
        <div className="absolute bottom-4 flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-secondary/40 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

const Credentials = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="credentials" className="py-32 bg-gradient-to-b from-background via-muted to-background relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 text-primary transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Nossos Números e Credenciais
        </h2>
        <p className={`text-center text-muted-foreground mb-20 max-w-2xl mx-auto text-lg transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Excelência comprovada em resultados e reconhecimento
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;

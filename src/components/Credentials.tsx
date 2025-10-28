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
      className={`flex flex-col items-center text-center p-8 bg-card rounded-xl shadow-elegant hover-scale transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-glow">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <p className="text-3xl font-bold text-primary mb-2">
        {stat.value ? `${stat.prefix}${count}` : stat.text}
      </p>
      <p className="text-muted-foreground">{stat.label}</p>
    </div>
  );
};

const Credentials = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="credentials" className="py-20 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-primary transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Nossos Números e Credenciais
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;

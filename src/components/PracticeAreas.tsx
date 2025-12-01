import { Building, FileText, Shield, Briefcase, TrendingUp, Landmark, Globe, BookOpen, Scale } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const practiceAreas = [
  { icon: FileText, name: "Estruturação de Contratos de Grande Porte", description: "Contratos complexos e estratégicos para seu negócio" },
  { icon: Shield, name: "Gestão de Riscos e Compliance", description: "Proteção empresarial e conformidade regulatória" },
  { icon: Building, name: "Societário e Tributário", description: "Estruturação societária e planejamento tributário" },
  { icon: TrendingUp, name: "Fusões e Aquisições", description: "Assessoria completa em M&A e reorganizações" },
  { icon: Briefcase, name: "Reestruturação Empresarial", description: "Soluções para recuperação e crescimento" },
  { icon: Landmark, name: "Estruturação de Concessões e PPPs", description: "Parcerias público-privadas e concessões" },
  { icon: BookOpen, name: "Assessoria em Licitações e Contratos", description: "Suporte jurídico em processos licitatórios" },
  { icon: Globe, name: "Negócios com Órgãos de Fomento", description: "Viabilização de projetos com financiamento público" },
  { icon: Scale, name: "Consultoria Regulatória", description: "Orientação estratégica em regulamentações" }
];

const PracticeAreas = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="practice-areas" className="py-20 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-2 text-primary transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Áreas de Atuação
        </h2>
        <p className={`text-center text-foreground/60 mb-16 text-xl transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Especialidades
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center transition-all duration-700 hover:scale-110 cursor-pointer group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-all duration-300 group-hover:shadow-glow">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-foreground font-medium leading-tight group-hover:text-primary transition-colors duration-300">
                  {area.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;

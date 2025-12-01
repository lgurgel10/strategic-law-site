import { Building, FileText, Shield, Briefcase, TrendingUp, Landmark, Globe, BookOpen, Scale } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
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
        <p className={`text-center text-muted-foreground mb-16 text-xl transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Especialidades
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={index} 
                className={`group shadow-elegant bg-card border-0 transition-all duration-700 hover:shadow-glow hover:-translate-y-2 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-3 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <CardTitle className="text-lg text-primary group-hover:text-secondary transition-colors duration-300">
                    {area.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;

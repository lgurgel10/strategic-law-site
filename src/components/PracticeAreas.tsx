import { Building, FileText, Shield, Briefcase, TrendingUp, Landmark, Globe, BookOpen, Scale } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import bgTexture from "@/assets/bg-texture.jpg";

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
    <section 
      id="practice-areas" 
      className="py-20 relative" 
      ref={ref}
      style={{ 
        backgroundImage: `url(${bgTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold mb-2 text-primary transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Áreas de Atuação
        </h2>
        <h3 className={`text-2xl font-semibold mb-12 text-foreground/80 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Especialidades
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={index} 
                className={`group border-0 bg-transparent transition-all duration-700 hover:-translate-y-2 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors duration-300">
                    {area.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;

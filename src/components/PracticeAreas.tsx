import { Building, FileText, Shield, Briefcase, TrendingUp, Users, Landmark, Globe, BookOpen, Scale } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 text-primary transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Eixos de Atuação e Soluções Estratégicas
        </h2>
        <p className={`text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Nossa estrutura integrada oferece soluções completas para o crescimento sustentável do seu negócio
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

        {/* Destaque Direito Trabalhista */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Card className="bg-gradient-to-br from-primary to-secondary text-white border-0 shadow-glow">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Users className="w-8 h-8" />
                Destaque em Direito Trabalhista
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-white/90">
                Liderança da <strong>Head Dra. Ana Carolina Araújo</strong> em nossa área de Direito do Trabalho Empresarial, 
                oferecendo soluções estratégicas para gestão de pessoas e conformidade trabalhista.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;

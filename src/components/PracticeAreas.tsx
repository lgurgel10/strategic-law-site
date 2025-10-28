import { Building, FileText, Shield, Briefcase, TrendingUp, Users, Landmark, Globe, BookOpen, Scale } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const areas = [
  {
    title: "EIXO EMPRESARIAL",
    description: "Suporte completo à estruturação e operação de negócios privados",
    services: [
      { icon: FileText, name: "Estruturação de Contratos de Grande Porte" },
      { icon: Shield, name: "Gestão de Riscos e Compliance" },
      { icon: Building, name: "Societário e Tributário" },
      { icon: TrendingUp, name: "Fusões e Aquisições" },
      { icon: Briefcase, name: "Reestruturação Empresarial" },
      { icon: Users, name: "Direito do Trabalho Empresarial" }
    ]
  },
  {
    title: "EIXO ADMINISTRATIVO / NEGÓCIOS C/ O PODER PÚBLICO",
    description: "Viabilização de projetos públicos e parcerias estratégicas (modelagem jurídica e financeira)",
    services: [
      { icon: Landmark, name: "Estruturação de Concessões e PPPs" },
      { icon: BookOpen, name: "Assessoria em Licitações e Contratos" },
      { icon: Globe, name: "Negócios com Órgãos de Fomento" },
      { icon: Scale, name: "Consultoria Regulatória" }
    ]
  }
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Eixos de Atuação e Soluções Estratégicas
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg">
          Nossa estrutura integrada oferece soluções completas para o crescimento sustentável do seu negócio
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {areas.map((area, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover-scale bg-card border-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{area.title}</CardTitle>
                <CardDescription className="text-base">{area.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {area.services.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-foreground pt-2">{service.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Destaque Direito Trabalhista */}
        <div className="max-w-4xl mx-auto">
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

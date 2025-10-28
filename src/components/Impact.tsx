import { Building2, DollarSign, Network, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const differentials = [
  {
    icon: Building2,
    title: "Impacto Urbano",
    description: "Atuação em Smart Cities, revitalização de espaços e modelagens sustentáveis para o desenvolvimento urbano inteligente."
  },
  {
    icon: DollarSign,
    title: "Captação de Recursos",
    description: "Assessoria especializada para acesso a financiamentos em bancos de fomento (BNB, FINEP, BNDES)."
  },
  {
    icon: Network,
    title: "Abordagem Hub de Negócios",
    description: "Integração única entre Direito, Estratégia e Negócios, indo além do modelo tradicional de advocacia."
  },
  {
    icon: CheckCircle,
    title: "Experiência Comprovada",
    description: "Histórico sólido em operações públicas e privadas de grande porte, com resultados mensuráveis."
  }
];

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Projetos de Impacto e Diferenciais
        </h2>
        <p className="text-center text-white/80 mb-16 max-w-3xl mx-auto text-lg">
          Transformando desafios jurídicos em oportunidades estratégicas de negócio
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-md border-white/20 hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 shadow-glow">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;

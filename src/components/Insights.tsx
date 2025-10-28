import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "O Futuro das Concessões e PPPs no Brasil",
    description: "Análise das novas oportunidades de parcerias público-privadas e modelagens inovadoras para infraestrutura.",
    date: "15 de Janeiro, 2025",
    category: "Direito Administrativo"
  },
  {
    title: "Impacto da Reforma Tributária em Fusões e Aquisições",
    description: "Como as mudanças tributárias estão transformando o mercado de M&A e as estratégias das empresas.",
    date: "10 de Janeiro, 2025",
    category: "Direito Empresarial"
  },
  {
    title: "Smart Cities: O Papel do Direito na Inovação Urbana",
    description: "Aspectos jurídicos e regulatórios da implementação de tecnologias inteligentes nas cidades brasileiras.",
    date: "5 de Janeiro, 2025",
    category: "Direito Urbanístico"
  }
];

const Insights = () => {
  return (
    <section id="insights" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Insights Estratégicos e Publicações
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Conhecimento e análise jurídica aplicada ao mundo dos negócios
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover-scale group cursor-pointer border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-3">
                  {article.category}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  {article.description}
                </CardDescription>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                  <span>Ler artigo</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" className="shadow-elegant">
            Ver Todas as Publicações
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Insights;

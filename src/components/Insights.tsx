import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, ArrowRight, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Article {
  title: string;
  description: string;
  date: string;
  category: string;
  fullContent: string;
}

const articles: Article[] = [
  {
    title: "O Futuro das Concessões e PPPs no Brasil",
    description: "Análise das novas oportunidades de parcerias público-privadas e modelagens inovadoras para infraestrutura.",
    date: "18 de Março, 2024",
    category: "Direito Administrativo",
    fullContent: `O cenário das concessões e Parcerias Público-Privadas (PPPs) no Brasil atravessa um momento de transformação significativa. Com a crescente demanda por investimentos em infraestrutura e a limitação de recursos públicos, essas modalidades contratuais se tornam cada vez mais estratégicas para o desenvolvimento nacional.

A reforma do marco legal das concessões, aliada às experiências acumuladas nas últimas décadas, abre novas perspectivas para projetos mais eficientes e sustentáveis. Destacam-se as modelagens inovadoras que incorporam indicadores de desempenho mais sofisticados, mecanismos de reequilíbrio econômico-financeiro mais transparentes e estruturas de garantias mais robustas.

No âmbito municipal e estadual, observa-se um crescimento expressivo de PPPs voltadas para iluminação pública, saneamento básico e mobilidade urbana. Esses projetos demonstram a maturidade do mercado brasileiro e a capacidade de adaptação dos modelos contratuais às especificidades locais.

O desafio que se apresenta para o futuro é consolidar um ambiente regulatório estável e previsível, que estimule investimentos de longo prazo e promova a competitividade nos processos licitatórios. A segurança jurídica permanece como elemento central para atrair investidores nacionais e internacionais.`
  },
  {
    title: "Impacto da Reforma Tributária em Fusões e Aquisições",
    description: "Como as mudanças tributárias estão transformando o mercado de M&A e as estratégias das empresas.",
    date: "15 de Outubro, 2025",
    category: "Direito Empresarial",
    fullContent: `A Reforma Tributária aprovada recentemente representa uma mudança paradigmática no sistema tributário brasileiro, com impactos profundos nas operações de fusões e aquisições (M&A). A transição para o modelo de Imposto sobre Valor Agregado (IVA) dual demanda uma reavaliação completa das estratégias corporativas.

No contexto das transações de M&A, a reforma traz implicações significativas para a avaliação de empresas-alvo. Os créditos tributários acumulados, as contingências fiscais e os benefícios fiscais estaduais passam por uma releitura à luz do novo regime. Due diligences tributárias tornam-se ainda mais complexas e estratégicas.

A simplificação do sistema, embora benéfica no longo prazo, cria desafios durante o período de transição. Empresas em processo de reestruturação precisam considerar os impactos tanto do regime atual quanto do futuro sistema, o que demanda planejamento tributário sofisticado e assessoria jurídica especializada.

Setores como varejo, serviços e indústria enfrentam cenários distintos, exigindo análises customizadas para cada operação. A nova sistemática de não-cumulatividade plena e a extinção gradual de benefícios fiscais regionais redesenham o mapa competitivo brasileiro.

Para investidores e empresas, o momento atual exige uma abordagem proativa e estratégica, antecipando os efeitos da reforma e estruturando operações que maximizem valor no novo ambiente tributário.`
  },
  {
    title: "Smart Cities: O Papel do Direito na Inovação Urbana",
    description: "Aspectos jurídicos e regulatórios da implementação de tecnologias inteligentes nas cidades brasileiras.",
    date: "22 de Julho, 2024",
    category: "Direito Urbanístico",
    fullContent: `O conceito de Smart Cities ou Cidades Inteligentes representa uma evolução significativa na forma como pensamos o desenvolvimento urbano. A integração de tecnologias de informação e comunicação (TICs) na gestão urbana traz consigo um conjunto complexo de questões jurídicas que demandam atenção especializada.

No Brasil, iniciativas de cidades inteligentes multiplicam-se em municípios de diferentes portes, abrangendo desde sistemas de iluminação pública inteligente até plataformas integradas de mobilidade urbana. Cada uma dessas iniciativas levanta questões sobre licitações, contratos administrativos, proteção de dados e regulação setorial.

A Lei Geral de Proteção de Dados (LGPD) assume papel central nesse contexto. A coleta massiva de dados urbanos, essencial para o funcionamento de sistemas inteligentes, deve observar rigorosamente os princípios de finalidade, adequação e necessidade. O poder público, como controlador de dados, precisa implementar programas de governança robustos.

As PPPs e concessões surgem como instrumentos privilegiados para viabilizar projetos de Smart Cities, permitindo a mobilização de expertise privada e investimentos de longo prazo. A modelagem desses contratos deve contemplar a rápida evolução tecnológica e garantir flexibilidade para incorporação de inovações.

O futuro das cidades brasileiras passa necessariamente pela integração entre tecnologia, planejamento urbano e direito. O desafio é construir marcos regulatórios que estimulem a inovação sem comprometer direitos fundamentais dos cidadãos.`
  }
];

const Insights = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <section id="insights" className="py-20 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 text-primary transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Insights Estratégicos e Publicações
        </h2>
        <p className={`text-center text-muted-foreground mb-16 text-lg transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Conhecimento e análise jurídica aplicada ao mundo dos negócios
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card 
              key={index} 
              onClick={() => handleArticleClick(article)}
              className={`shadow-elegant hover-scale group cursor-pointer border-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
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
      </div>

      {/* Article Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">{selectedArticle?.title}</DialogTitle>
          </DialogHeader>
          
          {selectedArticle && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedArticle.date}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4">
                  {selectedArticle.category}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {selectedArticle.title}
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground whitespace-pre-line leading-relaxed">
                  {selectedArticle.fullContent}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Insights;
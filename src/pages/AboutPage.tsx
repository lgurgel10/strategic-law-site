import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import bgVideo from "@/assets/bg-video.mp4";
import marbleTexture from "@/assets/marble-texture.jpg";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quem Somos
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Conheça o Lins Neves Advocacia
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section 
        className="py-20 relative"
        style={{ 
          backgroundImage: `url(${marbleTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/85" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link 
              to="/"
              className="group inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-12"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              <span>Voltar ao início</span>
            </Link>

            <div className="space-y-8 text-foreground">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed">
                  O <strong className="text-primary">Lins Neves</strong> é mais do que um escritório de advocacia — é um <strong className="text-accent">hub de negócios</strong>, com uma visão inovadora sobre o Direito Empresarial e o impacto das decisões jurídicas no crescimento das empresas.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Nossa Missão</h2>
                <p className="text-lg leading-relaxed">
                  Oferecer soluções jurídicas estratégicas e personalizadas que impulsionem o crescimento dos negócios dos nossos clientes, combinando excelência técnica com uma visão empresarial integrada.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Nossos Valores</h2>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Excelência</strong> - Comprometimento com a mais alta qualidade em todas as entregas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Inovação</strong> - Busca constante por soluções criativas e eficientes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Ética</strong> - Atuação pautada pela integridade e transparência</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Parceria</strong> - Relacionamento próximo e duradouro com nossos clientes</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Nossa Estrutura</h2>
                <p className="text-lg leading-relaxed">
                  Com escritórios em Recife e Brasília, o Lins Neves conta com uma equipe multidisciplinar de advogados especializados em diversas áreas do Direito Empresarial, Tributário, Trabalhista, Administrativo e Regulatório.
                </p>

                <p className="text-lg leading-relaxed mt-6">
                  Nossa estrutura permite atender clientes em todo o território nacional, oferecendo suporte jurídico completo para empresas de diferentes portes e segmentos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default AboutPage;
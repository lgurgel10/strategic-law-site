import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import bgVideo from "@/assets/bg-video.mp4";
import marbleTexture from "@/assets/marble-texture.jpg";
import logo from "@/assets/logo-lins-neves.png";

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
        </div>
      </section>

      {/* Main Content with Image Sidebar - Similar to reference */}
      <section className="relative">
        {/* Desktop: Side by side layout */}
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Logo Vertical Grande Branca (only on desktop) */}
          <div className="hidden lg:block lg:w-1/3 relative">
            <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90">
              <div className="w-full h-full flex items-center justify-center px-8">
                <img 
                  src={logo}
                  alt="Lins Neves Advocacia"
                  className="w-full max-w-md h-auto object-contain opacity-95"
                  style={{ transform: 'rotate(-90deg)' }}
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-2/3">
            {/* Content with marble background - igual Áreas de Atuação */}
            <div 
              className="relative min-h-screen"
              style={{ 
                backgroundImage: `url(${marbleTexture})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
              }}
            >
              <div className="relative z-10 p-8 md:p-12 space-y-12">
                {/* Back Link - sempre visível no topo */}
                <div className="mb-8">
                  <Link 
                    to="/"
                    className="group inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                  >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
                    <span className="text-lg font-medium">Voltar ao início</span>
                  </Link>
                </div>

                {/* Intro Box */}
                <div className="bg-primary text-white p-8 md:p-12 rounded-lg">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
                    Compromisso com soluções jurídicas de alta confiabilidade e visão inovadora
                  </h2>
                  <p className="text-lg leading-relaxed text-white/90">
                    O Lins Neves Advocacia é um escritório que nasceu com uma visão inovadora sobre o Direito Empresarial e sobre o impacto que decisões jurídicas estratégicas exercem no crescimento e na competitividade das empresas.
                  </p>
                  <p className="text-lg leading-relaxed text-white/90 mt-4">
                    Nossa equipe é formada por advogados experientes, especializados em diversas áreas do Direito, capazes de atuar de maneira integrada tanto na esfera consultiva quanto no contencioso.
                  </p>
                </div>

                {/* Nossa Missão */}
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary border-l-4 border-accent pl-4">
                    Nossa Missão
                  </h3>
                  
                  <p className="text-lg leading-relaxed text-foreground">
                    Fundado há mais de oito anos por Estevan de Barros Lins, nosso escritório construiu uma trajetória marcada por crescimento, evolução constante e compromisso com a excelência. Nossa missão é oferecer soluções jurídicas sofisticadas, personalizadas e verdadeiramente inovadoras, capazes de impulsionar o desenvolvimento dos nossos clientes e fortalecer seus negócios.
                  </p>

                  <p className="text-lg leading-relaxed text-foreground">
                    Atuamos com uma assessoria jurídica completa, ajustada com precisão às necessidades de cada demanda e sustentada por um padrão de eficiência, seriedade e qualidade reconhecido no mercado. Nosso propósito é transformar conhecimento jurídico em valor estratégico, entregando resultados efetivos, segurança e apoio contínuo às decisões de quem confia em nosso trabalho.
                  </p>

                  <p className="text-lg leading-relaxed text-foreground">
                    Mais do que prestar serviços jurídicos, buscamos construir parcerias sólidas, transparentes e duradouras, pautadas na ética, no profissionalismo e em uma atuação moderna, alinhada aos desafios do cenário empresarial contemporâneo.
                  </p>
                </div>
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

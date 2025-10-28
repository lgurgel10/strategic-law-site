import { Button } from "@/components/ui/button";
import officeInterior from "@/assets/office-interior.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${officeInterior})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-glow transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white text-center">
              Quem Somos
            </h2>
            
            <p className="text-xl md:text-2xl text-white leading-relaxed mb-6 text-center">
              A <strong className="text-accent">Lins Neves</strong> é mais do que um escritório de advocacia — é um <strong>hub de negócios</strong>, com uma visão inovadora sobre o Direito Empresarial e o impacto das decisões jurídicas no crescimento das empresas.
            </p>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 text-center">
              Nossa abordagem integra expertise jurídica de alto nível com inteligência estratégica de negócios, permitindo que nossos clientes não apenas resolvam questões legais, mas transformem desafios em oportunidades de crescimento sustentável.
            </p>

            <div className="flex justify-center">
              <Button 
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('practice-areas')}
                className="shadow-elegant text-lg px-8 py-6 hover-scale"
              >
                Nossa Abordagem Estratégica
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

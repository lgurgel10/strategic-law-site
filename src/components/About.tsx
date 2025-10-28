import { Button } from "@/components/ui/button";
import officeInterior from "@/assets/office-interior.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={officeInterior} 
                alt="Escritório Lins Neves" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
          </div>

          {/* Content Side */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Quem Somos
            </h2>
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              A <strong className="text-primary">Lins Neves</strong> é mais do que um escritório de advocacia — é um <strong>hub de negócios</strong>, com uma visão inovadora sobre o Direito Empresarial e o impacto das decisões jurídicas no crescimento das empresas.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nossa abordagem integra expertise jurídica de alto nível com inteligência estratégica de negócios, permitindo que nossos clientes não apenas resolvam questões legais, mas transformem desafios em oportunidades de crescimento sustentável.
            </p>

            <Button 
              variant="default"
              size="lg"
              onClick={() => scrollToSection('practice-areas')}
              className="shadow-elegant"
            >
              Nossa Abordagem Estratégica
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import officeInterior from "@/assets/office-interior.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${officeInterior})` }}
      >
        <div className="absolute inset-0 bg-primary/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Quem Somos
            </h2>
            
            <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
              O <strong className="text-accent">Lins Neves</strong> é mais do que um escritório de advocacia — é um <strong>hub de negócios</strong>, com uma visão inovadora sobre o Direito Empresarial e o impacto das decisões jurídicas no crescimento das empresas.
            </p>

            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              Nossa abordagem integra expertise jurídica de alto nível com inteligência estratégica de negócios, permitindo que nossos clientes não apenas resolvam questões legais, mas transformem desafios em oportunidades de crescimento sustentável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

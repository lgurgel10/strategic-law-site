import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bgVideo from "@/assets/bg-video.mp4";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Video Background */}
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
            
            <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
              O <strong className="text-accent">Lins Neves</strong> é mais do que um escritório de advocacia — é um <strong>hub de negócios</strong>, com uma visão inovadora sobre o Direito Empresarial e o impacto das decisões jurídicas no crescimento das empresas.
            </p>

            <Link 
              to="/quem-somos"
              className="group inline-flex items-center gap-3 text-white hover:text-accent transition-all duration-300"
            >
              <span className="text-lg font-medium border-b-2 border-white group-hover:border-accent transition-colors duration-300">
                Saiba mais
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

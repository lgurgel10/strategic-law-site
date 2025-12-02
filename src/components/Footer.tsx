import { Linkedin, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logo from "@/assets/logo-lins-neves.png";

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <footer className="bg-primary text-white py-12" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-3 gap-8 mb-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logo} 
              alt="Lins Neves Advocacia" 
              className="mb-4 w-48 h-auto"
            />
            <p className="text-white/80 text-sm leading-relaxed text-center md:text-left">
              Hub de negócios com expertise jurídica e inteligência estratégica para o crescimento empresarial.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#about" className="hover:text-accent transition-colors">Quem Somos</a></li>
              <li><a href="#practice-areas" className="hover:text-accent transition-colors">Áreas de Atuação</a></li>
              <li><a href="#team" className="hover:text-accent transition-colors">Equipe</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Localização */}
          <div>
            <h4 className="font-semibold mb-4">Localização</h4>
            <div className="space-y-6 text-sm text-white/80">
              <div>
                <p className="font-semibold text-white mb-2">Recife</p>
                <p>Empresarial Janete Costa</p>
                <p>Rua Padre Carapuceiro, 968 - Sala 2001 a 2003</p>
                <p>Boa Viagem - CEP 51020-280</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Brasília</p>
                <p>Quadra SHS, Quadra 06, Conjunto A, Bloco A, Sala 501</p>
                <p>Asa Sul – Brasília/DF - CEP 70316-102</p>
              </div>
            </div>
          </div>

          {/* Contato e Social */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`border-t border-white/20 pt-8 text-center text-sm text-white/60 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p>&copy; {new Date().getFullYear()} Lins Neves Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

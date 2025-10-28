import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LINS NEVES ADVOCACIA</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Hub de negócios com expertise jurídica e inteligência estratégica para o crescimento empresarial.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#about" className="hover:text-accent transition-colors">Quem Somos</a></li>
              <li><a href="#practice-areas" className="hover:text-accent transition-colors">Eixos de Atuação</a></li>
              <li><a href="#team" className="hover:text-accent transition-colors">Equipe</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <p className="text-sm text-white/80 mb-4">
              Quadra SHS, Quadra 06, Conjunto A, Bloco A, Sala 501<br />
              Asa Sul – Brasília/DF
            </p>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">Siga-nos no LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Lins Neves Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

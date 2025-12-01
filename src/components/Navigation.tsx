import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo-lins-neves.png";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Quem Somos", href: "#about" },
  { label: "Eixos de Atuação", href: "#practice-areas" },
  { label: "Equipe", href: "#team" },
  { label: "Projetos", href: "#impact" },
  { label: "Insights", href: "#insights" },
  { label: "Contato", href: "#contact" }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Block scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* WhatsApp Contact Button */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-primary hover:bg-primary/10' 
                  : 'text-white hover:bg-white/10'
              } hover:scale-105`}
            >
              <MessageCircle size={24} />
              <span className="hidden md:inline font-medium">Contato</span>
            </a>

            {/* Hamburger Button - Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Hamburger Button - Desktop */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hidden lg:block p-4 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/10'
              } hover:scale-110`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 animate-fade-in bg-primary/95 backdrop-blur-md">
          {/* Background Overlay */}
          <div 
            className="fixed inset-0 bg-transparent" 
            onClick={() => setIsMenuOpen(false)} 
          />
          
          {/* Menu Content - Mobile */}
          <div className="lg:hidden fixed inset-0 flex items-center justify-center">
            <div className="w-full max-w-md px-8">
              <nav className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-white text-lg font-normal hover:text-accent transition-all duration-300 text-left py-2 border-b border-white/20 hover:border-accent/50 hover:translate-x-2"
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animation: 'slide-in 0.5s ease-out forwards',
                      fontFamily: 'Cairo, sans-serif'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Menu Content - Desktop */}
          <div className="hidden lg:flex fixed inset-0">
            <div className="flex w-full">
              {/* Left Side - Logo */}
              <div className="w-1/2 flex items-center justify-center border-r border-white/20">
                <div className="flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt="Lins Neves" 
                    className="w-80 h-auto"
                  />
                </div>
              </div>

              {/* Right Side - Navigation */}
              <div className="w-1/2 flex items-center justify-center">
                <nav className="flex flex-col gap-5">
                  {navItems.map((item, index) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-white text-xl font-normal hover:text-accent transition-all duration-300 text-left py-2 border-b border-white/20 hover:border-accent/50 hover:translate-x-4"
                      style={{ 
                        animationDelay: `${index * 50}ms`,
                        animation: 'slide-in 0.5s ease-out forwards',
                        fontFamily: 'Cairo, sans-serif'
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;

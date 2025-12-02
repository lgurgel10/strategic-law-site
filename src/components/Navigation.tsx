import { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";
import logo from "@/assets/logo-lins-neves.png";
import logoAzul from "@/assets/logo-lins-neves-azul.png";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Quem Somos", href: "#about" },
  { label: "Áreas de Atuação", href: "#practice-areas" },
  { label: "Equipe", href: "#team" },
  { label: "Insights", href: "#insights" },
  { label: "Contato", href: "#contact" }
];

const offices = [
  {
    city: "RECIFE",
    phone: "+55 (81) 9.8944-3214",
    mapUrl: "https://maps.google.com/?q=Recife+PE"
  },
  {
    city: "BRASÍLIA",
    phone: "+55 (61) 9.9999-9999",
    mapUrl: "https://maps.google.com/?q=Brasilia+DF"
  }
];

const Navigation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1) over the first 300px
      const progress = Math.min(window.scrollY / 300, 1);
      setScrollProgress(progress);
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

  const isScrolled = scrollProgress > 0.1;

  // Logo transition values
  const logoOpacity = scrollProgress > 0.5 ? 1 : 0; // Fade in header logo after 50%

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          isMenuOpen ? 'z-[70] bg-transparent' : 'z-50'
        } ${
          !isMenuOpen && isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : !isMenuOpen ? 'bg-transparent' : ''
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo in header - appears on scroll */}
            <div 
              className="transition-all duration-300"
              style={{ 
                opacity: logoOpacity,
                transform: `scale(${0.4 + (scrollProgress * 0.6)})`,
                transformOrigin: 'left center'
              }}
            >
              <img 
                src={isScrolled ? logoAzul : logo} 
                alt="Lins Neves" 
                className="h-12 w-auto cursor-pointer"
                onClick={() => scrollToSection('#hero')}
              />
            </div>

            {/* Hamburger Button - Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 rounded-lg transition-all duration-300 ${
                isMenuOpen ? 'text-white hover:bg-white/10' : isScrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Hamburger Button - Desktop */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hidden lg:block p-4 rounded-lg transition-all duration-300 ${
                isMenuOpen ? 'text-white hover:bg-white/10' : isScrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/10'
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
        <div className="fixed inset-0 z-[60] animate-fade-in bg-primary/95 backdrop-blur-md">
          {/* Background Overlay */}
          <div 
            className="fixed inset-0 bg-transparent" 
            onClick={() => setIsMenuOpen(false)} 
          />
          
          {/* Menu Content - Mobile */}
          <div className="lg:hidden fixed inset-0 flex items-center justify-center">
            <div className="w-full max-w-md px-8">
              {/* Logo centered above menu items */}
              <div className="flex justify-center mb-8">
                <img 
                  src={logo} 
                  alt="Lins Neves" 
                  className="w-40 h-auto"
                />
              </div>
              
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
              {/* Left Side - Logo (bigger and more to the left) */}
              <div className="w-1/3 flex items-center justify-start pl-16 border-r border-white/20">
                <img 
                  src={logo} 
                  alt="Lins Neves" 
                  className="w-96 h-auto"
                />
              </div>

              {/* Center - Navigation */}
              <div className="w-1/3 flex items-center justify-center border-r border-white/20">
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

              {/* Right Side - Offices */}
              <div className="w-1/3 flex items-center justify-center">
                <div className="flex flex-col gap-8">
                  <h3 className="text-accent text-lg font-medium mb-2">Nossos escritórios</h3>
                  {offices.map((office, index) => (
                    <div 
                      key={office.city}
                      className="flex flex-col gap-1"
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        animation: 'slide-in 0.5s ease-out forwards'
                      }}
                    >
                      <span className="text-white font-semibold text-base">{office.city}</span>
                      <span className="text-white/80 text-sm">{office.phone}</span>
                      <a 
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent text-sm underline hover:text-white transition-colors flex items-center gap-1"
                      >
                        <MapPin className="w-3 h-3" />
                        Ver mapa
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;

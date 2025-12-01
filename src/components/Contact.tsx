import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Linkedin, Instagram, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logo from "@/assets/logo-lins-neves.png";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/?text=${whatsappMessage}`, '_blank');
  };

  const offices = [
    {
      id: "recife",
      name: "Recife",
      address: "Av. Engenheiro Antônio de Goes, 60, Sala 704",
      city: "Recife / PE",
      cep: "CEP 51010-000",
      phone: "+55 (81) 3241-2500",
      mapUrl: "https://maps.google.com"
    },
    {
      id: "brasilia",
      name: "Brasília",
      address: "Quadra SHS, Quadra 06, Conjunto A, Bloco A, Sala 501",
      city: "Asa Sul – Brasília/DF",
      cep: "CEP 70316-102",
      phone: "+55 (61) 3224-4200",
      mapUrl: "https://maps.google.com"
    }
  ];

  const toggleOffice = (officeId: string) => {
    setSelectedOffice(selectedOffice === officeId ? null : officeId);
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 text-accent transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Contatos
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Offices */}
          <div className={`transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-white">
              NOSSOS ESCRITÓRIOS
            </h3>
            
            <div className="space-y-4 mb-8">
              {offices.map((office) => (
                <div key={office.id} className="space-y-4">
                  <button
                    onClick={() => toggleOffice(office.id)}
                    className="w-full flex items-center gap-3 text-left text-white hover:text-accent transition-colors group"
                  >
                    {selectedOffice === office.id ? (
                      <Minus className="w-5 h-5 text-accent flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-accent flex-shrink-0" />
                    )}
                    <span className="text-lg font-semibold">{office.name}</span>
                  </button>

                  {selectedOffice === office.id && (
                    <div className="ml-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-elegant animate-fade-in">
                      <h4 className="text-primary font-bold mb-4 border-l-4 border-accent pl-3">
                        {office.name}
                      </h4>
                      <div className="space-y-2 text-foreground/80 mb-4">
                        <p>{office.address}</p>
                        <p>{office.city}</p>
                        <p>{office.cep}</p>
                        <p className="font-semibold text-foreground">{office.phone}</p>
                      </div>
                      <Button
                        asChild
                        className="bg-accent hover:bg-accent/90 text-white shadow-elegant"
                      >
                        <a href={office.mapUrl} target="_blank" rel="noopener noreferrer">
                          Ver mapa
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mb-6">
              <Button
                asChild
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-white shadow-elegant hover:shadow-glow transition-all"
              >
                <a href="mailto:contato@linsneves.adv.br" className="flex items-center justify-center gap-2">
                  <span>contato@linsneves.adv.br</span>
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-elegant relative">
              <img 
                src={logo} 
                alt="Lins Neves" 
                className="absolute top-6 right-6 w-24 h-auto opacity-80"
              />
              
              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div>
                  <Label htmlFor="name" className="text-primary font-semibold mb-2 block">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="border-primary/20 focus:border-accent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-primary font-semibold mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="border-primary/20 focus:border-accent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-primary font-semibold mb-2 block">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="border-primary/20 focus:border-accent"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-primary font-semibold mb-2 block">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="border-primary/20 focus:border-accent min-h-[120px]"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white shadow-elegant hover:shadow-glow transition-all"
                >
                  Enviar mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

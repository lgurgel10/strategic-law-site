import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Linkedin, Instagram, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logo from "@/assets/logo-lins-neves.png";
import bgVideo from "@/assets/bg-video.mp4";

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
      address: "Empresarial Janete Costa, Rua Padre Carapuceiro, 968 - Sala 2001 a 2003",
      city: "Boa Viagem",
      cep: "CEP 51020-280",
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
      {/* Background video with parallax effect */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
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
                    <div className="ml-8 space-y-3 animate-fade-in">
                      <div className="space-y-2 text-white/90 text-base">
                        <p className="font-medium">{office.address}</p>
                        <p>{office.city}</p>
                        <p>{office.cep}</p>
                        <p className="font-semibold text-accent text-lg pt-1">{office.phone}</p>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent hover:text-white transition-all"
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
            <div className="relative">
              <img 
                src={logo} 
                alt="Lins Neves" 
                className="absolute -top-2 right-0 w-24 h-auto opacity-90 z-10"
              />
              
              <form onSubmit={handleSubmit} className="space-y-4 pt-16">
                <div>
                  <Label htmlFor="name" className="text-white font-normal mb-1 block text-sm">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-transparent border-0 border-b border-white/30 rounded-none focus:border-accent text-white placeholder:text-white/40 focus-visible:ring-0 px-0"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white font-normal mb-1 block text-sm">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-transparent border-0 border-b border-white/30 rounded-none focus:border-accent text-white placeholder:text-white/40 focus-visible:ring-0 px-0"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white font-normal mb-1 block text-sm">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-transparent border-0 border-b border-white/30 rounded-none focus:border-accent text-white placeholder:text-white/40 focus-visible:ring-0 px-0"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white font-normal mb-1 block text-sm">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-transparent border-0 border-b border-white/30 rounded-none focus:border-accent text-white placeholder:text-white/40 focus-visible:ring-0 px-0 min-h-[100px] resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white shadow-elegant hover:shadow-glow transition-all mt-6"
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

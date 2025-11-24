import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Dr. João Lins",
    role: "Sócio Fundador",
    linkedin: "#"
  },
  {
    name: "Dr. Ricardo Neves",
    role: "Sócio Fundador",
    linkedin: "#"
  },
  {
    name: "Dra. Ana Carolina Araújo",
    role: "Head de Direito Trabalhista",
    linkedin: "#"
  },
  {
    name: "Dr. Carlos Mendes",
    role: "Head de Direito Administrativo",
    linkedin: "#"
  },
  {
    name: "Dra. Mariana Silva",
    role: "Head de Compliance",
    linkedin: "#"
  },
  {
    name: "Dr. Paulo Santos",
    role: "Head de Contratos",
    linkedin: "#"
  },
  {
    name: "Dra. Juliana Costa",
    role: "Head de Direito Tributário",
    linkedin: "#"
  }
];

const Team = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="team" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 text-primary transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Nossa Equipe
        </h2>
        <p className={`text-center text-muted-foreground mb-16 text-lg transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Experiência e Visão Integrada
        </p>

        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className={`w-full max-w-6xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <CarouselContent className="-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="group shadow-elegant hover-scale overflow-hidden border-0 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/20 group-hover:ring-secondary/40 transition-all duration-300">
                      <AvatarImage src="" alt={member.name} />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{member.role}</p>
                    
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-primary text-white hover:bg-primary/90 border-none shadow-glow h-12 w-12 -left-4 md:-left-12" />
          <CarouselNext className="bg-primary text-white hover:bg-primary/90 border-none shadow-glow h-12 w-12 -right-4 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default Team;

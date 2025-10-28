import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. João Lins",
    role: "Sócio Fundador",
    linkedin: "#"
  },
  {
    name: "Dra. Ana Carolina Araújo",
    role: "Head de Direito Trabalhista",
    linkedin: "#"
  },
  {
    name: "Dr. Carlos Neves",
    role: "Especialista em Direito Administrativo",
    linkedin: "#"
  },
  {
    name: "Dra. Mariana Silva",
    role: "Especialista em Compliance",
    linkedin: "#"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Nossa Equipe
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Experiência e Visão Integrada
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group shadow-elegant hover-scale overflow-hidden border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Placeholder for professional photo */}
                <div className="w-full aspect-square bg-gradient-to-br from-primary to-secondary rounded-xl mb-4 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-4xl text-white font-bold">
                      {member.name.split(' ')[1][0]}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
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
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            Conheça Toda a Nossa Equipe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;

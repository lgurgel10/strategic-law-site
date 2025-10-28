import { Users, Award, Calendar, Building2 } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "+10",
    label: "Profissionais Especializados"
  },
  {
    icon: Award,
    value: "+15",
    label: "Êxitos Processuais Relevantes"
  },
  {
    icon: Calendar,
    value: "+8",
    label: "Anos de Atuação"
  },
  {
    icon: Building2,
    value: "Conexão",
    label: "Direta com Bancos de Fomento (BNDES, FINEP)"
  }
];

const Credentials = () => {
  return (
    <section id="credentials" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Nossos Números e Credenciais
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-8 bg-card rounded-xl shadow-elegant hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-glow">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Credentials;

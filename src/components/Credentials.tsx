import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import marbleTexture from "@/assets/marble-texture.jpg";

const stats = [
  {
    value: 10,
    prefix: "+",
    label: "Profissionais Especializados",
    bgClass: "bg-white"
  },
  {
    value: 1000,
    prefix: "+",
    label: "Êxitos Processuais",
    bgClass: "bg-accent"
  },
  {
    value: 8,
    prefix: "+",
    label: "Anos de Atuação",
    bgClass: "bg-white"
  }
];

const StatCard = ({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) => {
  const count = useCountUp(stat.value, 1500, isVisible);
  const isAccent = stat.bgClass === "bg-accent";
  
  return (
    <div 
      className={`flex flex-col justify-between p-6 md:p-8 transition-all duration-700 min-h-[200px] md:min-h-[240px] ${stat.bgClass} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
      }}
    >
      <p className={`text-5xl md:text-6xl lg:text-7xl font-bold ${isAccent ? 'text-white' : 'text-primary'}`}>
        {stat.prefix}{count}
      </p>
      <p className={`text-sm md:text-base font-medium ${isAccent ? 'text-white/90' : 'text-foreground/80'}`}>
        {stat.label}
      </p>
    </div>
  );
};

const Credentials = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      id="credentials" 
      className="py-20 relative overflow-hidden" 
      ref={ref}
      style={{ 
        backgroundImage: `url(${marbleTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/85" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-white transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Nossos Números e Credenciais
        </h2>
        
        {/* Cards Grid - Staggered like reference */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-end">
            {/* First card - normal height */}
            <div className="md:mb-12">
              <StatCard stat={stats[0]} index={0} isVisible={isVisible} />
            </div>
            
            {/* Second card - taller/shifted up */}
            <div className="md:mb-0">
              <StatCard stat={stats[1]} index={1} isVisible={isVisible} />
            </div>
            
            {/* Third card - normal height but shifted down */}
            <div className="md:mt-12">
              <StatCard stat={stats[2]} index={2} isVisible={isVisible} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;

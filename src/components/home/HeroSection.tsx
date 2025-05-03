
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
            Des résidences <span className="text-accent">d'exception</span> pour une vie raffinée
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Notre agence immobilière vous accompagne dans tous vos projets, des biens les plus exclusifs aux propriétés de caractère.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Découvrir nos services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-accent text-white hover:bg-accent/20">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

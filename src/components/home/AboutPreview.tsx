
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPreview = () => {
  return (
    <section className="py-24 bg-beige-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
              <span className="inline-block relative z-10">
                À propos d'Élégant Demeures
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/20 -z-10"></span>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Fondée en 2005, Élégant Demeures s'est imposée comme une référence dans le secteur immobilier haut de gamme. Notre équipe d'experts passionnés s'engage à vous offrir un service personnalisé et à vous accompagner dans chaque étape de votre projet immobilier.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Que vous cherchiez à vendre, acheter ou investir, nous mettons notre expertise à votre service pour vous garantir une expérience immobilière exceptionnelle.
            </p>
            <Link to="/about">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                En savoir plus
              </Button>
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="h-full w-full overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Luxurious property exterior" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-full flex flex-col gap-4">
              <div className="h-1/2 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1225&q=80" 
                  alt="Elegant interior design" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-1/2 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Modern kitchen design" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

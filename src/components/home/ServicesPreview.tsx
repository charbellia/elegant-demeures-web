
import { Link } from "react-router-dom";
import { Home, Building, Briefcase, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Vente de biens",
    description: "Stratégie de vente personnalisée, valorisation optimale de votre bien et accompagnement jusqu'à la signature.",
    icon: Home,
    color: "bg-beige-100",
  },
  {
    title: "Achat immobilier",
    description: "Recherche sur-mesure selon vos critères, sélection rigoureuse et négociation pour votre futur bien.",
    icon: Building,
    color: "bg-beige-100",
  },
  {
    title: "Investissement",
    description: "Analyse du marché, identification des opportunités d'investissement et optimisation de votre rendement.",
    icon: Briefcase,
    color: "bg-beige-100",
  },
  {
    title: "Conseil patrimonial",
    description: "Stratégies d'optimisation fiscale et patrimoniale pour valoriser vos investissements immobiliers.",
    icon: Calendar,
    color: "bg-beige-100",
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nos Services d'Exception
          </h2>
          <p className="text-lg text-muted-foreground">
            Élégant Demeures vous propose une gamme complète de services immobiliers haut de gamme, adaptés à vos besoins spécifiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none hover-lift elegant-shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <div className={`${service.color} rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Tous nos services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;


import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Claire Dubois",
    role: "Propriétaire",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=922&q=80",
    quote: "Élégant Demeures a su parfaitement valoriser mon appartement parisien. Leur stratégie de mise en marché était impeccable et la vente s'est conclue au-dessus du prix estimé. Un professionnalisme rare dans le secteur."
  },
  {
    id: 2,
    name: "Marc Laurent",
    role: "Investisseur",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    quote: "J'ai fait confiance à Élégant Demeures pour plusieurs investissements et je ne l'ai jamais regretté. Leur connaissance du marché et leurs conseils avisés m'ont permis de constituer un patrimoine immobilier performant."
  },
  {
    id: 3,
    name: "Sophie Moreau",
    role: "Acheteuse",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    quote: "La recherche de notre maison familiale semblait interminable jusqu'à notre rencontre avec Élégant Demeures. Leur écoute et leur persévérance nous ont permis de trouver la maison parfaite dans un quartier que nous n'aurions pas exploré par nous-mêmes."
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-beige-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez les témoignages de nos clients satisfaits qui ont fait confiance à notre expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none elegant-shadow">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg italic mb-6">"{testimonials[activeIndex].quote}"</p>
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-accent" : "bg-beige-300"
                }`}
                aria-label={`Témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

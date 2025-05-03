
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-xl bg-primary text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80')`,
            }}
          />
          
          <div className="relative z-10 p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à concrétiser votre projet immobilier ?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Notre équipe d'experts est à votre disposition pour vous accompagner dans toutes les étapes de votre projet. Prenez rendez-vous dès maintenant pour bénéficier de nos conseils personnalisés.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Prendre rendez-vous
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

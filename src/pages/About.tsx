
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-beige-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos d'Élégant Demeures</h1>
              <p className="text-xl text-muted-foreground">
                Votre partenaire de confiance dans l'immobilier d'exception
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Fondée en 2005 par Michel Durand, ancien architecte passionné par l'immobilier, Élégant Demeures est née de la volonté d'offrir un service d'excellence dans le secteur de l'immobilier haut de gamme.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Au fil des années, notre agence s'est développée en restant fidèle à ses valeurs : l'expertise, la discrétion et le service personnalisé. Nous avons su tisser un réseau solide de partenaires et de clients fidèles qui nous font confiance pour leurs projets immobiliers les plus importants.
                </p>
                <p className="text-lg text-muted-foreground">
                  Aujourd'hui, Élégant Demeures est reconnue comme une référence dans le secteur de l'immobilier de prestige, avec une équipe de professionnels dévoués et passionnés.
                </p>
              </div>
              <div className="order-first lg:order-last">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                  alt="Elegant office space" 
                  className="rounded-lg w-full h-auto shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-beige-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Nos valeurs</h2>
              <p className="text-lg text-muted-foreground">
                Des principes qui guident chacune de nos actions au quotidien
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg elegant-shadow text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">01</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  Nous visons l'excellence dans tous nos services, de la première rencontre jusqu'à la conclusion de votre projet immobilier.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg elegant-shadow text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">02</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Intégrité</h3>
                <p className="text-muted-foreground">
                  Nous agissons avec transparence et honnêteté, en plaçant toujours les intérêts de nos clients au centre de nos préoccupations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg elegant-shadow text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">03</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Nous adoptons des approches innovantes et des outils modernes pour offrir un service immobilier à la pointe de la technologie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Notre équipe d'experts</h2>
              <p className="text-lg text-muted-foreground">
                Des professionnels passionnés à votre service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                    alt="Michel Durand" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Michel Durand</h3>
                <p className="text-accent mb-4">Fondateur & Directeur</p>
                <p className="text-muted-foreground">
                  Avec plus de 25 ans d'expérience dans l'immobilier de luxe, Michel apporte une vision stratégique et une connaissance approfondie du marché.
                </p>
              </div>

              <div className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80" 
                    alt="Sophie Martin" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Sophie Martin</h3>
                <p className="text-accent mb-4">Directrice des Ventes</p>
                <p className="text-muted-foreground">
                  Spécialiste des biens de prestige, Sophie accompagne nos clients vendeurs avec une stratégie marketing sur mesure pour chaque propriété.
                </p>
              </div>

              <div className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                    alt="Antoine Leclerc" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Antoine Leclerc</h3>
                <p className="text-accent mb-4">Conseiller Investissement</p>
                <p className="text-muted-foreground">
                  Expert en gestion de patrimoine, Antoine guide nos clients investisseurs dans la constitution d'un portefeuille immobilier performant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à travailler avec nous ?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Notre équipe est à votre disposition pour vous accompagner dans votre projet immobilier.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Nous contacter
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

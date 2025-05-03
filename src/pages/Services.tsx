
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Building, Briefcase, Calendar, MapPin, User } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-beige-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
              <p className="text-xl text-muted-foreground">
                Des prestations sur mesure pour répondre à tous vos besoins immobiliers
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Service 1 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-24 flex-shrink-0">
                  <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center">
                    <Home className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Vente de biens immobiliers</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Notre processus de vente est conçu pour valoriser votre bien et attirer les acheteurs les plus qualifiés. Nous élaborons une stratégie personnalisée qui comprend :
                  </p>
                  <ul className="space-y-3 mb-6 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 mt-1"></span>
                      <span>Estimation précise basée sur une analyse approfondie du marché</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 mt-1"></span>
                      <span>Mise en valeur professionnelle avec photographie et home staging</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 mt-1"></span>
                      <span>Diffusion ciblée auprès de notre réseau d'acheteurs qualifiés</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 mt-1"></span>
                      <span>Négociation experte pour maximiser votre valeur</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-24 flex-shrink-0">
                  <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Recherche personnalisée</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Nous trouvons la propriété qui correspond parfaitement à vos attentes, même les plus exigeantes. Notre service d'acquisition comprend :
                  </p>
                  <ul className="space-y-3 mb-6 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 mt-1"></span>
                      <span>Analyse approfondie de vos besoins et définition précise de vos critères</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 mt-1"></span>
                      <span>Recherche active, y compris les biens hors marché via notre réseau privilégié</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 mt-1"></span>
                      <span>Présélection rigoureuse pour ne visiter que les biens correspondant à vos attentes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 mt-1"></span>
                      <span>Négociation avantageuse et sécurisation juridique de la transaction</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service 3 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-24 flex-shrink-0">
                  <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Conseil en investissement</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Optimisez vos investissements immobiliers grâce à notre expertise du marché et nos conseils stratégiques :
                  </p>
                  <ul className="space-y-3 mb-6 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 mt-1"></span>
                      <span>Identification des opportunités d'investissement à fort potentiel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 mt-1"></span>
                      <span>Analyse des rendements locatifs et perspectives de plus-value</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 mt-1"></span>
                      <span>Stratégies fiscales optimisées adaptées à votre situation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 mt-1"></span>
                      <span>Constitution d'un patrimoine immobilier diversifié et performant</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service 4 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-24 flex-shrink-0">
                  <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Gestion locative premium</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Confiez-nous la gestion de votre bien locatif et bénéficiez d'un service complet et sans souci :
                  </p>
                  <ul className="space-y-3 mb-6 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 mt-1"></span>
                      <span>Sélection minutieuse des locataires selon des critères stricts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 mt-1"></span>
                      <span>Gestion administrative complète et suivi des paiements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 mt-1"></span>
                      <span>Maintenance préventive et intervention rapide en cas de problème</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 mt-1"></span>
                      <span>Rapports réguliers et transparence totale sur la gestion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supplementary Services */}
        <section className="py-20 bg-beige-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Services complémentaires</h2>
              <p className="text-lg text-muted-foreground">
                Pour vous offrir une expérience immobilière complète et sans stress
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg elegant-shadow">
                <h3 className="text-xl font-bold mb-4">Home Staging & Valorisation</h3>
                <p className="text-muted-foreground mb-6">
                  Notre équipe de décorateurs professionnels met en valeur votre bien pour attirer les acheteurs potentiels et maximiser son prix de vente.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>Conseils de mise en valeur</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>Photographie professionnelle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>Visite virtuelle immersive</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg elegant-shadow">
                <h3 className="text-xl font-bold mb-4">Conciergerie & Relocation</h3>
                <p className="text-muted-foreground mb-6">
                  Un service d'accompagnement personnalisé pour faciliter votre installation et vous aider dans toutes vos démarches.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>Coordination du déménagement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>Assistance administrative</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>Intégration locale</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg elegant-shadow">
                <h3 className="text-xl font-bold mb-4">Conseil Juridique & Fiscal</h3>
                <p className="text-muted-foreground mb-6">
                  Notre réseau de notaires et d'avocats spécialisés vous accompagne pour sécuriser juridiquement vos transactions.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>Optimisation fiscale</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>Montages juridiques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>Sécurisation des transactions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg elegant-shadow">
                <h3 className="text-xl font-bold mb-4">Architecture & Rénovation</h3>
                <p className="text-muted-foreground mb-6">
                  Un accompagnement expert pour transformer ou rénover votre bien selon vos envies et maximiser sa valeur.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>Conception architecturale</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>Gestion de projet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>Suivi des travaux</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-primary text-white rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Besoin d'un service sur mesure ?</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Contactez-nous pour discuter de votre projet immobilier et découvrir comment nous pouvons vous accompagner.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Prendre rendez-vous
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

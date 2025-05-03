
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-beige-100 text-primary">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Élégant Demeures</h3>
            <p className="text-muted-foreground mb-6">
              Votre partenaire de confiance pour tous vos projets immobiliers. Expertise, élégance et accompagnement personnalisé.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Vente de biens</li>
              <li className="text-muted-foreground">Achat immobilier</li>
              <li className="text-muted-foreground">Estimation gratuite</li>
              <li className="text-muted-foreground">Conseil patrimonial</li>
              <li className="text-muted-foreground">Gestion locative</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                <span className="text-muted-foreground">123 Avenue des Élégantes, 75008 Paris, France</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent" />
                <span className="text-muted-foreground">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent" />
                <span className="text-muted-foreground">contact@elegant-demeures.fr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-beige-200">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Élégant Demeures. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

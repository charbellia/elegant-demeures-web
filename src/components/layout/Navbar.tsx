
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md elegant-shadow py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-playfair text-2xl font-bold">Élégant Demeures</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-accent transition-colors">
            Accueil
          </Link>
          <Link to="/about" className="text-foreground hover:text-accent transition-colors">
            À propos
          </Link>
          <Link to="/services" className="text-foreground hover:text-accent transition-colors">
            Nos services
          </Link>
          <Link to="/blog" className="text-foreground hover:text-accent transition-colors">
            Blog
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-accent text-foreground hover:bg-accent hover:text-foreground">
              Contact
            </Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-accent transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-accent transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              À propos
            </Link>
            <Link 
              to="/services" 
              className="text-foreground hover:text-accent transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nos services
            </Link>
            <Link 
              to="/blog" 
              className="text-foreground hover:text-accent transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button variant="outline" className="w-full border-accent text-foreground hover:bg-accent hover:text-foreground">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

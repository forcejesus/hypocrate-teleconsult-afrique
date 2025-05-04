
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-hypocrate-blue">Hypocrate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-gray-700 hover:text-hypocrate-blue transition-colors">
              Accueil
            </Link>
            <Link to="/comment-ca-marche" className="text-gray-700 hover:text-hypocrate-blue transition-colors">
              Comment ça marche
            </Link>
            <Link to="/nos-medecins" className="text-gray-700 hover:text-hypocrate-blue transition-colors">
              Nos médecins
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-hypocrate-blue transition-colors">
              FAQ
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="btn-outline">
              Se connecter
            </Button>
            <Button className="btn-primary">
              S'inscrire
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 bg-white border-t">
          <div className="container-custom flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-hypocrate-blue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/comment-ca-marche" 
              className="text-gray-700 hover:text-hypocrate-blue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Comment ça marche
            </Link>
            <Link 
              to="/nos-medecins" 
              className="text-gray-700 hover:text-hypocrate-blue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nos médecins
            </Link>
            <Link 
              to="/faq" 
              className="text-gray-700 hover:text-hypocrate-blue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" className="btn-outline w-full">
                Se connecter
              </Button>
              <Button className="btn-primary w-full">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

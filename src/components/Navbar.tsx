
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? 'text-hypocrate-blue' : 'text-hypocrate-blue'}`}>
              Hypocrate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${isActive('/') 
                ? 'text-hypocrate-blue' 
                : 'text-gray-700 hover:text-hypocrate-blue'}`}
            >
              Accueil
            </Link>
            <Link 
              to="/comment-ca-marche" 
              className={`font-medium transition-colors ${isActive('/comment-ca-marche') 
                ? 'text-hypocrate-blue' 
                : 'text-gray-700 hover:text-hypocrate-blue'}`}
            >
              Comment ça marche
            </Link>
            <Link 
              to="/nos-medecins" 
              className={`font-medium transition-colors ${isActive('/nos-medecins') 
                ? 'text-hypocrate-blue' 
                : 'text-gray-700 hover:text-hypocrate-blue'}`}
            >
              Nos médecins
            </Link>
            <Link 
              to="/faq" 
              className={`font-medium transition-colors ${isActive('/faq') 
                ? 'text-hypocrate-blue' 
                : 'text-gray-700 hover:text-hypocrate-blue'}`}
            >
              FAQ
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild className="border-hypocrate-blue text-hypocrate-blue hover:bg-blue-50 font-medium">
              <Link to="/login">Se connecter</Link>
            </Button>
            <Button asChild className="bg-hypocrate-blue hover:bg-blue-600 text-white font-medium">
              <Link to="/register">S'inscrire</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-hypocrate-blue"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 bg-white border-t shadow-lg absolute w-full">
          <div className="container-custom flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`py-2 font-medium ${isActive('/') 
                ? 'text-hypocrate-blue' 
                : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/comment-ca-marche" 
              className={`py-2 font-medium ${isActive('/comment-ca-marche') 
                ? 'text-hypocrate-blue' 
                : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Comment ça marche
            </Link>
            <Link 
              to="/nos-medecins" 
              className={`py-2 font-medium ${isActive('/nos-medecins') 
                ? 'text-hypocrate-blue' 
                : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Nos médecins
            </Link>
            <Link 
              to="/faq" 
              className={`py-2 font-medium ${isActive('/faq') 
                ? 'text-hypocrate-blue' 
                : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" asChild className="w-full border-hypocrate-blue text-hypocrate-blue font-medium">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Se connecter</Link>
              </Button>
              <Button asChild className="w-full bg-hypocrate-blue hover:bg-blue-600 text-white font-medium">
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>S'inscrire</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

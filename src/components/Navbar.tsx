
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
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green p-2 rounded-xl">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">
              Hypocrate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-semibold transition-all duration-200 ${isActive('/') 
                ? 'text-hypocrate-blue border-b-2 border-hypocrate-blue' 
                : 'text-gray-700 hover:text-hypocrate-blue hover:scale-105'}`}
            >
              Accueil
            </Link>
            <Link 
              to="/comment-ca-marche" 
              className={`font-semibold transition-all duration-200 ${isActive('/comment-ca-marche') 
                ? 'text-hypocrate-blue border-b-2 border-hypocrate-blue' 
                : 'text-gray-700 hover:text-hypocrate-blue hover:scale-105'}`}
            >
              Comment ça marche
            </Link>
            <Link 
              to="/nos-medecins" 
              className={`font-semibold transition-all duration-200 ${isActive('/nos-medecins') 
                ? 'text-hypocrate-blue border-b-2 border-hypocrate-blue' 
                : 'text-gray-700 hover:text-hypocrate-blue hover:scale-105'}`}
            >
              Nos médecins
            </Link>
            <Link 
              to="/faq" 
              className={`font-semibold transition-all duration-200 ${isActive('/faq') 
                ? 'text-hypocrate-blue border-b-2 border-hypocrate-blue' 
                : 'text-gray-700 hover:text-hypocrate-blue hover:scale-105'}`}
            >
              FAQ
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild className="font-semibold text-gray-700 hover:text-hypocrate-blue hover:bg-blue-50 transition-all duration-200">
              <Link to="/login">Se connecter</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              <Link to="/register">S'inscrire</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-hypocrate-blue hover:bg-blue-50 transition-all duration-200"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-6 bg-white/95 backdrop-blur-lg border-t shadow-lg absolute w-full">
          <div className="container-custom flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`py-3 px-4 font-semibold rounded-lg transition-all duration-200 ${isActive('/') 
                ? 'text-hypocrate-blue bg-blue-50' 
                : 'text-gray-700 hover:text-hypocrate-blue hover:bg-blue-50'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/comment-ca-marche" 
              className={`py-3 px-4 font-semibold rounded-lg transition-all duration-200 ${isActive('/comment-ca-marche') 
                ? 'text-hypocrate-blue bg-blue-50' 
                : 'text-gray-700 hover:text-hypocrate-blue hover:bg-blue-50'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Comment ça marche
            </Link>
            <Link 
              to="/nos-medecins" 
              className={`py-3 px-4 font-semibold rounded-lg transition-all duration-200 ${isActive('/nos-medecins') 
                ? 'text-hypocrate-blue bg-blue-50' 
                : 'text-gray-700 hover:text-hypocrate-blue hover:bg-blue-50'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Nos médecins
            </Link>
            <Link 
              to="/faq" 
              className={`py-3 px-4 font-semibold rounded-lg transition-all duration-200 ${isActive('/faq') 
                ? 'text-hypocrate-blue bg-blue-50' 
                : 'text-gray-700 hover:text-hypocrate-blue hover:bg-blue-50'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col space-y-3 pt-4 border-t">
              <Button variant="outline" asChild className="w-full border-2 border-hypocrate-blue text-hypocrate-blue font-semibold hover:bg-blue-50 transition-all duration-200">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Se connecter</Link>
              </Button>
              <Button asChild className="w-full bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 text-white font-semibold shadow-lg transition-all duration-200">
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

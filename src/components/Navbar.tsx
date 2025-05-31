
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

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
              {t('nav.home')}
            </Link>
            <Link 
              to="/comment-ca-marche" 
              className={`font-medium transition-colors ${isActive('/comment-ca-marche') 
                ? 'text-hypocrate-blue' 
                : 'text-gray-700 hover:text-hypocrate-blue'}`}
            >
              {t('nav.how_it_works')}
            </Link>
            <Link 
              to="/nos-medecins" 
              className={`font-medium transition-colors ${isActive('/nos-medecins') 
                ? 'text-hypocrate-blue' 
                : 'text-gray-700 hover:text-hypocrate-blue'}`}
            >
              {t('nav.our_doctors')}
            </Link>
            <Link 
              to="/faq" 
              className={`font-medium transition-colors ${isActive('/faq') 
                ? 'text-hypocrate-blue' 
                : 'text-gray-700 hover:text-hypocrate-blue'}`}
            >
              {t('nav.faq')}
            </Link>
          </div>

          {/* Auth Buttons and Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button variant="outline" asChild className="border-hypocrate-blue text-hypocrate-blue hover:bg-blue-50 font-medium">
              <Link to="/login">{t('nav.login')}</Link>
            </Button>
            <Button asChild className="bg-hypocrate-blue hover:bg-blue-600 text-white font-medium">
              <Link to="/register">{t('nav.register')}</Link>
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
              {t('nav.home')}
            </Link>
            <Link 
              to="/comment-ca-marche" 
              className={`py-2 font-medium ${isActive('/comment-ca-marche') 
                ? 'text-hypocrate-blue' 
                : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.how_it_works')}
            </Link>
            <Link 
              to="/nos-medecins" 
              className={`py-2 font-medium ${isActive('/nos-medecins') 
                ? 'text-hypocrate-blue' 
                : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.our_doctors')}
            </Link>
            <Link 
              to="/faq" 
              className={`py-2 font-medium ${isActive('/faq') 
                ? 'text-hypocrate-blue' 
                : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.faq')}
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <div className="mb-2">
                <LanguageSelector />
              </div>
              <Button variant="outline" asChild className="w-full border-hypocrate-blue text-hypocrate-blue font-medium">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>{t('nav.login')}</Link>
              </Button>
              <Button asChild className="w-full bg-hypocrate-blue hover:bg-blue-600 text-white font-medium">
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>{t('nav.register')}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

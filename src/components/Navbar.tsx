
import { useState, useEffect } from 'react';
import Logo from './navbar/Logo';
import DesktopNavigation from './navbar/DesktopNavigation';
import AuthButtons from './navbar/AuthButtons';
import MobileNavigation from './navbar/MobileNavigation';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopNavigation />
          <AuthButtons />
          <MobileNavigation 
            mobileMenuOpen={mobileMenuOpen} 
            setMobileMenuOpen={setMobileMenuOpen} 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

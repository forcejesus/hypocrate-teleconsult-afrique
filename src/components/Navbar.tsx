
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

  const servicesMenuItems = [
    {
      title: "Pour les patients",
      href: "/services/patients",
      description: "Consultez un médecin dans votre langue"
    },
    {
      title: "Pour les médecins", 
      href: "/services/medecins",
      description: "Rejoignez notre réseau de professionnels"
    },
    {
      title: "Pour les interprètes",
      href: "/services/interpretes", 
      description: "Facilitez l'accès aux soins médicaux"
    }
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">
              Hypocrate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={`px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 ${isActive('/') 
                      ? 'text-hypocrate-blue bg-blue-50' 
                      : 'text-gray-700 hover:text-hypocrate-blue hover:bg-blue-50'}`}
                  >
                    Accueil
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-semibold text-base text-gray-700 hover:text-hypocrate-blue hover:bg-blue-50 transition-all duration-200">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 bg-white">
                      {servicesMenuItems.map((item) => (
                        <NavigationMenuLink key={item.href} asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-hypocrate-blue focus:bg-blue-50 focus:text-hypocrate-blue"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/comment-ca-marche" 
                    className={`px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 ${isActive('/comment-ca-marche') 
                      ? 'text-hypocrate-blue bg-blue-50' 
                      : 'text-gray-700 hover:text-hypocrate-blue hover:bg-blue-50'}`}
                  >
                    Comment ça marche
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/nos-medecins" 
                    className={`px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 ${isActive('/nos-medecins') 
                      ? 'text-hypocrate-blue bg-blue-50' 
                      : 'text-gray-700 hover:text-hypocrate-blue hover:bg-blue-50'}`}
                  >
                    Notre équipe
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/contact" 
                    className={`px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 ${isActive('/contact') 
                      ? 'text-hypocrate-blue bg-blue-50' 
                      : 'text-gray-700 hover:text-hypocrate-blue hover:bg-blue-50'}`}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" asChild className="font-semibold text-base text-gray-700 hover:text-hypocrate-blue hover:bg-blue-50 transition-all duration-200">
              <Link to="/login">Se connecter</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 px-6 py-2.5 rounded-xl">
              <Link to="/register">S'inscrire</Link>
            </Button>
          </div>

          {/* Mobile menu button - Sidebar */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-hypocrate-blue hover:bg-blue-50 transition-all duration-200"
                >
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-white">
                <SheetHeader className="text-left">
                  <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">
                    Hypocrate
                  </SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col space-y-6 mt-8">
                  <Link 
                    to="/" 
                    className={`py-3 px-4 font-semibold text-base rounded-lg transition-all duration-200 ${isActive('/') 
                      ? 'text-hypocrate-blue bg-blue-50' 
                      : 'text-gray-700 hover:text-hypocrate-blue hover:bg-blue-50'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Accueil
                  </Link>
                  
                  {/* Mobile Services Menu */}
                  <div className="border-l-4 border-hypocrate-blue/20 pl-4">
                    <div className="text-lg font-bold text-hypocrate-blue mb-4">Services</div>
                    {servicesMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block py-3 px-3 text-gray-600 hover:text-hypocrate-blue hover:bg-blue-50 rounded transition-all duration-200 mb-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="font-medium text-base">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                  
                  <Link 
                    to="/comment-ca-marche" 
                    className={`py-3 px-4 font-semibold text-base rounded-lg transition-all duration-200 ${isActive('/comment-ca-marche') 
                      ? 'text-hypocrate-blue bg-blue-50' 
                      : 'text-gray-700 hover:text-hypocrate-blue hover:bg-blue-50'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Comment ça marche
                  </Link>
                  
                  <Link 
                    to="/nos-medecins" 
                    className={`py-3 px-4 font-semibold text-base rounded-lg transition-all duration-200 ${isActive('/nos-medecins') 
                      ? 'text-hypocrate-blue bg-blue-50' 
                      : 'text-gray-700 hover:text-hypocrate-blue hover:bg-blue-50'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Notre équipe
                  </Link>

                  <Link 
                    to="/contact" 
                    className={`py-3 px-4 font-semibold text-base rounded-lg transition-all duration-200 ${isActive('/contact') 
                      ? 'text-hypocrate-blue bg-blue-50' 
                      : 'text-gray-700 hover:text-hypocrate-blue hover:bg-blue-50'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  
                  <div className="flex flex-col space-y-3 pt-6 border-t">
                    <Button variant="outline" asChild className="w-full border-2 border-hypocrate-blue text-hypocrate-blue font-semibold hover:bg-blue-50 transition-all duration-200">
                      <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Se connecter</Link>
                    </Button>
                    <Button asChild className="w-full bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 text-white font-semibold shadow-lg transition-all duration-200">
                      <Link to="/register" onClick={() => setMobileMenuOpen(false)}>S'inscrire</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

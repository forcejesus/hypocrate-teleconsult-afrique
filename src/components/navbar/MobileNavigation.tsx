
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

interface MobileNavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const MobileNavigation = ({ mobileMenuOpen, setMobileMenuOpen }: MobileNavigationProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
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
  );
};

export default MobileNavigation;

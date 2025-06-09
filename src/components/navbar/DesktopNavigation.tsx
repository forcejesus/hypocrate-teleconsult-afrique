
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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

const DesktopNavigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
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
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNavigation;

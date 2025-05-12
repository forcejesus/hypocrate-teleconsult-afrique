
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Supprimer les informations du localStorage pour l'utilisateur actuel
    localStorage.removeItem('profileCompleted');
    localStorage.removeItem('doctorProfileCompleted');
    localStorage.removeItem('interpreterProfileCompleted');
    
    // Afficher un toast pour confirmer la déconnexion
    toast.success("Vous avez été déconnecté avec succès");
    
    // Rediriger vers la page de connexion
    navigate('/login');
  };

  return (
    <Button 
      variant="ghost" 
      onClick={handleLogout}
      className="flex items-center w-full text-red-500 hover:text-red-600 hover:bg-red-50 transition-colors"
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>Se déconnecter</span>
    </Button>
  );
};

export default LogoutButton;

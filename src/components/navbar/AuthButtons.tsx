
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AuthButtons = () => {
  return (
    <div className="hidden lg:flex items-center space-x-4">
      <Button variant="ghost" asChild className="font-semibold text-base text-gray-700 hover:text-hypocrate-blue hover:bg-blue-50 transition-all duration-200">
        <Link to="/login">Se connecter</Link>
      </Button>
      <Button asChild className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 px-6 py-2.5 rounded-xl">
        <Link to="/register">S'inscrire</Link>
      </Button>
    </div>
  );
};

export default AuthButtons;

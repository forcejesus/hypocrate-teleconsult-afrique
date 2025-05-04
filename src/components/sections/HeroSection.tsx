
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-hypocrate-lightBlue to-white py-12 md:py-20">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Consultez un médecin en ligne, <span className="text-hypocrate-blue">où que vous soyez</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Hypocrate connecte les patients africains avec des médecins du monde entier, avec un service de traduction pour faciliter la communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-primary text-lg py-6" size="lg">
                Prendre rendez-vous
              </Button>
              <Link to="/comment-ca-marche">
                <Button variant="outline" className="btn-outline text-lg py-6" size="lg">
                  Comment ça marche
                </Button>
              </Link>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-500">
                ✓ Disponible 7j/7  ✓ Médecins certifiés  ✓ Service de traduction
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600" 
              alt="Téléconsultation médicale" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

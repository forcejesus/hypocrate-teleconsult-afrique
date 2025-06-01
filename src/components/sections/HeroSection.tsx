
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Star, CheckCircle, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-hypocrate-lightBlue via-white to-blue-50 py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-hypocrate-blue/10 to-hypocrate-green/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-hypocrate-green/10 to-hypocrate-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 text-hypocrate-blue font-semibold px-6 py-3 rounded-full text-sm shadow-sm">
              <Star className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
              Télémédecine nouvelle génération
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Consultations médicales</span>
              <br />
              <span className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">
                à distance
              </span>
              <br />
              <span className="text-gray-900">avec traduction</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Accédez à des soins de qualité depuis chez vous grâce à notre plateforme 
              de téléconsultation avec service de traduction en temps réel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 text-white font-bold text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 group">
                Prendre rendez-vous
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/comment-ca-marche">
                <Button variant="outline" className="border-2 border-hypocrate-blue text-hypocrate-blue hover:bg-blue-50 font-bold text-lg py-6 px-8 rounded-xl transition-all duration-200 group">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Comment ça marche
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Disponible</div>
                </div>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <CheckCircle className="w-5 h-5 text-hypocrate-blue" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Médecins certifiés</div>
                </div>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                <div className="bg-purple-100 rounded-full p-2 mr-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Langues supportées</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-hypocrate-blue/20 to-hypocrate-green/20 rounded-3xl -rotate-3 transform"></div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                alt="Téléconsultation médicale avec Hypocrate" 
                className="w-full h-auto object-cover rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300"
              />
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[280px] transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse"></div>
                  <p className="text-lg font-bold text-gray-900">Dr. Sarah est en ligne</p>
                </div>
                <p className="text-sm text-gray-600 mb-3">Traducteur disponible pour votre consultation</p>
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white"></div>
                  </div>
                  <span className="text-xs text-gray-500">+50 patients satisfaits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

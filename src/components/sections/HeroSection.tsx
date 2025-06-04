import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Star, CheckCircle, ArrowRight } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative bg-gradient-to-br from-hypocrate-lightBlue via-white to-blue-50 py-20 md:py-32 overflow-hidden">
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
              Télémédecine avec traduction en temps réel
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">
                Un médecin, chez vous,
              </span>
              <br />
              <span className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">
                dans votre langue
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Connectez-vous avec des médecins certifiés du monde entier. Nos interprètes professionnels 
              facilitent la communication pour que vous receviez les meilleurs soins.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 text-white font-bold text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 group">
                Commencer maintenant
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/comment-ca-marche">
                
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-hypocrate-blue/20 to-hypocrate-green/20 rounded-3xl -rotate-3 transform"></div>
              <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" alt="Téléconsultation médicale avec Hypocrate" className="w-full h-auto object-cover rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300" />
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[300px] transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse"></div>
                  <p className="text-lg font-bold text-gray-900">Dr. Sarah & Interprète</p>
                </div>
                <p className="text-sm text-gray-600 mb-3">Consultation en cours avec traduction français-anglais</p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">Dr</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">In</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 bg-green-50 px-2 py-1 rounded-full">Traduction active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full-width availability section */}
      <div className="w-full bg-white/80 backdrop-blur-sm py-12 mt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Service disponible</div>
              <div className="text-sm text-gray-500 mt-2">Consultations d'urgence incluses</div>
            </div>
            
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-hypocrate-blue" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Médecins & Interprètes</div>
              <div className="text-sm text-gray-500 mt-2">Certifiés et expérimentés</div>
            </div>
            
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-100 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Langues supportées</div>
              <div className="text-sm text-gray-500 mt-2">Priorité aux langues africaines</div>
            </div>
            
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-orange-100 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">&lt; 24h</div>
              <div className="text-gray-600 font-medium">Délai de consultation</div>
              <div className="text-sm text-gray-500 mt-2">Souvent le jour même</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
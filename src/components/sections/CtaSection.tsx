
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Calendar, CheckCircle } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-hypocrate-blue via-blue-600 to-hypocrate-green text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container-custom text-center relative z-10">
        {/* Main CTA */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 mb-12">
          <h3 className="text-3xl font-bold mb-6">
            Prêt à commencer votre première consultation ?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Inscription gratuite • Consultation disponible en moins de 24h • Support multilingue
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-hypocrate-blue hover:bg-gray-100 font-bold text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 group"
            >
              <Link to="/register" className="flex items-center">
                <Calendar className="mr-2 w-6 h-6" />
                Commencer maintenant
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-hypocrate-blue font-bold text-lg py-6 px-8 rounded-xl transition-all duration-200 group"
              asChild
            >
              <Link to="/contact">
                <Phone className="mr-2 w-5 h-5" />
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Features highlight */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="text-3xl font-bold mb-2">&lt; 24h</div>
            <div className="text-white/80">Consultation disponible</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="text-3xl font-bold mb-2">200+</div>
            <div className="text-white/80">Professionnels</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-white/80">Langues supportées</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-white/80">Support disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

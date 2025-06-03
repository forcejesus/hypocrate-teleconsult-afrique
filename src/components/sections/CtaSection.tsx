
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Calendar, Users, Stethoscope, Languages, CheckCircle } from 'lucide-react';

const CtaSection = () => {
  const userTypes = [
    {
      icon: Users,
      title: "Patients",
      description: "Consultez un médecin dans votre langue",
      features: ["Accès 24/7", "Traduction incluse", "Ordonnances numériques"],
      cta: "Commencer",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Stethoscope,
      title: "Médecins",
      description: "Élargissez votre patientèle internationale",
      features: ["Patients du monde entier", "Support traduction", "Plateforme sécurisée"],
      cta: "Rejoindre",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Languages,
      title: "Interprètes",
      description: "Facilitez l'accès aux soins médicaux",
      features: ["Spécialisation médicale", "Horaires flexibles", "Impact social"],
      cta: "Candidater",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-hypocrate-blue via-blue-600 to-hypocrate-green text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container-custom text-center relative z-10">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Rejoignez la révolution de la télémédecine
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Que vous soyez patient, médecin ou interprète, Hypocrate vous offre la plateforme 
            pour connecter le monde médical sans frontières.
          </p>
        </div>

        {/* User type cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {userTypes.map((userType, index) => {
            const UserIcon = userType.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 group">
                <div className={`bg-gradient-to-br ${userType.color} rounded-2xl p-4 inline-flex mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <UserIcon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{userType.title}</h3>
                <p className="text-blue-100 mb-6 text-lg">{userType.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {userType.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                      <span className="text-blue-50">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-white text-hypocrate-blue hover:bg-gray-100 font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                  asChild
                >
                  <Link to="/register">
                    {userType.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
        
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
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-hypocrate-blue font-bold text-lg py-6 px-8 rounded-xl transition-all duration-200 group"
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

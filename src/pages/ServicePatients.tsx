
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Video, 
  MessageSquare, 
  Shield, 
  Clock, 
  Globe,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Languages
} from 'lucide-react';

const ServicePatients = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-hypocrate-blue" />,
      title: "Réservation simplifiée",
      description: "Prenez rendez-vous en quelques clics avec le médecin de votre choix"
    },
    {
      icon: <Video className="w-8 h-8 text-hypocrate-blue" />,
      title: "Consultation vidéo HD",
      description: "Consultez depuis chez vous avec une qualité d'image et de son optimale"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-hypocrate-blue" />,
      title: "Traduction en temps réel",
      description: "Communiquez dans votre langue maternelle grâce à nos interprètes"
    },
    {
      icon: <Shield className="w-8 h-8 text-hypocrate-blue" />,
      title: "Données sécurisées",
      description: "Vos informations médicales sont protégées par un chiffrement bancaire"
    },
    {
      icon: <Clock className="w-8 h-8 text-hypocrate-blue" />,
      title: "Disponibilité 24/7",
      description: "Accédez aux soins médicaux à tout moment, même en urgence"
    },
    {
      icon: <Globe className="w-8 h-8 text-hypocrate-blue" />,
      title: "Accès mondial",
      description: "Consultez depuis n'importe où dans le monde"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Inscription gratuite",
      description: "Créez votre compte et complétez votre profil médical"
    },
    {
      number: "02", 
      title: "Choisissez votre médecin",
      description: "Parcourez notre équipe et sélectionnez le spécialiste adapté"
    },
    {
      number: "03",
      title: "Réservez votre créneau",
      description: "Choisissez la date et l'heure qui vous conviennent"
    },
    {
      number: "04",
      title: "Consultez en ligne",
      description: "Connectez-vous à l'heure prévue pour votre consultation"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-hypocrate-lightBlue via-white to-blue-50 py-20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="text-gray-900">Services pour les</span>
                <br />
                <span className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">
                  Patients
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Accédez aux meilleurs soins médicaux depuis chez vous, dans votre langue maternelle, 
                grâce à notre réseau de médecins certifiés et d'interprètes professionnels.
              </p>
              <Button className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 text-white font-bold text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105" asChild>
                <Link to="/register?type=patient">
                  Commencer maintenant
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pourquoi choisir nos services ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une expérience patient optimisée pour vous offrir les meilleurs soins possibles
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="bg-blue-50 rounded-2xl p-4 inline-flex mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comment ça marche ?
              </h2>
              <p className="text-xl text-gray-600">
                4 étapes simples pour accéder aux soins
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-hypocrate-blue to-hypocrate-green text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à commencer ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez des milliers de patients qui font confiance à Hypocrate
            </p>
            <Button className="bg-white text-hypocrate-blue hover:bg-gray-100 font-bold text-lg py-6 px-8 rounded-xl shadow-lg transition-all duration-200" asChild>
              <Link to="/register?type=patient">
                S'inscrire gratuitement
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePatients;

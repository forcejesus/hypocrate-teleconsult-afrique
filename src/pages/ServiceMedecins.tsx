
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Globe, 
  TrendingUp, 
  Shield, 
  Calendar, 
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Stethoscope
} from 'lucide-react';

const ServiceMedecins = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Patientèle internationale",
      description: "Élargissez votre pratique au-delà des frontières géographiques"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Support linguistique",
      description: "Nos interprètes facilitent la communication avec vos patients"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Revenus supplémentaires",
      description: "Augmentez vos revenus avec des consultations flexibles"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Plateforme sécurisée",
      description: "Respect total de la confidentialité et des réglementations"
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      title: "Horaires flexibles",
      description: "Consultez selon votre emploi du temps"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
      title: "Support technique 24/7",
      description: "Assistance complète pour une expérience optimale"
    }
  ];

  const requirements = [
    "Diplôme de médecine reconnu",
    "Autorisation d'exercer en cours de validité",
    "Expérience clinique minimum de 2 ans",
    "Maîtrise des outils de télémédecine",
    "Engagement qualité patient"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="text-gray-900">Services pour les</span>
                <br />
                <span className="bg-gradient-to-r from-green-600 to-hypocrate-blue bg-clip-text text-transparent">
                  Médecins
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Rejoignez notre réseau de professionnels de santé et étendez votre pratique 
                à l'international grâce à notre plateforme de télémédecine innovante.
              </p>
              <Button className="bg-gradient-to-r from-green-600 to-hypocrate-blue hover:from-green-700 hover:to-blue-600 text-white font-bold text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105" asChild>
                <Link to="/register?type=medecin">
                  Rejoindre l'équipe
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pourquoi nous rejoindre ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des avantages uniques pour développer votre pratique médicale
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="bg-green-50 rounded-2xl p-4 inline-flex mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Critères d'admission
                </h2>
                <p className="text-xl text-gray-600">
                  Les prérequis pour rejoindre notre équipe médicale
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-green-600">Exigences professionnelles</h3>
                    <ul className="space-y-4">
                      {requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-green-600">Process de candidature</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</div>
                        <div>
                          <p className="font-semibold">Candidature en ligne</p>
                          <p className="text-gray-600 text-sm">Remplissez le formulaire avec vos qualifications</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                        <div>
                          <p className="font-semibold">Vérification des documents</p>
                          <p className="text-gray-600 text-sm">Validation de vos diplômes et autorisations</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                        <div>
                          <p className="font-semibold">Entretien vidéo</p>
                          <p className="text-gray-600 text-sm">Discussion sur votre motivation et expérience</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</div>
                        <div>
                          <p className="font-semibold">Formation à la plateforme</p>
                          <p className="text-gray-600 text-sm">Onboarding complet sur nos outils</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-hypocrate-blue text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez notre équipe
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Commencez dès aujourd'hui votre aventure avec Hypocrate
            </p>
            <Button className="bg-white text-green-600 hover:bg-gray-100 font-bold text-lg py-6 px-8 rounded-xl shadow-lg transition-all duration-200" asChild>
              <Link to="/register?type=medecin">
                Postuler maintenant
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceMedecins;

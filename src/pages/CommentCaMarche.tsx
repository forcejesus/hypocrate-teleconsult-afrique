
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import CtaSection from '@/components/sections/CtaSection';
import { Users, Stethoscope, Languages, CheckCircle, Calendar, Video, MessageSquare, Globe, Clock, Shield } from 'lucide-react';

const CommentCaMarche = () => {
  const processSteps = [
    {
      step: "1",
      icon: <Calendar className="w-8 h-8 text-hypocrate-blue" />,
      title: "Inscription et réservation",
      description: "Créez votre compte en 2 minutes. Choisissez votre médecin et réservez un créneau. Indiquez si vous avez besoin d'un interprète.",
      details: ["Compte gratuit", "Choix du spécialiste", "Créneaux flexibles", "Support multilingue"]
    },
    {
      step: "2", 
      icon: <Video className="w-8 h-8 text-hypocrate-blue" />,
      title: "Connexion sécurisée",
      description: "Rejoignez votre consultation vidéo à l'heure prévue. Notre plateforme garantit la confidentialité et la qualité de la communication.",
      details: ["Vidéo HD", "Sécurité maximale", "Connexion stable", "Support technique"]
    },
    {
      step: "3",
      icon: <MessageSquare className="w-8 h-8 text-hypocrate-blue" />,
      title: "Consultation avec traduction",
      description: "Échangez librement avec votre médecin. Si nécessaire, notre interprète médical facilite la communication en temps réel.",
      details: ["Traduction instantanée", "Terminologie médicale", "Communication fluide", "Confidentialité garantie"]
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-6 h-6 text-green-600" />,
      title: "Accès universel",
      description: "Consultez depuis n'importe où dans le monde"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Disponibilité 24/7",
      description: "Service disponible à tout moment"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      title: "Sécurité maximale",
      description: "Données protégées et consultations confidentielles"
    },
    {
      icon: <Languages className="w-6 h-6 text-orange-600" />,
      title: "15+ langues",
      description: "Interprètes disponibles dans de nombreuses langues"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-hypocrate-lightBlue via-blue-50 to-white py-16">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Comment ça marche</h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Découvrez le processus simple et sécurisé pour consulter un médecin avec Hypocrate. 
                De l'inscription à la consultation, en passant par la traduction si nécessaire.
              </p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Le processus en 3 étapes simples</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre processus optimisé vous permet d'accéder rapidement à des soins de qualité, 
                avec le support d'interprètes professionnels si nécessaire.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
              {/* Connecting lines */}
              <div className="hidden lg:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-hypocrate-blue to-hypocrate-green -translate-y-1/2"></div>
              
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                    {/* Step number */}
                    <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-hypocrate-blue to-hypocrate-green text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    
                    <div className="mb-6 bg-hypocrate-lightBlue p-4 rounded-2xl inline-flex group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-hypocrate-blue transition-colors">{step.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                    
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-hypocrate-blue mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pourquoi choisir Hypocrate ?</h2>
              <p className="text-lg text-gray-600">Les avantages qui font la différence</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                  <div className="bg-gray-50 rounded-full p-4 inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-hypocrate-blue transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white py-20">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nos services pour chaque profil</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-blue-600 rounded-2xl p-4 inline-flex mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Pour les patients</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800">Créez votre compte patient en quelques minutes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800">Choisissez votre médecin selon vos besoins</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800">Réservez votre consultation à l'heure qui vous convient</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800">Bénéficiez d'un interprète si nécessaire</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-green-600 rounded-2xl p-4 inline-flex mb-6">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-900">Pour les médecins</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800">Inscription et vérification des diplômes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800">Définissez vos créneaux de disponibilité</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800">Consultez avec le support d'interprètes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800">Gérez vos consultations et recevez vos paiements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-purple-600 rounded-2xl p-4 inline-flex mb-6">
                  <Languages className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-purple-900">Pour les interprètes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-purple-600 mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-800">Certification en traduction médicale</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-purple-600 mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-800">Horaires flexibles selon votre disponibilité</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-purple-600 mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-800">Formation continue en terminologie médicale</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-purple-600 mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-800">Impact social en facilitant l'accès aux soins</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <HowItWorksSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default CommentCaMarche;

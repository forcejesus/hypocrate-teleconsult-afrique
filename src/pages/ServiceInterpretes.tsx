
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Languages, 
  Heart, 
  Clock, 
  Globe, 
  Award, 
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import LanguagesSection from '@/components/sections/LanguagesSection';

const ServiceInterpretes = () => {
  const advantages = [
    {
      icon: <Languages className="w-8 h-8 text-purple-600" />,
      title: "Spécialisation médicale",
      description: "Devenez expert en interprétation médicale spécialisée"
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      title: "Impact social positif",
      description: "Facilitez l'accès aux soins pour les communautés multilingues"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "Horaires flexibles",
      description: "Travaillez selon vos disponibilités, temps plein ou partiel"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Travail à distance",
      description: "Exercez depuis chez vous ou n'importe où dans le monde"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Formation continue",
      description: "Développez vos compétences avec nos programmes de formation"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Communauté professionnelle",
      description: "Rejoignez un réseau d'interprètes médicaux certifiés"
    }
  ];

  const requirements = [
    "Certification en interprétation médicale",
    "Maîtrise parfaite d'au moins 2 langues",
    "Formation en terminologie médicale",
    "Expérience en interprétation (recommandée)",
    "Discrétion et respect du secret médical"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="text-gray-900">Services pour les</span>
                <br />
                <span className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">
                  Interprètes
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Rejoignez notre mission pour démocratiser l'accès aux soins médicaux en facilitant 
                la communication entre patients et médecins du monde entier.
              </p>
              <Button className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 text-white font-bold text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105" asChild>
                <Link to="/register?type=interprete">
                  Candidater maintenant
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Profil recherché
                </h2>
                <p className="text-xl text-gray-600">
                  Les compétences essentielles pour rejoindre notre équipe
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-hypocrate-blue">Prérequis</h3>
                    <ul className="space-y-4">
                      {requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-hypocrate-green mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-hypocrate-blue">Process de sélection</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-hypocrate-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</div>
                        <div>
                          <p className="font-semibold">Test de compétences linguistiques</p>
                          <p className="text-gray-600 text-sm">Évaluation de vos compétences dans vos langues de travail</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-hypocrate-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                        <div>
                          <p className="font-semibold">Test de terminologie médicale</p>
                          <p className="text-gray-600 text-sm">Vérification de vos connaissances médicales</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-hypocrate-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                        <div>
                          <p className="font-semibold">Simulation d'interprétation</p>
                          <p className="text-gray-600 text-sm">Mise en situation réelle d'interprétation médicale</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-hypocrate-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</div>
                        <div>
                          <p className="font-semibold">Formation à la plateforme</p>
                          <p className="text-gray-600 text-sm">Apprentissage des outils Hypocrate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section from Homepage */}
        <LanguagesSection />

        {/* Advantages */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pourquoi devenir interprète chez Hypocrate ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une opportunité unique d'avoir un impact social tout en développant votre carrière
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-4 inline-flex mb-6">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-hypocrate-blue to-hypocrate-green text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez notre mission
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Devenez un pont entre les cultures pour faciliter l'accès aux soins
            </p>
            <Button className="bg-white text-hypocrate-blue hover:bg-gray-100 font-bold text-lg py-6 px-8 rounded-xl shadow-lg transition-all duration-200" asChild>
              <Link to="/register?type=interprete">
                Commencer ma candidature
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceInterpretes;

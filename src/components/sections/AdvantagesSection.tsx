
import { Shield, Globe, Lock, Clock, Users, Award, Languages, Heart } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Globe,
      title: "Accessibilité universelle",
      description: "Consultez depuis n'importe où dans le monde, à tout moment, avec une simple connexion internet",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Languages,
      title: "Traduction professionnelle",
      description: "Nos interprètes médicaux certifiés facilitent la communication dans plus de 15 langues",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Lock,
      title: "Sécurité maximale",
      description: "Vos données médicales sont protégées par un chiffrement de niveau bancaire et restent confidentielles",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Rapidité d'accès",
      description: "Consultations disponibles en moins de 24h, urgences prises en charge en quelques heures",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Équipe multiculturelle",
      description: "Médecins, interprètes et personnel de différentes cultures pour vous comprendre parfaitement",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Award,
      title: "Qualité certifiée",
      description: "Tous nos médecins et interprètes sont diplômés, certifiés et régulièrement évalués",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const stats = [
    { number: "5000+", label: "Consultations réalisées", icon: Heart },
    { number: "200+", label: "Médecins & Interprètes", icon: Users },
    { number: "15+", label: "Langues supportées", icon: Languages },
    { number: "98%", label: "Satisfaction client", icon: Award }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-hypocrate-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-hypocrate-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Pourquoi choisir <span className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">Hypocrate</span> ?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Une plateforme révolutionnaire qui connecte patients, médecins et interprètes du monde entier, 
            sans barrière linguistique ni géographique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent transform hover:-translate-y-3 relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className={`bg-gradient-to-br ${advantage.color} rounded-2xl p-4 inline-flex mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <advantage.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {advantage.description}
              </p>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Stats section */}
        <div className="bg-gradient-to-r from-hypocrate-blue via-blue-600 to-hypocrate-green rounded-3xl p-12 text-white shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Hypocrate en chiffres</h3>
            <p className="text-blue-100 text-lg">Des résultats qui parlent d'eux-mêmes</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-105">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-100" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-12">
            <p className="text-blue-100 mb-6 text-lg">Rejoignez notre communauté grandissante</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-hypocrate-blue hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">
                Devenir patient
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-bold py-4 px-8 rounded-xl transition-all duration-200">
                Rejoindre l'équipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;

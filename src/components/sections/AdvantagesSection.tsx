import { Shield, Globe, Lock, Clock, Users, Award, Languages, Heart } from 'lucide-react';
const AdvantagesSection = () => {
  const advantages = [{
    icon: Globe,
    title: "Accessibilité universelle",
    description: "Consultez depuis n'importe où dans le monde, à tout moment, avec une simple connexion internet",
    color: "from-blue-500 to-blue-600"
  }, {
    icon: Languages,
    title: "Traduction professionnelle",
    description: "Nos interprètes médicaux certifiés facilitent la communication dans plus de 15 langues",
    color: "from-purple-500 to-purple-600"
  }, {
    icon: Lock,
    title: "Sécurité maximale",
    description: "Vos données médicales sont protégées par un chiffrement de niveau bancaire et restent confidentielles",
    color: "from-green-500 to-green-600"
  }, {
    icon: Clock,
    title: "Rapidité d'accès",
    description: "Consultations disponibles en moins de 24h, urgences prises en charge en quelques heures",
    color: "from-orange-500 to-orange-600"
  }, {
    icon: Users,
    title: "Équipe multiculturelle",
    description: "Médecins, interprètes et personnel de différentes cultures pour vous comprendre parfaitement",
    color: "from-pink-500 to-pink-600"
  }, {
    icon: Award,
    title: "Qualité certifiée",
    description: "Tous nos médecins et interprètes sont diplômés, certifiés et régulièrement évalués",
    color: "from-yellow-500 to-yellow-600"
  }];
  const stats = [{
    number: "5000+",
    label: "Consultations réalisées",
    icon: Heart
  }, {
    number: "200+",
    label: "Médecins & Interprètes",
    icon: Users
  }, {
    number: "15+",
    label: "Langues supportées",
    icon: Languages
  }, {
    number: "98%",
    label: "Satisfaction client",
    icon: Award
  }];
  return <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
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
          {advantages.map((advantage, index) => <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent transform hover:-translate-y-3 relative overflow-hidden">
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
            </div>)}
        </div>
        
        {/* Enhanced Stats section */}
        
      </div>
    </section>;
};
export default AdvantagesSection;
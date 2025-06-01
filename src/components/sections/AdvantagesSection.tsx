
import { Shield, Globe, Lock, Clock, Users, Award } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Globe,
      title: "Accessibilité universelle",
      description: "Consultez depuis n'importe où, à tout moment, avec une connexion internet"
    },
    {
      icon: Shield,
      title: "Traduction en temps réel",
      description: "Communication fluide dans votre langue maternelle avec nos traducteurs certifiés"
    },
    {
      icon: Lock,
      title: "Sécurité maximale",
      description: "Données médicales protégées par un chiffrement de niveau bancaire"
    },
    {
      icon: Clock,
      title: "Rapidité d'accès",
      description: "Consultations disponibles en moins de 24h avec nos médecins partenaires"
    },
    {
      icon: Users,
      title: "Équipe multiculturelle",
      description: "Médecins et traducteurs de différentes cultures pour vous comprendre"
    },
    {
      icon: Award,
      title: "Qualité certifiée",
      description: "Tous nos médecins sont diplômés et certifiés dans leur domaine"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pourquoi choisir <span className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">Hypocrate</span> ?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Une plateforme révolutionnaire qui connecte les patients du monde entier avec les meilleurs médecins, 
            sans barrière linguistique ni géographique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-hypocrate-blue/20 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-hypocrate-lightBlue to-blue-100 rounded-2xl p-4 inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                <advantage.icon className="h-8 w-8 text-hypocrate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-hypocrate-blue transition-colors">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 bg-gradient-to-r from-hypocrate-blue to-hypocrate-green rounded-3xl p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Consultations réalisées</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Médecins certifiés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Langues supportées</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;


import { Book, Info, Mail, MessageCircle, Search } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <Search className="h-8 w-8 text-hypocrate-blue" />,
      title: "Des médecins spécialisés",
      description: "Accédez à des médecins qualifiés dans diverses spécialités médicales."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-hypocrate-blue" />,
      title: "Service de traduction",
      description: "Communication facilitée grâce à nos traducteurs professionnels."
    },
    {
      icon: <Book className="h-8 w-8 text-hypocrate-blue" />,
      title: "Dossier médical numérique",
      description: "Gardez un historique complet de vos consultations et ordonnances."
    },
    {
      icon: <Mail className="h-8 w-8 text-hypocrate-blue" />,
      title: "Ordonnances électroniques",
      description: "Recevez vos prescriptions directement par email après la consultation."
    },
    {
      icon: <Info className="h-8 w-8 text-hypocrate-blue" />,
      title: "Conseils médicaux",
      description: "Profitez de conseils personnalisés pour votre santé."
    }
  ];

  return (
    <section className="section-padding bg-hypocrate-lightBlue">
      <div className="container-custom">
        <h2 className="section-title">Les avantages d'Hypocrate</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm flex items-start animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mr-4 mt-1">
                {advantage.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold">
              Une équipe médicale à votre service
            </h3>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
              Notre réseau comprend des professionnels de santé du monde entier, 
              formés aux spécificités des consultations à distance et aux besoins des patients africains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-hypocrate-gray rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-hypocrate-blue mb-2">100+</div>
              <p className="text-gray-700">Médecins certifiés</p>
            </div>
            <div className="bg-hypocrate-gray rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-hypocrate-blue mb-2">20+</div>
              <p className="text-gray-700">Spécialités médicales</p>
            </div>
            <div className="bg-hypocrate-gray rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-hypocrate-blue mb-2">15+</div>
              <p className="text-gray-700">Langues disponibles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;

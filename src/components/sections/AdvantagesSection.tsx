
import { Book, MessageCircle, Search, FileText, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

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
      icon: <FileText className="h-8 w-8 text-hypocrate-blue" />,
      title: "Ordonnances électroniques",
      description: "Recevez vos prescriptions directement par email après la consultation."
    },
    {
      icon: <Clock className="h-8 w-8 text-hypocrate-blue" />,
      title: "Consultation rapide",
      description: "Obtenez un rendez-vous avec un médecin en moins de 30 minutes."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-hypocrate-lightBlue/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi choisir Hypocrate</h2>
          <p className="text-lg text-gray-600">
            Hypocrate vous offre une expérience de consultation médicale à distance simple, 
            sécurisée et adaptée aux patients africains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all bg-white animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-6 flex items-start">
                <div className="mr-4 mt-1 bg-hypocrate-lightBlue/60 p-3 rounded-lg">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">
              Une équipe médicale à votre service
            </h3>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Notre réseau comprend des professionnels de santé du monde entier, 
              formés aux spécificités des consultations à distance et aux besoins des patients africains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-hypocrate-lightBlue to-blue-100 rounded-xl p-8 text-center transform transition-transform hover:scale-105">
              <div className="text-4xl font-bold text-hypocrate-blue mb-2">100+</div>
              <p className="text-gray-700 font-medium">Médecins certifiés</p>
            </div>
            <div className="bg-gradient-to-r from-hypocrate-lightBlue to-blue-100 rounded-xl p-8 text-center transform transition-transform hover:scale-105">
              <div className="text-4xl font-bold text-hypocrate-blue mb-2">20+</div>
              <p className="text-gray-700 font-medium">Spécialités médicales</p>
            </div>
            <div className="bg-gradient-to-r from-hypocrate-lightBlue to-blue-100 rounded-xl p-8 text-center transform transition-transform hover:scale-105">
              <div className="text-4xl font-bold text-hypocrate-blue mb-2">15+</div>
              <p className="text-gray-700 font-medium">Langues disponibles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;

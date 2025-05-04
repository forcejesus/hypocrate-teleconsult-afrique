
import { Calendar, Phone, Video } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Calendar className="h-10 w-10 text-hypocrate-blue" />,
      title: "Prenez rendez-vous",
      description: "Choisissez une date et une heure qui vous conviennent pour votre consultation médicale en ligne."
    },
    {
      icon: <Video className="h-10 w-10 text-hypocrate-blue" />,
      title: "Consultez par vidéo",
      description: "Rencontrez virtuellement votre médecin depuis n'importe quel appareil (ordinateur, tablette, smartphone)."
    },
    {
      icon: <Phone className="h-10 w-10 text-hypocrate-blue" />,
      title: "Traduction en direct",
      description: "Un interprète vous assiste pendant la consultation pour faciliter la communication avec le médecin."
    }
  ];

  return (
    <section className="section-padding bg-white" id="comment-ca-marche">
      <div className="container-custom">
        <h2 className="section-title">Comment fonctionne une téléconsultation avec Hypocrate</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="mb-4 bg-hypocrate-lightBlue p-4 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-hypocrate-gray p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-semibold mb-3">
                Un service médical accessible à tous
              </h3>
              <p className="text-gray-700">
                Notre plateforme permet aux patients africains de consulter des médecins du monde entier, 
                avec l'aide d'un traducteur pour surmonter la barrière de la langue.
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400" 
              alt="Service de téléconsultation"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

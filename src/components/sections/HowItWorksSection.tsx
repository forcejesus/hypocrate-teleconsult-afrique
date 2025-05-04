
import { Calendar, Video, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
      icon: <MessageSquare className="h-10 w-10 text-hypocrate-blue" />,
      title: "Traduction en direct",
      description: "Un interprète vous assiste pendant la consultation pour faciliter la communication avec le médecin."
    }
  ];

  return (
    <section className="section-padding bg-white" id="comment-ca-marche">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comment fonctionne une téléconsultation avec Hypocrate</h2>
          <p className="text-lg text-gray-600">Notre plateforme connecte les patients africains avec des médecins du monde entier, avec l'assistance d'un traducteur si nécessaire.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-20 left-[calc(25%-30px)] right-[calc(25%-30px)] h-1 bg-gradient-to-r from-hypocrate-lightBlue via-hypocrate-blue to-hypocrate-lightBlue"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-center text-center relative animate-fade-in z-10"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="mb-6 bg-hypocrate-lightBlue p-5 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-hypocrate-lightBlue to-blue-100 p-10 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8 md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">
                Un service médical accessible à tous
              </h3>
              <p className="text-gray-700 mb-6">
                Notre plateforme permet aux patients africains de consulter des médecins du monde entier, 
                avec l'aide d'un traducteur pour surmonter la barrière de la langue.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-hypocrate-blue mr-2" />
                  <span className="text-gray-700">Plus de 100 médecins certifiés disponibles</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-hypocrate-blue mr-2" />
                  <span className="text-gray-700">15+ langues prises en charge pour la traduction</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-hypocrate-blue mr-2" />
                  <span className="text-gray-700">Ordonnances électroniques délivrées après consultation</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400" 
                alt="Service de téléconsultation"
                className="rounded-xl shadow-lg object-cover max-w-full h-auto"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Button className="bg-hypocrate-blue hover:bg-blue-600 text-white font-semibold py-5 px-8 rounded-md" asChild>
              <Link to="/nos-medecins">
                Découvrir nos médecins
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

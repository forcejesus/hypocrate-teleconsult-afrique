
import { Calendar, Video, MessageSquare, CheckCircle, Users, Stethoscope, Languages } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Calendar className="h-10 w-10 text-hypocrate-blue" />,
      title: "Réservez votre consultation",
      description: "Choisissez votre médecin et un créneau qui vous convient. Indiquez si vous avez besoin d'un interprète."
    },
    {
      icon: <Video className="h-10 w-10 text-hypocrate-blue" />,
      title: "Consultez par vidéo",
      description: "Connectez-vous à l'heure prévue depuis n'importe quel appareil avec une connexion internet."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-hypocrate-blue" />,
      title: "Traduction en temps réel",
      description: "Si nécessaire, un interprète professionnel facilite la communication pendant votre consultation."
    }
  ];

  const participants = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Patients",
      description: "Accédez aux soins depuis chez vous, dans votre langue maternelle",
      features: ["Consultation 24/7", "Support multilingue", "Ordonnances numériques"]
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-green-600" />,
      title: "Médecins",
      description: "Élargissez votre patientèle au-delà des barrières linguistiques",
      features: ["Patients internationaux", "Assistant traduction", "Plateforme sécurisée"]
    },
    {
      icon: <Languages className="h-8 w-8 text-purple-600" />,
      title: "Interprètes",
      description: "Facilitez l'accès aux soins en connectant patients et médecins",
      features: ["Spécialisation médicale", "Flexibilité horaire", "Impact social"]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50" id="comment-ca-marche">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comment fonctionne <span className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">Hypocrate</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Une plateforme innovante qui connecte patients, médecins et interprètes pour des consultations médicales sans frontières.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
          {/* Connecting lines */}
          <div className="hidden md:block absolute top-20 left-[16.67%] right-[16.67%] h-1">
            <div className="h-full bg-gradient-to-r from-hypocrate-blue via-hypocrate-green to-hypocrate-blue opacity-30"></div>
          </div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-hypocrate-blue/20 transition-all duration-300 flex flex-col items-center text-center relative animate-fade-in z-10 group"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="mb-6 bg-gradient-to-br from-hypocrate-lightBlue to-blue-100 p-5 rounded-full group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-hypocrate-blue transition-colors">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              
              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-hypocrate-blue to-hypocrate-green text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Participants section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Pour qui ?</h3>
            <p className="text-lg text-gray-600">Hypocrate s'adresse à trois types d'utilisateurs essentiels</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {participants.map((participant, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gray-50 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                    {participant.icon}
                  </div>
                  <h4 className="text-xl font-bold">{participant.title}</h4>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{participant.description}</p>
                <ul className="space-y-3">
                  {participant.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-hypocrate-blue mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-hypocrate-lightBlue to-blue-100 p-12 rounded-3xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">
              Prêt à rejoindre notre communauté médicale ?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Que vous soyez patient cherchant des soins de qualité, médecin souhaitant élargir votre pratique, 
              ou interprète désireux de faciliter l'accès aux soins, Hypocrate vous offre la plateforme idéale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 text-white font-semibold py-5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105" asChild>
                <Link to="/register">
                  Commencer maintenant
                </Link>
              </Button>
              <Button variant="outline" className="border-2 border-hypocrate-blue text-hypocrate-blue hover:bg-blue-50 font-semibold py-5 px-8 rounded-xl transition-all duration-200" asChild>
                <Link to="/nos-medecins">
                  Découvrir l'équipe
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

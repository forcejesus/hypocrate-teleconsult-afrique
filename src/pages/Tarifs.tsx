
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Tarifs = () => {
  const plans = [
    {
      name: "Consultation Standard",
      price: "25€",
      duration: "30 min",
      features: [
        "Consultation vidéo avec médecin",
        "Ordonnance électronique",
        "Résumé de consultation",
        "Support technique"
      ]
    },
    {
      name: "Consultation avec Interprète",
      price: "35€",
      duration: "45 min",
      features: [
        "Consultation vidéo avec médecin",
        "Interprète professionnel",
        "Ordonnance électronique",
        "Résumé de consultation",
        "Support technique prioritaire"
      ],
      popular: true
    },
    {
      name: "Consultation Spécialisée",
      price: "45€",
      duration: "60 min",
      features: [
        "Consultation avec spécialiste",
        "Interprète si nécessaire",
        "Ordonnance électronique",
        "Rapport détaillé",
        "Suivi personnalisé"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-hypocrate-lightBlue to-white py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-hypocrate-blue mb-6">
              Nos Tarifs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des consultations médicales accessibles avec des tarifs transparents
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-hypocrate-blue' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-hypocrate-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Populaire
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-hypocrate-blue mb-2">{plan.price}</div>
                    <p className="text-gray-600">{plan.duration}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-hypocrate-green mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    asChild 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-hypocrate-blue to-hypocrate-green' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                  >
                    <Link to="/register">Choisir ce plan</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tarifs;

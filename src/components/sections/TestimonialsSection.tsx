
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Excellent service ! J'ai pu consulter un médecin rapidement malgré la barrière de la langue. Le traducteur était très professionnel.",
      author: "Aminata S.",
      location: "Dakar, Sénégal",
      rating: 5,
      specialty: "Consultation générale"
    },
    {
      text: "La plateforme est très facile à utiliser et le service de traduction est parfait. J'ai enfin trouvé un spécialiste qui me comprend.",
      author: "Mohamed K.",
      location: "Casablanca, Maroc",
      rating: 5,
      specialty: "Cardiologie"
    },
    {
      text: "Grâce à Hypocrate, j'ai enfin pu avoir accès à un spécialiste de qualité. L'expérience était fluide et rassurante.",
      author: "Sarah M.",
      location: "Abidjan, Côte d'Ivoire",
      rating: 5,
      specialty: "Dermatologie"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-hypocrate-lightBlue to-blue-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ce que disent nos <span className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">patients</span>
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez les témoignages de nos patients satisfaits qui ont bénéficié de nos services de télémédecine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <Quote className="h-10 w-10 text-hypocrate-blue opacity-80" />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-hypocrate-blue text-lg">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {testimonial.specialty}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <p className="text-gray-600 mb-4">Rejoignez plus de 1000 patients satisfaits</p>
            <div className="flex items-center justify-center space-x-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
              <span className="text-gray-700 font-bold ml-2">4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

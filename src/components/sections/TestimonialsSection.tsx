
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Grâce à Hypocrate, j'ai pu consulter un cardiologue français sans avoir à quitter mon domicile au Sénégal. Le service de traduction a rendu l'échange très fluide.",
      name: "Fatou N.",
      location: "Dakar, Sénégal",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5
    },
    {
      quote: "En tant que médecin participant à ce réseau, je trouve ce service incroyable pour apporter une expertise médicale aux patients qui n'y auraient pas accès autrement.",
      name: "Dr. Martin L.",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5
    },
    {
      quote: "L'interprète a parfaitement traduit mes symptômes et les recommandations du médecin. C'est une solution innovante pour nos communautés éloignées.",
      name: "Kofi A.",
      location: "Accra, Ghana",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4
    },
    {
      quote: "Consultation très professionnelle malgré la distance. Le médecin était à l'écoute et le diagnostic précis. Je recommande vivement.",
      name: "Aminata D.",
      location: "Abidjan, Côte d'Ivoire",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.max(0, testimonials.length - 3) ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 1
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ce que disent nos utilisateurs</h2>
          <p className="text-lg text-gray-600">
            Découvrez les témoignages de nos patients et médecins qui utilisent notre plateforme au quotidien.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex space-x-6 overflow-hidden">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-none w-full md:w-1/3 bg-white p-8 rounded-xl shadow-lg border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {testimonials.length > 3 && (
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none">
              <button 
                onClick={prevSlide}
                className="bg-white shadow-lg rounded-full p-3 -ml-4 pointer-events-auto hover:bg-gray-50 transition-all"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="h-6 w-6 text-hypocrate-blue" />
              </button>
              <button 
                onClick={nextSlide}
                className="bg-white shadow-lg rounded-full p-3 -mr-4 pointer-events-auto hover:bg-gray-50 transition-all"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="h-6 w-6 text-hypocrate-blue" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

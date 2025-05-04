
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Grâce à Hypocrate, j'ai pu consulter un cardiologue français sans avoir à quitter mon domicile au Sénégal. Le service de traduction a rendu l'échange très fluide.",
      name: "Fatou N.",
      location: "Dakar, Sénégal",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
    },
    {
      quote: "En tant que médecin participant à ce réseau, je trouve ce service incroyable pour apporter une expertise médicale aux patients qui n'y auraient pas accès autrement.",
      name: "Dr. Martin L.",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    },
    {
      quote: "L'interprète a parfaitement traduit mes symptômes et les recommandations du médecin. C'est une solution innovante pour nos communautés éloignées.",
      name: "Kofi A.",
      location: "Accra, Ghana",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">Ce que disent nos utilisateurs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-hypocrate-gray p-6 rounded-lg shadow-sm animate-fade-in"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="mb-4">
                <svg className="h-6 w-6 text-hypocrate-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

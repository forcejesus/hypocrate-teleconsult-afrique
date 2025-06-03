
import { Quote, Star, MessageSquare, Video, Languages } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Excellent service ! J'ai pu consulter un cardiologue français depuis Dakar. L'interprète était très professionnel et a facilité notre échange.",
      author: "Aminata S.",
      location: "Dakar, Sénégal",
      rating: 5,
      specialty: "Cardiologie",
      type: "patient",
      avatar: "👩🏾‍💼"
    },
    {
      text: "Grâce à Hypocrate, je peux maintenant aider des patients du monde entier. Les interprètes médicaux facilitent vraiment la communication.",
      author: "Dr. Martin L.",
      location: "Lyon, France",
      rating: 5,
      specialty: "Médecine générale",
      type: "medecin",
      avatar: "👨🏻‍⚕️"
    },
    {
      text: "Être interprète médical sur Hypocrate me permet d'avoir un impact social réel. Je facilite l'accès aux soins en connectant patients et médecins.",
      author: "Sarah K.",
      location: "Casablanca, Maroc",
      rating: 5,
      specialty: "Interprète FR-AR",
      type: "interprete",
      avatar: "👩🏽‍💻"
    },
    {
      text: "La plateforme est intuitive et le service de traduction est parfait. J'ai enfin trouvé un dermatologue qui me comprend parfaitement.",
      author: "Jean-Baptiste M.",
      location: "Abidjan, Côte d'Ivoire",
      rating: 5,
      specialty: "Dermatologie",
      type: "patient",
      avatar: "👨🏿‍💼"
    },
    {
      text: "Excellent outil pour élargir ma patientèle. Les consultations sont fluides et les interprètes très compétents dans le vocabulaire médical.",
      author: "Dr. Elena R.",
      location: "Madrid, Espagne",
      rating: 5,
      specialty: "Gynécologie",
      type: "medecin",
      avatar: "👩🏻‍⚕️"
    },
    {
      text: "Interpréter pour Hypocrate est enrichissant. Chaque consultation m'apprend quelque chose et j'aide vraiment à améliorer l'accès aux soins.",
      author: "Mohamed A.",
      location: "Tunis, Tunisie",
      rating: 5,
      specialty: "Interprète FR-AR",
      type: "interprete",
      avatar: "👨🏽‍💻"
    }
  ];

  const getTypeConfig = (type: string) => {
    switch(type) {
      case 'patient':
        return { icon: Video, color: 'from-blue-500 to-blue-600', label: 'Patient' };
      case 'medecin':
        return { icon: MessageSquare, color: 'from-green-500 to-green-600', label: 'Médecin' };
      case 'interprete':
        return { icon: Languages, color: 'from-purple-500 to-purple-600', label: 'Interprète' };
      default:
        return { icon: Star, color: 'from-gray-500 to-gray-600', label: 'Utilisateur' };
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-hypocrate-lightBlue via-blue-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-hypocrate-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-hypocrate-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Témoignages de notre <span className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">communauté</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Découvrez les expériences de nos patients, médecins et interprètes qui utilisent Hypocrate au quotidien.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const typeConfig = getTypeConfig(testimonial.type);
            const TypeIcon = typeConfig.icon;
            
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-transparent relative overflow-hidden group"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${typeConfig.color} opacity-0 group-hover:opacity-3 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <Quote className="h-8 w-8 text-hypocrate-blue/60" />
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic leading-relaxed text-lg font-medium">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-hypocrate-blue text-lg">{testimonial.author}</div>
                        <div className="text-gray-500 text-sm mb-2">{testimonial.location}</div>
                      </div>
                      <div className="text-right">
                        <div className={`bg-gradient-to-r ${typeConfig.color} text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-2 shadow-lg`}>
                          <TypeIcon className="w-3 h-3" />
                          <span>{typeConfig.label}</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{testimonial.specialty}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced satisfaction metrics */}
        <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Satisfaction par profil utilisateur</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Video className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-blue-600">4.9/5</div>
                  <div className="text-gray-600 font-medium">Patients</div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <MessageSquare className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-green-600">4.8/5</div>
                  <div className="text-gray-600 font-medium">Médecins</div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Languages className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-purple-600">4.9/5</div>
                  <div className="text-gray-600 font-medium">Interprètes</div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mt-8 text-lg">
              Rejoignez plus de <span className="font-bold text-hypocrate-blue">5000 utilisateurs satisfaits</span> qui font confiance à Hypocrate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

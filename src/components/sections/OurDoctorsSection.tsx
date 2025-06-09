
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Languages, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const doctors = [
  {
    id: 1,
    name: "Dr. Amina Konaté",
    specialty: "Médecine générale",
    languages: ["Français", "Bambara", "Wolof"],
    rating: 4.9,
    reviews: 127,
    image: "/placeholder.svg",
    country: "🇲🇱",
    experience: "15 ans d'expérience"
  },
  {
    id: 2,
    name: "Dr. Jean-Baptiste Nkomo",
    specialty: "Cardiologie",
    languages: ["Français", "Lingala", "Swahili"],
    rating: 4.8,
    reviews: 89,
    image: "/placeholder.svg",
    country: "🇨🇩",
    experience: "12 ans d'expérience"
  },
  {
    id: 3,
    name: "Dr. Fatou Diallo",
    specialty: "Pédiatrie",
    languages: ["Français", "Pulaar", "Wolof"],
    rating: 4.9,
    reviews: 156,
    image: "/placeholder.svg",
    country: "🇸🇳",
    experience: "10 ans d'expérience"
  },
  {
    id: 4,
    name: "Dr. Mohamed Al-Hassan",
    specialty: "Dermatologie",
    languages: ["Français", "Arabe", "Anglais"],
    rating: 4.7,
    reviews: 93,
    image: "/placeholder.svg",
    country: "🇲🇦",
    experience: "8 ans d'expérience"
  }
];

const OurDoctorsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-hypocrate-blue to-hypocrate-green bg-clip-text text-transparent">
            Nos médecins d'excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe de professionnels de santé qualifiés, multiculturels et multilingues, 
            prêts à vous accompagner dans votre parcours de soins
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-center">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-hypocrate-blue to-hypocrate-green p-0.5">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                    <div className="absolute -top-1 -right-1 text-lg">{doctor.country}</div>
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-hypocrate-blue font-semibold mb-2">{doctor.specialty}</p>
                  <p className="text-sm text-gray-500 mb-3">{doctor.experience}</p>
                  
                  <div className="flex items-center justify-center mb-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-semibold">{doctor.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({doctor.reviews} avis)</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center mb-2">
                      <Languages className="w-4 h-4 text-hypocrate-green mr-1" />
                      <span className="text-sm font-medium text-gray-700">Langues parlées</span>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {doctor.languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs border-hypocrate-green/30 text-hypocrate-green">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 group-hover:scale-105 transition-all duration-200"
                    asChild
                  >
                    <Link to={`/doctor/${doctor.id}`}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Consulter
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-hypocrate-blue text-hypocrate-blue hover:bg-hypocrate-blue hover:text-white transition-all duration-300 px-8 py-3"
            asChild
          >
            <Link to="/nos-medecins">
              Voir tous nos médecins
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-hypocrate-blue to-hypocrate-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence médicale</h3>
            <p className="text-gray-600">Médecins certifiés avec une expertise reconnue dans leurs domaines</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-hypocrate-blue to-hypocrate-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Languages className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Diversité linguistique</h3>
            <p className="text-gray-600">Communication dans plus de 20 langues africaines et européennes</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-hypocrate-blue to-hypocrate-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Disponibilité 24/7</h3>
            <p className="text-gray-600">Consultations disponibles à tout moment selon vos besoins</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurDoctorsSection;

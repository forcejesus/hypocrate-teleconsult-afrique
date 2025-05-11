
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Star,
  Video, 
  MessageSquare,
  ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DoctorTimeSlots } from '@/components/patient/DoctorTimeSlots';

// Données factices des médecins
const doctorsData = [
  {
    id: "1",
    name: "Dr. Sophie Martin",
    specialty: "Médecine générale",
    rating: 4.8,
    reviewsCount: 124,
    location: "Paris, France",
    biography: "Le Dr Sophie Martin est spécialisée en médecine générale avec plus de 15 ans d'expérience. Elle a obtenu son diplôme à l'Université de Paris et se consacre à fournir des soins personnalisés et attentifs à ses patients. Elle s'intéresse particulièrement à la médecine préventive et à l'éducation des patients.",
    price: 45,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Dr. Antoine Dubois",
    specialty: "Dermatologie",
    rating: 4.6,
    reviewsCount: 98,
    location: "Lyon, France",
    biography: "Le Dr Antoine Dubois est dermatologue certifié avec une expertise particulière dans les troubles de la peau et les conditions dermatologiques chroniques. Il est diplômé de l'Université de Lyon et a complété une formation spécialisée en dermatologie esthétique. Il est reconnu pour son approche méticuleuse et son excellente communication avec les patients.",
    price: 65,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Dr. Marie Lambert",
    specialty: "Psychologie",
    rating: 4.9,
    reviewsCount: 157,
    location: "Marseille, France",
    biography: "Le Dr Marie Lambert est psychologue clinicienne avec plus de 20 ans d'expérience. Elle est spécialisée dans la thérapie cognitive comportementale et l'anxiété. Elle a obtenu son doctorat à l'Université d'Aix-Marseille et a contribué à de nombreuses publications sur la santé mentale. Elle est reconnue pour son approche empathique et son soutien bienveillant.",
    price: 70,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "Dr. Jean Dupont",
    specialty: "Cardiologie",
    rating: 4.7,
    reviewsCount: 113,
    location: "Bordeaux, France",
    biography: "Le Dr Jean Dupont est un cardiologue respecté avec une expérience de plus de 25 ans dans le diagnostic et le traitement des maladies cardiaques. Il est diplômé de l'Université de Bordeaux et s'est spécialisé dans les soins préventifs et la gestion des maladies cardiaques chroniques. Il est connu pour son attention aux détails et son approche pédagogique avec ses patients.",
    price: 80,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
  }
];

const DoctorBooking = () => {
  const { doctorId } = useParams<{ doctorId: string }>();
  const [consultationType, setConsultationType] = useState<'video' | 'chat'>('video');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  // Trouver les données du médecin sélectionné
  const doctor = doctorsData.find(doc => doc.id === doctorId);

  // Si le médecin n'existe pas
  if (!doctor) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-50 flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-700">Médecin non trouvé</h2>
            <p className="text-gray-500 mt-2">Le médecin que vous recherchez n'existe pas.</p>
            <Button asChild className="mt-4 bg-hypocrate-blue hover:bg-blue-600">
              <Link to="/patient-dashboard">Retour au tableau de bord</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Affichage de la page de réservation
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button 
              variant="ghost" 
              asChild 
              className="mb-6 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Link to="/patient-dashboard">
                <ChevronLeft size={18} className="mr-1" />
                Retour aux médecins
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profil du médecin */}
            <motion.div 
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden sticky top-24">
                <div className="h-60 relative">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-xl font-bold">{doctor.name}</h2>
                      <p className="text-gray-500">{doctor.specialty}</p>
                    </div>

                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-amber-500 mr-1 fill-current" />
                      <span className="font-medium">{doctor.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">
                        ({doctor.reviewsCount} avis)
                      </span>
                    </div>

                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-hypocrate-blue mr-2" />
                      <span>{doctor.location}</span>
                    </div>

                    <div className="pt-2 border-t border-gray-100 mt-4">
                      <p className="text-lg font-semibold text-hypocrate-blue">
                        {doctor.price}€ <span className="text-gray-500 text-sm font-normal">/ consultation</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Informations du médecin et réservation */}
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-8">
                {/* Biographie */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">À propos du médecin</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {doctor.biography}
                    </p>
                  </CardContent>
                </Card>

                {/* Réservation */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6">Prendre rendez-vous</h3>
                    
                    {/* Type de consultation */}
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-700 mb-3">Type de consultation</h4>
                      <Tabs 
                        defaultValue="video" 
                        value={consultationType}
                        onValueChange={(value) => setConsultationType(value as 'video' | 'chat')}
                        className="w-full"
                      >
                        <TabsList className="grid grid-cols-2 mb-2">
                          <TabsTrigger value="video" className="text-sm md:text-base">
                            <Video className="mr-2 h-4 w-4" />
                            Vidéo
                          </TabsTrigger>
                          <TabsTrigger value="chat" className="text-sm md:text-base">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Chat
                          </TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="video" className="mt-2">
                          <p className="text-sm text-gray-500">
                            Consultation en face-à-face par vidéoconférence sécurisée.
                            Idéal pour discuter de vos symptômes et recevoir un diagnostic.
                          </p>
                        </TabsContent>
                        
                        <TabsContent value="chat" className="mt-2">
                          <p className="text-sm text-gray-500">
                            Consultation par messagerie instantanée sécurisée.
                            Pratique pour des questions rapides ou suivi de traitement.
                          </p>
                        </TabsContent>
                      </Tabs>
                    </div>
                    
                    {/* Calendrier et créneaux horaires */}
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-hypocrate-blue" />
                        Sélectionnez une date et un horaire
                      </h4>
                      
                      <DoctorTimeSlots 
                        doctorId={doctor.id}
                        onDateChange={setSelectedDate}
                        onTimeSlotChange={setSelectedTimeSlot}
                      />
                    </div>
                    
                    {/* Bouton de confirmation */}
                    <div className="mt-8">
                      <Button 
                        className="w-full bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600 py-6 text-lg"
                        disabled={!selectedDate || !selectedTimeSlot}
                      >
                        Confirmer le rendez-vous
                      </Button>
                      
                      {(!selectedDate || !selectedTimeSlot) && (
                        <p className="text-center text-sm text-gray-500 mt-2">
                          Veuillez sélectionner une date et un horaire pour confirmer
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorBooking;

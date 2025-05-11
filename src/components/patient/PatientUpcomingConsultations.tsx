
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Video, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Données factices pour les consultations à venir
const upcomingConsultations = [
  {
    id: 1,
    doctorName: "Dr. Sophie Martin",
    specialty: "Médecine générale",
    date: "2025-05-12",
    time: "14:00",
    type: "video",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    doctorName: "Dr. Antoine Dubois",
    specialty: "Dermatologie",
    date: "2025-05-14",
    time: "10:30",
    type: "chat",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
  }
];

// Fonction pour formater la date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
};

// Fonction pour vérifier si la consultation est pour aujourd'hui
const isToday = (dateString: string) => {
  const today = new Date();
  const date = new Date(dateString);
  return date.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
};

// Fonction pour calculer le nombre de jours jusqu'à la consultation
const daysUntil = (dateString: string) => {
  const today = new Date();
  const date = new Date(dateString);
  const diffTime = date.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export const PatientUpcomingConsultations = () => {
  // Animation variants for the list
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  if (upcomingConsultations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm">
        <Calendar className="w-16 h-16 text-gray-300 mb-4" />
        <h3 className="text-xl font-medium text-gray-700">Aucune consultation à venir</h3>
        <p className="text-gray-500 mt-2 text-center">
          Vous n'avez pas de consultations prévues. Consultez la section "Trouver un médecin" pour prendre rendez-vous.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      variants={listVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {upcomingConsultations.map((consultation) => {
        const days = daysUntil(consultation.date);
        
        return (
          <motion.div key={consultation.id} variants={itemVariants}>
            <Card className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300">
              <div className="relative h-40 bg-gray-100">
                <img 
                  src={consultation.image} 
                  alt={consultation.doctorName} 
                  className="w-full h-full object-cover"
                />
                {isToday(consultation.date) && (
                  <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600">Aujourd'hui</Badge>
                )}
                {!isToday(consultation.date) && days <= 3 && (
                  <Badge className="absolute top-3 right-3 bg-amber-500 hover:bg-amber-600">Dans {days} jour{days > 1 ? 's' : ''}</Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">{consultation.doctorName}</h3>
                    <p className="text-sm text-gray-500">{consultation.specialty}</p>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-hypocrate-blue mr-2" />
                      <span className="text-sm">{formatDate(consultation.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-hypocrate-blue mr-2" />
                      <span className="text-sm">{consultation.time}</span>
                    </div>
                    <div className="flex items-center">
                      {consultation.type === 'video' ? (
                        <Video className="h-4 w-4 text-hypocrate-blue mr-2" />
                      ) : (
                        <MessageSquare className="h-4 w-4 text-hypocrate-blue mr-2" />
                      )}
                      <span className="text-sm">
                        {consultation.type === 'video' ? 'Consultation vidéo' : 'Consultation par chat'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 pt-2">
                    <Button className="flex-1 bg-hypocrate-blue hover:bg-blue-600">
                      {consultation.type === 'video' ? 'Rejoindre' : 'Discuter'}
                    </Button>
                    <Button variant="outline" className="flex-1 border-hypocrate-blue text-hypocrate-blue hover:bg-blue-50">
                      Annuler
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
};


import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Video, MessageSquare, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Données factices pour les consultations en attente
const pendingConsultations = [
  {
    id: 1,
    doctorName: "Dr. Jean Dupont",
    specialty: "Cardiologie",
    date: "2025-05-18",
    time: "11:00",
    type: "video",
    status: "awaiting_confirmation",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    doctorName: "Dr. Marie Lambert",
    specialty: "Psychologie",
    date: "2025-05-20",
    time: "16:45",
    type: "chat",
    status: "awaiting_payment",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070&auto=format&fit=crop"
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

export const PatientPendingConsultations = () => {
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

  if (pendingConsultations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm">
        <AlertCircle className="w-16 h-16 text-gray-300 mb-4" />
        <h3 className="text-xl font-medium text-gray-700">Aucune consultation en attente</h3>
        <p className="text-gray-500 mt-2 text-center">
          Vous n'avez pas de consultations en attente de confirmation ou de paiement.
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
      {pendingConsultations.map((consultation) => (
        <motion.div key={consultation.id} variants={itemVariants}>
          <Card className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300 relative">
            <div className="relative h-40 bg-gray-100">
              <img 
                src={consultation.image} 
                alt={consultation.doctorName} 
                className="w-full h-full object-cover"
              />
              <Badge 
                className={`absolute top-3 right-3 ${
                  consultation.status === 'awaiting_confirmation' 
                    ? 'bg-orange-500 hover:bg-orange-600' 
                    : 'bg-purple-500 hover:bg-purple-600'
                }`}
              >
                {consultation.status === 'awaiting_confirmation' 
                  ? 'En attente de confirmation' 
                  : 'En attente de paiement'}
              </Badge>
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
                
                <div className="pt-2">
                  {consultation.status === 'awaiting_confirmation' ? (
                    <Button className="w-full bg-hypocrate-blue hover:bg-blue-600" disabled>
                      En attente de confirmation du médecin
                    </Button>
                  ) : (
                    <Button className="w-full bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:bg-blue-600">
                      Procéder au paiement
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

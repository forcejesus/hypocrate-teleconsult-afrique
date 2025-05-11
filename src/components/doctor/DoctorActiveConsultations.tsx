
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Video, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from '@/hooks/use-toast';

// Sample data for active consultations
const activeConsultations = [
  {
    id: 'cons-001',
    patientName: 'Sophie Martin',
    patientAvatar: '/placeholder.svg',
    date: '11 Mai 2025',
    time: '14:00',
    duration: '30 min',
    status: 'scheduled',
    interpreterRequired: true,
    interpreterName: 'Ahmed Hassan',
    interpreterLanguage: 'Arabe'
  },
  {
    id: 'cons-002',
    patientName: 'Thomas Bernard',
    patientAvatar: '/placeholder.svg',
    date: '11 Mai 2025',
    time: '15:30',
    duration: '45 min',
    status: 'scheduled',
    interpreterRequired: false
  }
];

const DoctorActiveConsultations: React.FC = () => {
  const startVideoCall = (consultationId: string) => {
    toast({
      title: "Appel vidéo",
      description: "Démarrage de l'appel vidéo en cours..."
    });
    // In a real app, this would redirect to a video call page or open a video call component
  };

  const rescheduleConsultation = (consultationId: string) => {
    toast({
      title: "Reprogrammation",
      description: "Vous pouvez maintenant sélectionner une nouvelle date."
    });
    // In a real app, this would open a date selection dialog
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Consultations actives</h1>
      
      {activeConsultations.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-500">Aucune consultation active pour le moment.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Aujourd'hui section */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
              Aujourd'hui
            </h2>
            
            <div className="space-y-4">
              {activeConsultations.map((consultation, index) => (
                <motion.div 
                  key={consultation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-5"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12 border-2 border-indigo-100">
                        <AvatarImage src={consultation.patientAvatar} alt={consultation.patientName} />
                        <AvatarFallback className="bg-indigo-100 text-indigo-700">
                          {consultation.patientName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-semibold text-gray-800">{consultation.patientName}</h3>
                          {consultation.interpreterRequired && (
                            <Badge variant="outline" className="ml-2 bg-green-50 text-green-600">
                              + Interprète
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1 text-indigo-600" />
                            <span>{consultation.time} ({consultation.duration})</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 md:self-end self-stretch">
                      <Button 
                        variant="outline" 
                        onClick={() => rescheduleConsultation(consultation.id)}
                        className="text-gray-600 border-gray-200 hover:bg-gray-50"
                      >
                        Reprogrammer
                      </Button>
                      <Button 
                        onClick={() => startVideoCall(consultation.id)}
                        className="bg-indigo-600 text-white hover:bg-indigo-700"
                      >
                        <Video className="mr-1 h-4 w-4" /> Démarrer
                      </Button>
                    </div>
                  </div>

                  {consultation.interpreterRequired && (
                    <div className="mt-4 flex items-center p-3 bg-green-50 rounded-md">
                      <User className="w-4 h-4 text-green-600 mr-2" />
                      <div>
                        <span className="text-sm font-medium text-green-700">
                          Interprète: {consultation.interpreterName}
                        </span>
                        <span className="text-xs text-green-600 ml-2">
                          (Langue: {consultation.interpreterLanguage})
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorActiveConsultations;

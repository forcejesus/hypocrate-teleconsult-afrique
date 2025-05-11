
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Languages, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

// Sample data for consultation requests
const consultationRequests = [
  {
    id: 'req-001',
    patientName: 'Sophie Martin',
    patientLanguages: ['Français', 'Anglais'],
    doctorLanguage: 'Français',
    date: '15 Mai 2025',
    time: '14:00',
    duration: '30 min',
    reason: 'Consultation pour douleurs abdominales',
    notes: 'Douleurs persistantes depuis 3 jours, située dans le bas ventre',
    patientAge: 34,
    interpreterRequired: true,
    interpreterLanguage: 'Arabe'
  },
  {
    id: 'req-002',
    patientName: 'Thomas Bernard',
    patientLanguages: ['Français'],
    doctorLanguage: 'Français',
    date: '16 Mai 2025',
    time: '10:30',
    duration: '45 min',
    reason: 'Suivi traitement hypertension',
    notes: 'Apportera les résultats de sa prise de tension des 2 dernières semaines',
    patientAge: 56,
    interpreterRequired: false
  },
  {
    id: 'req-003',
    patientName: 'Emma Johnson',
    patientLanguages: ['Anglais'],
    doctorLanguage: 'Français',
    date: '17 Mai 2025',
    time: '16:15',
    duration: '30 min',
    reason: 'Consultation première visite',
    notes: 'Récemment déménagée en France, cherche un médecin traitant',
    patientAge: 28,
    interpreterRequired: true,
    interpreterLanguage: 'Anglais'
  }
];

const DoctorConsultationRequests: React.FC = () => {
  const [selectedRequest, setSelectedRequest] = useState<typeof consultationRequests[0] | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleAcceptRequest = (id: string) => {
    toast({
      title: "Consultation acceptée",
      description: "La consultation a été ajoutée à votre agenda. Le patient en sera informé."
    });
    // In a real app, we would update the state to remove the accepted request
  };

  const handleDeclineRequest = (id: string) => {
    toast({
      title: "Consultation refusée",
      description: "La demande a été refusée. Le patient en sera informé."
    });
    // In a real app, we would update the state to remove the declined request
  };

  const viewDetails = (request: typeof consultationRequests[0]) => {
    setSelectedRequest(request);
    setOpenDialog(true);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Demandes de consultation</h1>
        <Badge variant="outline" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
          {consultationRequests.length} en attente
        </Badge>
      </div>
      
      {consultationRequests.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-500">Aucune demande de consultation en attente.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {consultationRequests.map((request, index) => (
            <motion.div 
              key={request.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-5"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800">{request.patientName}</h3>
                  
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-indigo-600" />
                      <span>{request.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-indigo-600" />
                      <span>{request.time} ({request.duration})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Languages className="w-4 h-4 mr-1 text-indigo-600" />
                    <span>
                      {request.patientLanguages.join(', ')}
                      {request.interpreterRequired && (
                        <Badge variant="outline" className="ml-2 bg-green-50 text-green-600 hover:bg-green-100">
                          + Interprète {request.interpreterLanguage}
                        </Badge>
                      )}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 md:self-end self-stretch">
                  <Button 
                    variant="outline" 
                    onClick={() => viewDetails(request)}
                    className="text-indigo-600 border-indigo-200 hover:bg-indigo-50"
                  >
                    Détails
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleDeclineRequest(request.id)}
                    className="text-red-600 border-red-200 hover:bg-red-50"
                  >
                    Refuser
                  </Button>
                  <Button 
                    onClick={() => handleAcceptRequest(request.id)}
                    className="bg-indigo-600 text-white hover:bg-indigo-700"
                  >
                    Accepter
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Details Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Détails de la consultation</DialogTitle>
            <DialogDescription>
              Informations complètes sur la demande
            </DialogDescription>
          </DialogHeader>
          
          {selectedRequest && (
            <div className="space-y-4 mt-2">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-indigo-600" />
                <div>
                  <h3 className="font-semibold">{selectedRequest.patientName}</h3>
                  <p className="text-sm text-gray-500">{selectedRequest.patientAge} ans</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-1">Motif de consultation</h4>
                <p className="text-sm p-2 bg-gray-50 rounded">{selectedRequest.reason}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-1">Notes</h4>
                <p className="text-sm p-2 bg-gray-50 rounded">{selectedRequest.notes}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h4 className="text-xs font-semibold text-gray-500">Date</h4>
                  <p className="text-sm">{selectedRequest.date}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-500">Heure</h4>
                  <p className="text-sm">{selectedRequest.time}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-500">Durée</h4>
                  <p className="text-sm">{selectedRequest.duration}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-500">Langue(s)</h4>
                  <p className="text-sm">{selectedRequest.patientLanguages.join(', ')}</p>
                </div>
              </div>
              
              {selectedRequest.interpreterRequired && (
                <div className="bg-green-50 p-3 rounded-md">
                  <p className="text-sm font-medium text-green-700">
                    Interprète requis: {selectedRequest.interpreterLanguage}
                  </p>
                  <p className="text-xs text-green-600">
                    Un interprète sera présent pour faciliter la communication.
                  </p>
                </div>
              )}
              
              <div className="flex justify-end space-x-2 pt-3">
                <Button 
                  variant="outline" 
                  onClick={() => handleDeclineRequest(selectedRequest.id)}
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  Refuser
                </Button>
                <Button 
                  onClick={() => {
                    handleAcceptRequest(selectedRequest.id);
                    setOpenDialog(false);
                  }}
                  className="bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Accepter
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DoctorConsultationRequests;

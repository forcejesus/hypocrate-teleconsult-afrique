
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, FilePen, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

// Sample data for consultation history
const historyData = [
  {
    id: 'hist-001',
    patientName: 'Sophie Martin',
    patientAvatar: '/placeholder.svg',
    date: '03 Mai 2025',
    time: '14:00',
    duration: '30 min',
    notes: 'Douleurs abdominales. Prescription d\'antispasmodiques et conseils diététiques.',
    prescription: '',
    price: 45,
    interpreterRequired: true,
    interpreterName: 'Ahmed Hassan',
    interpreterLanguage: 'Arabe'
  },
  {
    id: 'hist-002',
    patientName: 'Thomas Bernard',
    patientAvatar: '/placeholder.svg',
    date: '28 Avril 2025',
    time: '10:30',
    duration: '45 min',
    notes: 'Suivi hypertension. Tension artérielle: 135/85. Maintien du traitement actuel.',
    prescription: 'Amlodipine 5mg, 1cp par jour pendant 3 mois.',
    price: 60,
    interpreterRequired: false
  },
  {
    id: 'hist-003',
    patientName: 'Emma Johnson',
    patientAvatar: '/placeholder.svg',
    date: '25 Avril 2025',
    time: '16:15',
    duration: '30 min',
    notes: 'Première visite. Établissement dossier médical. Pas de pathologies particulières.',
    prescription: '',
    price: 45,
    interpreterRequired: true,
    interpreterName: 'Liu Wei',
    interpreterLanguage: 'Anglais'
  }
];

const DoctorHistory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConsultation, setSelectedConsultation] = useState<typeof historyData[0] | null>(null);
  const [openPrescriptionDialog, setOpenPrescriptionDialog] = useState(false);
  const [prescriptionText, setPrescriptionText] = useState('');

  const filteredHistory = historyData.filter(
    item => item.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreatePrescription = (consultation: typeof historyData[0]) => {
    setSelectedConsultation(consultation);
    setPrescriptionText(consultation.prescription);
    setOpenPrescriptionDialog(true);
  };

  const savePrescription = () => {
    toast({
      title: "Ordonnance enregistrée",
      description: "L'ordonnance a été enregistrée et sera accessible au patient."
    });
    setOpenPrescriptionDialog(false);
    // In a real app, we would update the state with the new prescription
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Historique des consultations</h1>
        
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            className="pl-8"
            placeholder="Rechercher un patient..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {filteredHistory.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-500">Aucune consultation trouvée.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredHistory.map((consultation, index) => (
            <motion.div 
              key={consultation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-5"
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
                    
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-indigo-600" />
                        <span>{consultation.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-indigo-600" />
                        <span>{consultation.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 md:self-end self-stretch">
                  <Badge variant="outline" className="bg-indigo-50 text-indigo-700">
                    {consultation.price}€
                  </Badge>
                  <Button 
                    variant="outline" 
                    onClick={() => handleCreatePrescription(consultation)}
                    className="flex items-center gap-1 text-indigo-600 border-indigo-200 hover:bg-indigo-50"
                  >
                    <FilePen className="h-4 w-4" />
                    {consultation.prescription ? 'Modifier ordonnance' : 'Créer ordonnance'}
                  </Button>
                </div>
              </div>
              
              {/* Notes section */}
              <div className="mt-4 p-3 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Notes:</span> {consultation.notes}
                </p>
              </div>
              
              {/* Display prescription if it exists */}
              {consultation.prescription && (
                <div className="mt-2 p-3 bg-indigo-50 rounded-md">
                  <p className="text-sm text-indigo-700">
                    <span className="font-medium">Ordonnance:</span> {consultation.prescription}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Prescription Dialog */}
      <Dialog open={openPrescriptionDialog} onOpenChange={setOpenPrescriptionDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Rédiger une ordonnance</DialogTitle>
            <DialogDescription>
              {selectedConsultation && (
                <span>
                  Pour {selectedConsultation.patientName} - consultation du {selectedConsultation.date}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 my-3">
            <Textarea 
              placeholder="Saisissez l'ordonnance ici..."
              className="min-h-[200px]"
              value={prescriptionText}
              onChange={(e) => setPrescriptionText(e.target.value)}
            />
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenPrescriptionDialog(false)}>
              Annuler
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700" onClick={savePrescription}>
              Enregistrer l'ordonnance
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DoctorHistory;

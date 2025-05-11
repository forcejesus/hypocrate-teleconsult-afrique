
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';

// Exemple de données de consultations disponibles
const availableConsultations = [
  { 
    id: '1',
    doctorName: 'Dr. Martin Dupont',
    patientLanguages: ['Français', 'Lingala'],
    doctorLanguages: ['Français', 'Anglais'],
    date: '2025-05-20',
    time: '10:30',
    duration: '30 min',
    details: 'Consultation pour un problème cardiaque. Le patient parle principalement Lingala et a des notions de français. Un interprète est nécessaire pour faciliter la communication.',
    patientName: 'Jean Mbombo'
  },
  { 
    id: '2',
    doctorName: 'Dr. Sarah Johnson',
    patientLanguages: ['Portugais', 'Kituba'],
    doctorLanguages: ['Anglais', 'Français'],
    date: '2025-05-21',
    time: '14:15',
    duration: '45 min',
    details: 'Suivi médical pour diabète de type 2. Le patient parle Portugais et Kituba. Le médecin ne maîtrise pas ces langues et a besoin d\'un interprète.',
    patientName: 'Ana Silva'
  },
  { 
    id: '3',
    doctorName: 'Dr. Philippe Nguyen',
    patientLanguages: ['Kigongo', 'Espagnol'],
    doctorLanguages: ['Français', 'Anglais'],
    date: '2025-05-22',
    time: '09:00',
    duration: '60 min',
    details: 'Première consultation avec un nouveau patient. Communication difficile au téléphone, un interprète est demandé pour faciliter la prise en charge.',
    patientName: 'Eduardo Gomez'
  }
];

export const InterpreterAvailableConsultations: React.FC = () => {
  const [selectedConsultation, setSelectedConsultation] = useState<typeof availableConsultations[0] | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const { toast } = useToast();

  const handleAccept = (consultationId: string) => {
    toast({
      title: "Consultation acceptée",
      description: `Vous avez accepté d'être interprète pour la consultation #${consultationId}`,
    });
  };

  const showDetails = (consultation: typeof availableConsultations[0]) => {
    setSelectedConsultation(consultation);
    setIsDetailOpen(true);
  };

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4">Consultations nécessitant un interprète</h2>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Médecin</TableHead>
              <TableHead>Langues requises</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Heure</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {availableConsultations.map((consultation) => (
              <TableRow key={consultation.id}>
                <TableCell className="font-medium">{consultation.doctorName}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-sm">Patient: {consultation.patientLanguages.join(', ')}</span>
                    <span className="text-sm">Médecin: {consultation.doctorLanguages.join(', ')}</span>
                  </div>
                </TableCell>
                <TableCell>{new Date(consultation.date).toLocaleDateString()}</TableCell>
                <TableCell>{consultation.time}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => showDetails(consultation)}
                    >
                      Détails
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleAccept(consultation.id)}
                    >
                      Accepter
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Dialog pour afficher les détails */}
      {selectedConsultation && (
        <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Détails de la consultation</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Médecin</p>
                  <p className="text-sm">{selectedConsultation.doctorName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Patient</p>
                  <p className="text-sm">{selectedConsultation.patientName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Date</p>
                  <p className="text-sm">{new Date(selectedConsultation.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Heure</p>
                  <p className="text-sm">{selectedConsultation.time}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Durée</p>
                  <p className="text-sm">{selectedConsultation.duration}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium">Langues du patient</p>
                <p className="text-sm">{selectedConsultation.patientLanguages.join(', ')}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium">Langues du médecin</p>
                <p className="text-sm">{selectedConsultation.doctorLanguages.join(', ')}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium">Notes</p>
                <p className="text-sm">{selectedConsultation.details}</p>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDetailOpen(false)}>Fermer</Button>
              <Button onClick={() => {
                handleAccept(selectedConsultation.id);
                setIsDetailOpen(false);
              }}>Accepter cette consultation</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default InterpreterAvailableConsultations;

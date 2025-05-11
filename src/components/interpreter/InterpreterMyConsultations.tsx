
import React from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

// Exemple de données pour les consultations de l'interprète
const myConsultations = [
  { 
    id: '1',
    doctorName: 'Dr. Martin Dupont',
    patientName: 'Jean Mbombo',
    date: '2025-05-20',
    time: '10:30',
    duration: '30 min',
    languages: ['Français', 'Lingala'],
    status: 'Confirmée'
  },
  { 
    id: '2',
    doctorName: 'Dr. Philippe Nguyen',
    patientName: 'Eduardo Gomez',
    date: '2025-05-22',
    time: '09:00',
    duration: '60 min',
    languages: ['Espagnol', 'Français'],
    status: 'En attente'
  }
];

export const InterpreterMyConsultations: React.FC = () => {
  const handleJoinMeeting = (consultationId: string) => {
    console.log(`Rejoindre la consultation #${consultationId}`);
    // Logique pour rejoindre une consultation
  };

  const handleCancelInterpreting = (consultationId: string) => {
    console.log(`Annuler l'interprétation pour la consultation #${consultationId}`);
    // Logique pour annuler une interprétation
  };

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4">Mes consultations programmées</h2>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Médecin</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Heure</TableHead>
              <TableHead>Langues</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {myConsultations.map((consultation) => (
              <TableRow key={consultation.id}>
                <TableCell className="font-medium">{consultation.doctorName}</TableCell>
                <TableCell>{consultation.patientName}</TableCell>
                <TableCell>{new Date(consultation.date).toLocaleDateString()}</TableCell>
                <TableCell>{consultation.time}</TableCell>
                <TableCell>{consultation.languages.join(', ')}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    consultation.status === 'Confirmée' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {consultation.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm"
                      variant={consultation.status === 'Confirmée' ? 'default' : 'outline'}
                      onClick={() => handleJoinMeeting(consultation.id)}
                      disabled={consultation.status !== 'Confirmée'}
                    >
                      Rejoindre
                    </Button>
                    <Button 
                      size="sm" 
                      variant="destructive"
                      onClick={() => handleCancelInterpreting(consultation.id)}
                    >
                      Annuler
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {myConsultations.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-4">
                  Vous n'avez pas encore de consultations programmées.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InterpreterMyConsultations;


import React from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { DollarSign } from 'lucide-react';

// Exemple de données pour l'historique des consultations
const historyConsultations = [
  { 
    id: '1',
    doctorName: 'Dr. Alice Martin',
    patientName: 'Robert Nkosi',
    date: '2025-05-01',
    time: '09:30',
    duration: '45 min',
    languages: ['Français', 'Kigongo'],
    price: 35.00
  },
  { 
    id: '2',
    doctorName: 'Dr. Jean Dupont',
    patientName: 'Maria Santos',
    date: '2025-04-28',
    time: '14:00',
    duration: '30 min',
    languages: ['Français', 'Portugais'],
    price: 25.00
  },
  { 
    id: '3',
    doctorName: 'Dr. Michel Legrand',
    patientName: 'Ahmed Keita',
    date: '2025-04-25',
    time: '11:15',
    duration: '60 min',
    languages: ['Français', 'Lingala'],
    price: 45.00
  }
];

export const InterpreterHistory: React.FC = () => {
  // Calcul du revenu total
  const totalEarnings = historyConsultations.reduce((sum, consultation) => sum + consultation.price, 0);
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Historique des consultations</h2>
        <div className="bg-gray-100 p-3 rounded-md flex items-center">
          <DollarSign className="mr-2 text-green-600" size={20} />
          <div>
            <p className="text-sm text-gray-600">Revenu total</p>
            <p className="font-semibold">{totalEarnings.toFixed(2)} €</p>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Médecin</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Durée</TableHead>
              <TableHead>Langues</TableHead>
              <TableHead>Rémunération</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {historyConsultations.map((consultation) => (
              <TableRow key={consultation.id}>
                <TableCell className="font-medium">{consultation.doctorName}</TableCell>
                <TableCell>{consultation.patientName}</TableCell>
                <TableCell>{new Date(consultation.date).toLocaleDateString()} à {consultation.time}</TableCell>
                <TableCell>{consultation.duration}</TableCell>
                <TableCell>{consultation.languages.join(' → ')}</TableCell>
                <TableCell className="font-semibold text-green-600">{consultation.price.toFixed(2)} €</TableCell>
              </TableRow>
            ))}
            {historyConsultations.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4">
                  Aucun historique de consultation disponible.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InterpreterHistory;

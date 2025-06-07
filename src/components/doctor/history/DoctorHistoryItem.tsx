
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Eye, FilePen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export interface ConsultationData {
  id: string;
  patientName: string;
  patientAvatar: string;
  date: string;
  time: string;
  duration: string;
  notes: string;
  prescription: string;
  price: number;
  interpreterRequired: boolean;
  interpreterName?: string;
  interpreterLanguage?: string;
  status: string;
}

interface DoctorHistoryItemProps {
  consultation: ConsultationData;
  index: number;
  onViewDetails: (consultation: ConsultationData) => void;
  onCreatePrescription: (consultation: ConsultationData) => void;
}

const DoctorHistoryItem: React.FC<DoctorHistoryItemProps> = ({
  consultation,
  index,
  onViewDetails,
  onCreatePrescription
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12 border-2 border-indigo-100">
            <AvatarImage src={consultation.patientAvatar} alt={consultation.patientName} />
            <AvatarFallback className="bg-indigo-100 text-indigo-700">
              {consultation.patientName.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-gray-900">{consultation.patientName}</h3>
              <Badge variant="outline" className="bg-green-50 text-green-700">
                {consultation.status}
              </Badge>
              {consultation.interpreterRequired && (
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  + Interprète
                </Badge>
              )}
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-indigo-600" />
                <span>{consultation.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-indigo-600" />
                <span>{consultation.time} ({consultation.duration})</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-indigo-50 text-indigo-700">
            {consultation.price}€
          </Badge>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onViewDetails(consultation)}
            className="text-gray-600 border-gray-200 hover:bg-gray-50"
          >
            <Eye className="h-4 w-4 mr-1" />
            Voir
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onCreatePrescription(consultation)}
            className="text-indigo-600 border-indigo-200 hover:bg-indigo-50"
          >
            <FilePen className="h-4 w-4 mr-1" />
            {consultation.prescription ? 'Modifier' : 'Créer'}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorHistoryItem;

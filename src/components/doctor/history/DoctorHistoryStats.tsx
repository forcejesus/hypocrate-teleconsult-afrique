
import React from 'react';
import { User, Clock, FilePen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface DoctorHistoryStatsProps {
  totalConsultations: number;
  totalRevenue: number;
  consultationsWithInterpreter: number;
}

const DoctorHistoryStats: React.FC<DoctorHistoryStatsProps> = ({
  totalConsultations,
  totalRevenue,
  consultationsWithInterpreter
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5 text-indigo-600" />
            <div>
              <p className="text-sm text-gray-600">Total consultations</p>
              <p className="text-2xl font-bold text-gray-900">{totalConsultations}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-green-600" />
            <div>
              <p className="text-sm text-gray-600">Revenus totaux</p>
              <p className="text-2xl font-bold text-gray-900">{totalRevenue}€</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <FilePen className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Avec interprète</p>
              <p className="text-2xl font-bold text-gray-900">{consultationsWithInterpreter}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorHistoryStats;

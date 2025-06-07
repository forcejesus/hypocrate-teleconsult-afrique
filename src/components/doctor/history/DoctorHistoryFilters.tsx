
import React from 'react';
import { Search, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DoctorHistoryFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  filterPeriod: string;
  setFilterPeriod: (value: string) => void;
  filterStatus: string;
  setFilterStatus: (value: string) => void;
  onExport: () => void;
}

const DoctorHistoryFilters: React.FC<DoctorHistoryFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  filterPeriod,
  setFilterPeriod,
  filterStatus,
  setFilterStatus,
  onExport
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          className="pl-10"
          placeholder="Rechercher un patient..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <Select value={filterPeriod} onValueChange={setFilterPeriod}>
        <SelectTrigger className="w-full md:w-48">
          <SelectValue placeholder="Période" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Toutes les périodes</SelectItem>
          <SelectItem value="week">Cette semaine</SelectItem>
          <SelectItem value="month">Ce mois</SelectItem>
          <SelectItem value="quarter">Ce trimestre</SelectItem>
        </SelectContent>
      </Select>
      
      <Select value={filterStatus} onValueChange={setFilterStatus}>
        <SelectTrigger className="w-full md:w-48">
          <SelectValue placeholder="Statut" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tous les statuts</SelectItem>
          <SelectItem value="Complétée">Complétées</SelectItem>
          <SelectItem value="Annulée">Annulées</SelectItem>
        </SelectContent>
      </Select>

      <Button onClick={onExport} variant="outline" size="sm">
        <Download className="h-4 w-4 mr-2" />
        Exporter
      </Button>
    </div>
  );
};

export default DoctorHistoryFilters;

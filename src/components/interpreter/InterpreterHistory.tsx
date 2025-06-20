
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, User, Search, Download, Eye, DollarSign, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

// Sample data for interpreter consultation history
const interpreterHistoryData = [
  { 
    id: '1',
    doctorName: 'Dr. Alice Martin',
    doctorAvatar: '/placeholder.svg',
    patientName: 'Robert Nkosi',
    patientAvatar: '/placeholder.svg',
    date: '2025-05-01',
    time: '09:30',
    duration: '45 min',
    languageFrom: 'Français',
    languageTo: 'Kigongo',
    price: 35.00,
    status: 'Complétée',
    specialty: 'Médecine générale',
    notes: 'Traduction de consultation de routine. Patient satisfait du service.'
  },
  { 
    id: '2',
    doctorName: 'Dr. Jean Dupont',
    doctorAvatar: '/placeholder.svg',
    patientName: 'Maria Santos',
    patientAvatar: '/placeholder.svg',
    date: '2025-04-28',
    time: '14:00',
    duration: '30 min',
    languageFrom: 'Français',
    languageTo: 'Portugais',
    price: 25.00,
    status: 'Complétée',
    specialty: 'Cardiologie',
    notes: 'Consultation de suivi cardiologique. Traduction précise des termes médicaux.'
  },
  { 
    id: '3',
    doctorName: 'Dr. Michel Legrand',
    doctorAvatar: '/placeholder.svg',
    patientName: 'Ahmed Keita',
    patientAvatar: '/placeholder.svg',
    date: '2025-04-25',
    time: '11:15',
    duration: '60 min',
    languageFrom: 'Français',
    languageTo: 'Lingala',
    price: 45.00,
    status: 'Complétée',
    specialty: 'Dermatologie',
    notes: 'Première consultation dermatologique. Explications détaillées fournies.'
  }
];

const InterpreterHistory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConsultation, setSelectedConsultation] = useState<typeof interpreterHistoryData[0] | null>(null);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [filterPeriod, setFilterPeriod] = useState('all');
  const [filterLanguage, setFilterLanguage] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredHistory = interpreterHistoryData.filter(item => {
    const matchesSearch = item.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.languageTo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLanguage = filterLanguage === 'all' || item.languageTo === filterLanguage;
    return matchesSearch && matchesLanguage;
  });

  const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedHistory = filteredHistory.slice(startIndex, startIndex + itemsPerPage);

  const handleViewDetails = (consultation: typeof interpreterHistoryData[0]) => {
    setSelectedConsultation(consultation);
    setOpenDetailsDialog(true);
  };

  const exportHistory = () => {
    console.log('Exporting interpreter history...');
  };

  const totalEarnings = filteredHistory.reduce((sum, consultation) => sum + consultation.price, 0);
  const totalHours = filteredHistory.reduce((sum, consultation) => {
    const duration = parseInt(consultation.duration);
    return sum + (isNaN(duration) ? 0 : duration);
  }, 0);

  const uniqueLanguages = [...new Set(filteredHistory.map(item => item.languageTo))];

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-teal-600" />
              <div>
                <p className="text-sm text-gray-600">Total consultations</p>
                <p className="text-2xl font-bold text-gray-900">{filteredHistory.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Revenus totaux</p>
                <p className="text-2xl font-bold text-gray-900">{totalEarnings.toFixed(2)}€</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Heures travaillées</p>
                <p className="text-2xl font-bold text-gray-900">{Math.round(totalHours / 60)}h</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Languages className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Langues pratiquées</p>
                <p className="text-2xl font-bold text-gray-900">{uniqueLanguages.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Historique des consultations</span>
            <Button onClick={exportHistory} variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                className="pl-10"
                placeholder="Rechercher par médecin, patient ou langue..."
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
            
            <Select value={filterLanguage} onValueChange={setFilterLanguage}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Langue" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les langues</SelectItem>
                {uniqueLanguages.map(lang => (
                  <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Consultations List */}
          {paginatedHistory.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Aucune consultation trouvée</p>
            </div>
          ) : (
            <div className="space-y-4">
              {paginatedHistory.map((consultation, index) => (
                <motion.div 
                  key={consultation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex -space-x-2">
                        <Avatar className="h-10 w-10 border-2 border-white">
                          <AvatarImage src={consultation.doctorAvatar} alt={consultation.doctorName} />
                          <AvatarFallback className="bg-teal-100 text-teal-700 text-xs">
                            {consultation.doctorName.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <Avatar className="h-10 w-10 border-2 border-white">
                          <AvatarImage src={consultation.patientAvatar} alt={consultation.patientName} />
                          <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                            {consultation.patientName.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900">
                            {consultation.doctorName} ↔ {consultation.patientName}
                          </h3>
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            {consultation.status}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1 text-teal-600" />
                            <span>{new Date(consultation.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1 text-teal-600" />
                            <span>{consultation.time} ({consultation.duration})</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-teal-50 text-teal-700">
                            {consultation.languageFrom} → {consultation.languageTo}
                          </Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700">
                            {consultation.specialty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        {consultation.price.toFixed(2)}€
                      </Badge>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewDetails(consultation)}
                        className="text-teal-600 border-teal-200 hover:bg-teal-50"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Détails
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-6">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                      className={currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(page);
                        }}
                        isActive={currentPage === page}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                      }}
                      className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Details Dialog */}
      <Dialog open={openDetailsDialog} onOpenChange={setOpenDetailsDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Détails de la consultation</DialogTitle>
            <DialogDescription>
              {selectedConsultation && (
                <span>
                  {new Date(selectedConsultation.date).toLocaleDateString()} à {selectedConsultation.time}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
          
          {selectedConsultation && (
            <div className="space-y-4 my-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-medium text-sm">Médecin:</label>
                  <p className="text-sm text-gray-600 mt-1">{selectedConsultation.doctorName}</p>
                </div>
                <div>
                  <label className="font-medium text-sm">Patient:</label>
                  <p className="text-sm text-gray-600 mt-1">{selectedConsultation.patientName}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-medium text-sm">Langue source:</label>
                  <p className="text-sm text-gray-600 mt-1">{selectedConsultation.languageFrom}</p>
                </div>
                <div>
                  <label className="font-medium text-sm">Langue cible:</label>
                  <p className="text-sm text-gray-600 mt-1">{selectedConsultation.languageTo}</p>
                </div>
              </div>
              
              <div>
                <label className="font-medium text-sm">Spécialité:</label>
                <p className="text-sm text-gray-600 mt-1">{selectedConsultation.specialty}</p>
              </div>
              
              <div>
                <label className="font-medium text-sm">Durée:</label>
                <p className="text-sm text-gray-600 mt-1">{selectedConsultation.duration}</p>
              </div>
              
              <div>
                <label className="font-medium text-sm">Rémunération:</label>
                <p className="text-sm text-gray-600 mt-1 font-semibold text-green-600">
                  {selectedConsultation.price.toFixed(2)}€
                </p>
              </div>
              
              {selectedConsultation.notes && (
                <div>
                  <label className="font-medium text-sm">Notes:</label>
                  <p className="text-sm text-gray-600 mt-1 p-3 bg-gray-50 rounded-md">
                    {selectedConsultation.notes}
                  </p>
                </div>
              )}
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenDetailsDialog(false)}>
              Fermer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InterpreterHistory;

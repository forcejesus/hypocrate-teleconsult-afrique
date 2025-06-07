
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, FileText, User, Search, Download, Eye, Star } from 'lucide-react';
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

// Sample data for patient consultation history
const patientHistoryData = [
  {
    id: 'hist-001',
    doctorName: 'Dr. Alice Martin',
    doctorAvatar: '/placeholder.svg',
    specialty: 'Médecine générale',
    date: '03 Mai 2025',
    time: '14:00',
    duration: '30 min',
    diagnosis: 'Douleurs abdominales',
    prescription: 'Antispasmodiques 3x/jour pendant 7 jours',
    notes: 'Conseils diététiques donnés. Revoir dans 2 semaines si persistance.',
    price: 45,
    interpreterRequired: true,
    interpreterName: 'Ahmed Hassan',
    interpreterLanguage: 'Arabe',
    status: 'Complétée',
    rating: 5
  },
  {
    id: 'hist-002',
    doctorName: 'Dr. Jean Dupont',
    doctorAvatar: '/placeholder.svg',
    specialty: 'Cardiologie',
    date: '28 Avril 2025',
    time: '10:30',
    duration: '45 min',
    diagnosis: 'Suivi hypertension',
    prescription: 'Amlodipine 5mg, 1cp par jour pendant 3 mois',
    notes: 'Tension artérielle: 135/85. Maintien du traitement actuel.',
    price: 60,
    interpreterRequired: false,
    status: 'Complétée',
    rating: 4
  },
  {
    id: 'hist-003',
    doctorName: 'Dr. Sarah Wilson',
    doctorAvatar: '/placeholder.svg',
    specialty: 'Médecine générale',
    date: '25 Avril 2025',
    time: '16:15',
    duration: '30 min',
    diagnosis: 'Consultation de routine',
    prescription: '',
    notes: 'Bilan de santé général. Tout va bien.',
    price: 45,
    interpreterRequired: true,
    interpreterName: 'Liu Wei',
    interpreterLanguage: 'Anglais',
    status: 'Complétée',
    rating: 5
  }
];

const PatientHistory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConsultation, setSelectedConsultation] = useState<typeof patientHistoryData[0] | null>(null);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [filterPeriod, setFilterPeriod] = useState('all');
  const [filterSpecialty, setFilterSpecialty] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredHistory = patientHistoryData.filter(item => {
    const matchesSearch = item.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.diagnosis.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = filterSpecialty === 'all' || item.specialty === filterSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedHistory = filteredHistory.slice(startIndex, startIndex + itemsPerPage);

  const handleViewDetails = (consultation: typeof patientHistoryData[0]) => {
    setSelectedConsultation(consultation);
    setOpenDetailsDialog(true);
  };

  const exportHistory = () => {
    // Export functionality would be implemented here
    console.log('Exporting patient history...');
  };

  const totalSpent = filteredHistory.reduce((sum, consultation) => sum + consultation.price, 0);
  const averageRating = filteredHistory.reduce((sum, consultation) => sum + (consultation.rating || 0), 0) / filteredHistory.length;

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-blue-600" />
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
              <Clock className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Total dépensé</p>
                <p className="text-2xl font-bold text-gray-900">{totalSpent}€</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="text-sm text-gray-600">Note moyenne</p>
                <div className="flex items-center">
                  <p className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</p>
                  <div className="flex ml-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= averageRating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Historique de mes consultations</span>
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
                placeholder="Rechercher par médecin ou diagnostic..."
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
            
            <Select value={filterSpecialty} onValueChange={setFilterSpecialty}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Spécialité" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les spécialités</SelectItem>
                <SelectItem value="Médecine générale">Médecine générale</SelectItem>
                <SelectItem value="Cardiologie">Cardiologie</SelectItem>
                <SelectItem value="Dermatologie">Dermatologie</SelectItem>
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
                      <Avatar className="h-12 w-12 border-2 border-blue-100">
                        <AvatarImage src={consultation.doctorAvatar} alt={consultation.doctorName} />
                        <AvatarFallback className="bg-blue-100 text-blue-700">
                          {consultation.doctorName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{consultation.doctorName}</h3>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700">
                            {consultation.specialty}
                          </Badge>
                          {consultation.interpreterRequired && (
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              + Interprète
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1 text-blue-600" />
                            <span>{consultation.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1 text-blue-600" />
                            <span>{consultation.time} ({consultation.duration})</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-700 font-medium">
                          Diagnostic: {consultation.diagnosis}
                        </p>
                        
                        {consultation.rating && (
                          <div className="flex items-center mt-1">
                            <span className="text-sm text-gray-600 mr-2">Votre note:</span>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-4 w-4 ${
                                    star <= consultation.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        {consultation.price}€
                      </Badge>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewDetails(consultation)}
                        className="text-blue-600 border-blue-200 hover:bg-blue-50"
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
                  {selectedConsultation.doctorName} - {selectedConsultation.date} à {selectedConsultation.time}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
          
          {selectedConsultation && (
            <div className="space-y-4 my-3">
              <div>
                <label className="font-medium text-sm">Diagnostic:</label>
                <p className="text-sm text-gray-600 mt-1 p-3 bg-gray-50 rounded-md">
                  {selectedConsultation.diagnosis}
                </p>
              </div>
              
              <div>
                <label className="font-medium text-sm">Notes du médecin:</label>
                <p className="text-sm text-gray-600 mt-1 p-3 bg-gray-50 rounded-md">
                  {selectedConsultation.notes}
                </p>
              </div>
              
              {selectedConsultation.prescription && (
                <div>
                  <label className="font-medium text-sm">Ordonnance:</label>
                  <p className="text-sm text-gray-600 mt-1 p-3 bg-blue-50 rounded-md">
                    {selectedConsultation.prescription}
                  </p>
                </div>
              )}
              
              {selectedConsultation.interpreterRequired && (
                <div>
                  <label className="font-medium text-sm">Interprète:</label>
                  <p className="text-sm text-gray-600 mt-1">
                    {selectedConsultation.interpreterName} - {selectedConsultation.interpreterLanguage}
                  </p>
                </div>
              )}
              
              <div>
                <label className="font-medium text-sm">Spécialité:</label>
                <p className="text-sm text-gray-600 mt-1">{selectedConsultation.specialty}</p>
              </div>
              
              <div>
                <label className="font-medium text-sm">Coût:</label>
                <p className="text-sm text-gray-600 mt-1">{selectedConsultation.price}€</p>
              </div>
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

export default PatientHistory;

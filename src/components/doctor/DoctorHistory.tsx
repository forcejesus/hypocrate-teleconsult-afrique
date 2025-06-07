
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, FilePen, User, Search, Filter, Download, Eye } from 'lucide-react';
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
    prescription: 'Antispasmodiques 3x/jour pendant 7 jours',
    price: 45,
    interpreterRequired: true,
    interpreterName: 'Ahmed Hassan',
    interpreterLanguage: 'Arabe',
    status: 'Complétée'
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
    interpreterRequired: false,
    status: 'Complétée'
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
    interpreterLanguage: 'Anglais',
    status: 'Complétée'
  }
];

const DoctorHistory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConsultation, setSelectedConsultation] = useState<typeof historyData[0] | null>(null);
  const [openPrescriptionDialog, setOpenPrescriptionDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [prescriptionText, setPrescriptionText] = useState('');
  const [filterPeriod, setFilterPeriod] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredHistory = historyData.filter(item => {
    const matchesSearch = item.patientName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedHistory = filteredHistory.slice(startIndex, startIndex + itemsPerPage);

  const handleCreatePrescription = (consultation: typeof historyData[0]) => {
    setSelectedConsultation(consultation);
    setPrescriptionText(consultation.prescription);
    setOpenPrescriptionDialog(true);
  };

  const handleViewDetails = (consultation: typeof historyData[0]) => {
    setSelectedConsultation(consultation);
    setOpenDetailsDialog(true);
  };

  const savePrescription = () => {
    toast({
      title: "Ordonnance enregistrée",
      description: "L'ordonnance a été enregistrée et sera accessible au patient."
    });
    setOpenPrescriptionDialog(false);
  };

  const exportHistory = () => {
    toast({
      title: "Export en cours",
      description: "L'historique des consultations est en cours d'export."
    });
  };

  const totalRevenue = filteredHistory.reduce((sum, consultation) => sum + consultation.price, 0);

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-indigo-600" />
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
                <p className="text-2xl font-bold text-gray-900">
                  {filteredHistory.filter(h => h.interpreterRequired).length}
                </p>
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
                        onClick={() => handleViewDetails(consultation)}
                        className="text-gray-600 border-gray-200 hover:bg-gray-50"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Voir
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleCreatePrescription(consultation)}
                        className="text-indigo-600 border-indigo-200 hover:bg-indigo-50"
                      >
                        <FilePen className="h-4 w-4 mr-1" />
                        {consultation.prescription ? 'Modifier' : 'Créer'}
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
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Détails de la consultation</DialogTitle>
            <DialogDescription>
              {selectedConsultation && (
                <span>
                  {selectedConsultation.patientName} - {selectedConsultation.date} à {selectedConsultation.time}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
          
          {selectedConsultation && (
            <div className="space-y-4 my-3">
              <div>
                <label className="font-medium text-sm">Notes de consultation:</label>
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
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenDetailsDialog(false)}>
              Fermer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

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

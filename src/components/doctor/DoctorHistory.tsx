
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
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
import DoctorHistoryStats from './history/DoctorHistoryStats';
import DoctorHistoryFilters from './history/DoctorHistoryFilters';
import DoctorHistoryItem, { ConsultationData } from './history/DoctorHistoryItem';
import DoctorHistoryDialogs from './history/DoctorHistoryDialogs';

// Sample data for consultation history
const historyData: ConsultationData[] = [
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
  const [selectedConsultation, setSelectedConsultation] = useState<ConsultationData | null>(null);
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

  const handleCreatePrescription = (consultation: ConsultationData) => {
    setSelectedConsultation(consultation);
    setPrescriptionText(consultation.prescription);
    setOpenPrescriptionDialog(true);
  };

  const handleViewDetails = (consultation: ConsultationData) => {
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
      <DoctorHistoryStats
        totalConsultations={filteredHistory.length}
        totalRevenue={totalRevenue}
        consultationsWithInterpreter={filteredHistory.filter(h => h.interpreterRequired).length}
      />

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Historique des consultations</CardTitle>
        </CardHeader>
        <CardContent>
          <DoctorHistoryFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterPeriod={filterPeriod}
            setFilterPeriod={setFilterPeriod}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            onExport={exportHistory}
          />

          {/* Consultations List */}
          {paginatedHistory.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Aucune consultation trouvée</p>
            </div>
          ) : (
            <div className="space-y-4">
              {paginatedHistory.map((consultation, index) => (
                <DoctorHistoryItem
                  key={consultation.id}
                  consultation={consultation}
                  index={index}
                  onViewDetails={handleViewDetails}
                  onCreatePrescription={handleCreatePrescription}
                />
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

      {/* Dialogs */}
      <DoctorHistoryDialogs
        selectedConsultation={selectedConsultation}
        openDetailsDialog={openDetailsDialog}
        setOpenDetailsDialog={setOpenDetailsDialog}
        openPrescriptionDialog={openPrescriptionDialog}
        setOpenPrescriptionDialog={setOpenPrescriptionDialog}
        prescriptionText={prescriptionText}
        setPrescriptionText={setPrescriptionText}
        onSavePrescription={savePrescription}
      />
    </div>
  );
};

export default DoctorHistory;

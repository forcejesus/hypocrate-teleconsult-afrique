
import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { ConsultationData } from './DoctorHistoryItem';

interface DoctorHistoryDialogsProps {
  selectedConsultation: ConsultationData | null;
  openDetailsDialog: boolean;
  setOpenDetailsDialog: (open: boolean) => void;
  openPrescriptionDialog: boolean;
  setOpenPrescriptionDialog: (open: boolean) => void;
  prescriptionText: string;
  setPrescriptionText: (text: string) => void;
  onSavePrescription: () => void;
}

const DoctorHistoryDialogs: React.FC<DoctorHistoryDialogsProps> = ({
  selectedConsultation,
  openDetailsDialog,
  setOpenDetailsDialog,
  openPrescriptionDialog,
  setOpenPrescriptionDialog,
  prescriptionText,
  setPrescriptionText,
  onSavePrescription
}) => {
  return (
    <>
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
            <Button className="bg-indigo-600 hover:bg-indigo-700" onClick={onSavePrescription}>
              Enregistrer l'ordonnance
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DoctorHistoryDialogs;

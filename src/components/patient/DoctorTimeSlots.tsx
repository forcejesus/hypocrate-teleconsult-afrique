
import { useState, useEffect } from 'react';
import { format, addDays, startOfWeek, isSameDay, isAfter } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { motion } from 'framer-motion';

interface DoctorTimeSlotsProps {
  doctorId: string;
  onDateChange: (date: Date | null) => void;
  onTimeSlotChange: (timeSlot: string | null) => void;
}

// Fonction pour générer des créneaux horaires fictifs
const generateTimeSlots = (date: Date, doctorId: string) => {
  const today = new Date();
  // Si la date sélectionnée est antérieure à aujourd'hui, on ne renvoie pas de créneaux
  if (!isAfter(date, today) && !isSameDay(date, today)) {
    return [];
  }
  
  const day = date.getDay(); // 0 = dimanche, 1 = lundi, etc.
  const slots = [];
  
  // Génération aléatoire de créneaux en fonction du jour
  // Pas de consultation le dimanche (day === 0)
  if (day !== 0) {
    // Matinée
    if (day % 2 === 0) { // Jours pairs
      slots.push("09:00", "09:30", "10:00", "11:00", "11:30");
    } else { // Jours impairs
      slots.push("08:30", "09:00", "10:30", "11:00");
    }
    
    // Après-midi
    if ([1, 3, 5].includes(day)) { // Lundi, Mercredi, Vendredi
      slots.push("14:00", "14:30", "15:00", "16:00", "16:30", "17:00");
    } else if (day === 6) { // Samedi
      slots.push("14:00", "14:30", "15:00");
    } else { // Mardi, Jeudi
      slots.push("13:30", "14:30", "15:30", "16:30", "17:30");
    }
  }
  
  // Enlève quelques créneaux pour simuler des créneaux déjà pris
  const removedSlots = [];
  if (doctorId === "1") removedSlots.push("09:00", "14:30");
  if (doctorId === "2") removedSlots.push("10:30", "16:30");
  if (doctorId === "3") removedSlots.push("09:30", "15:00");
  if (doctorId === "4") removedSlots.push("11:00", "17:30");
  
  return slots.filter(slot => !removedSlots.includes(slot));
};

export const DoctorTimeSlots = ({ doctorId, onDateChange, onTimeSlotChange }: DoctorTimeSlotsProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  
  // Mettre à jour les créneaux horaires quand la date change
  useEffect(() => {
    if (selectedDate) {
      const slots = generateTimeSlots(selectedDate, doctorId);
      setTimeSlots(slots);
      setSelectedTimeSlot(null); // Réinitialiser le créneau horaire quand la date change
      onTimeSlotChange(null);
    }
  }, [selectedDate, doctorId, onTimeSlotChange]);
  
  // Gérer la sélection de date
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateChange(date);
  };
  
  // Gérer la sélection d'un créneau horaire
  const handleTimeSlotChange = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
    onTimeSlotChange(timeSlot);
  };
  
  // Générer les dates pour la semaine en cours et les 2 prochaines semaines
  const today = new Date();
  const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 1 });
  const availableDays = Array.from({ length: 21 }, (_, i) => 
    addDays(startOfCurrentWeek, i)
  );
  
  return (
    <div className="space-y-6">
      {/* Calendrier */}
      <Card className="p-4">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateChange}
          locale={fr}
          disabled={{ before: new Date() }}
          className="border-0"
        />
      </Card>
      
      {/* Créneaux horaires */}
      {selectedDate && (
        <div className="mt-4 space-y-4">
          <h5 className="font-medium text-gray-700 mb-2">
            Créneaux disponibles pour le {format(selectedDate, 'EEEE d MMMM yyyy', { locale: fr })}:
          </h5>
          
          {timeSlots.length === 0 ? (
            <div className="text-center p-6">
              <Badge variant="outline" className="mb-2">Indisponible</Badge>
              <p className="text-gray-500 text-sm">
                Aucun créneau disponible pour cette date.
              </p>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {timeSlots.map((timeSlot) => (
                <Button
                  key={timeSlot}
                  variant={selectedTimeSlot === timeSlot ? "default" : "outline"}
                  className={`text-sm py-5 ${
                    selectedTimeSlot === timeSlot 
                      ? 'bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600' 
                      : 'border-gray-200 hover:border-hypocrate-blue'
                  }`}
                  onClick={() => handleTimeSlotChange(timeSlot)}
                >
                  {timeSlot}
                </Button>
              ))}
            </motion.div>
          )}
        </div>
      )}
      
      {!selectedDate && (
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <p className="text-gray-500">
            Veuillez sélectionner une date pour voir les créneaux disponibles.
          </p>
        </div>
      )}
    </div>
  );
};

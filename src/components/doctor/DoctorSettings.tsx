
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { DollarSign, Camera, Languages, Calendar, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';

// Define form schema for settings
const settingsSchema = z.object({
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  hourlyRate: z.string().refine((val) => !isNaN(parseInt(val)), {
    message: "Veuillez entrer un tarif horaire valide.",
  }),
  languages: z.string().min(1, {
    message: "Veuillez indiquer au moins une langue.",
  }),
  password: z.string().optional(),
  confirmPassword: z.string().optional(),
}).refine((data) => {
  if (data.password || data.confirmPassword) {
    return data.password === data.confirmPassword;
  }
  return true;
}, {
  message: "Les mots de passe ne correspondent pas.",
  path: ["confirmPassword"],
});

type SettingsFormValues = z.infer<typeof settingsSchema>;

// Days of the week
const daysOfWeek = [
  { label: 'Lun', value: 'monday' },
  { label: 'Mar', value: 'tuesday' },
  { label: 'Mer', value: 'wednesday' },
  { label: 'Jeu', value: 'thursday' },
  { label: 'Ven', value: 'friday' },
  { label: 'Sam', value: 'saturday' },
  { label: 'Dim', value: 'sunday' },
];

const DoctorSettings: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedDays, setSelectedDays] = useState<string[]>(['monday', 'tuesday', 'wednesday', 'thursday', 'friday']);
  
  // Time slots
  const [timeSlots, setTimeSlots] = useState([
    { id: 1, startTime: '09:00', endTime: '12:00' },
    { id: 2, startTime: '14:00', endTime: '18:00' },
  ]);

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      email: 'dr.martin@example.com',
      hourlyRate: '80',
      languages: 'Français, Anglais',
      password: '',
      confirmPassword: '',
    },
  });

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const addTimeSlot = () => {
    const newId = timeSlots.length > 0 ? Math.max(...timeSlots.map(slot => slot.id)) + 1 : 1;
    setTimeSlots([...timeSlots, { id: newId, startTime: '', endTime: '' }]);
  };

  const removeTimeSlot = (id: number) => {
    setTimeSlots(timeSlots.filter(slot => slot.id !== id));
  };

  const updateTimeSlot = (id: number, field: 'startTime' | 'endTime', value: string) => {
    setTimeSlots(timeSlots.map(slot => 
      slot.id === id ? { ...slot, [field]: value } : slot
    ));
  };

  const onSubmit = (data: SettingsFormValues) => {
    console.log("Form data:", data);
    console.log("Selected days:", selectedDays);
    console.log("Time slots:", timeSlots);
    
    toast({
      title: "Paramètres enregistrés",
      description: "Vos paramètres ont été mis à jour avec succès."
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Paramètres</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <motion.div variants={itemVariants} className="flex items-center mb-4">
              <User className="w-5 h-5 text-indigo-600 mr-2" />
              <h2 className="text-lg font-medium text-gray-800">Compte</h2>
            </motion.div>

            {/* Profile Image */}
            <motion.div variants={itemVariants} className="flex flex-col items-center sm:flex-row sm:items-start gap-6 mb-6">
              <div className="relative">
                <Avatar className="h-24 w-24 border-2 border-indigo-100">
                  {profileImage ? (
                    <AvatarImage src={profileImage} alt="Profile" />
                  ) : (
                    <AvatarFallback className="bg-indigo-100 text-indigo-700 text-xl">
                      JM
                    </AvatarFallback>
                  )}
                </Avatar>
                
                <label 
                  htmlFor="profile-image" 
                  className="absolute bottom-0 right-0 bg-indigo-600 text-white p-1 rounded-full cursor-pointer"
                >
                  <Camera className="h-4 w-4" />
                  <input 
                    type="file" 
                    id="profile-image" 
                    className="sr-only" 
                    accept="image/*"
                    onChange={handleProfileImageChange}
                  />
                </label>
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">Photo de profil</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Cette photo sera visible par les patients et les interprètes.
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel>Adresse email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            {/* Password */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nouveau mot de passe</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmer le mot de passe</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
          </motion.div>
          
          {/* Availability Settings */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <motion.div variants={itemVariants} className="flex items-center mb-4">
              <Calendar className="w-5 h-5 text-indigo-600 mr-2" />
              <h2 className="text-lg font-medium text-gray-800">Disponibilité</h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Jours disponibles</label>
                <div className="flex flex-wrap gap-2">
                  {daysOfWeek.map((day) => (
                    <button
                      key={day.value}
                      type="button"
                      onClick={() => toggleDay(day.value)}
                      className={`px-3 py-1 rounded-md text-sm ${
                        selectedDays.includes(day.value)
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium">Horaires disponibles</label>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={addTimeSlot}
                    className="text-indigo-600 border-indigo-200"
                  >
                    Ajouter un créneau
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {timeSlots.map((slot) => (
                    <div key={slot.id} className="flex items-center gap-2">
                      <Input
                        type="time"
                        value={slot.startTime}
                        onChange={(e) => updateTimeSlot(slot.id, 'startTime', e.target.value)}
                        className="w-32"
                      />
                      <span className="text-gray-500">à</span>
                      <Input
                        type="time"
                        value={slot.endTime}
                        onChange={(e) => updateTimeSlot(slot.id, 'endTime', e.target.value)}
                        className="w-32"
                      />
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeTimeSlot(slot.id)}
                        className="text-red-500 hover:bg-red-50 hover:text-red-600"
                      >
                        Supprimer
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Languages and Pricing */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <motion.div variants={itemVariants} className="flex items-center mb-4">
              <DollarSign className="w-5 h-5 text-indigo-600 mr-2" />
              <h2 className="text-lg font-medium text-gray-800">Tarif & Langues</h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="hourlyRate"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel>Tarif horaire (€)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input type="number" min="0" className="pl-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="languages"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Langues parlées</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Languages className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input placeholder="Ex: Français, Anglais, Arabe" className="pl-10" {...field} />
                      </div>
                    </FormControl>
                    <p className="text-xs text-gray-500 mt-1">Séparez les langues par des virgules</p>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
          </motion.div>
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              Enregistrer les modifications
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DoctorSettings;

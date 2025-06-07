
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { DollarSign, Camera, Languages, Calendar, User, Shield, Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import { Switch } from '@/components/ui/switch';

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
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });
  
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

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Paramètres</h1>
        <p className="text-gray-600">Gérez vos informations professionnelles et préférences</p>
      </div>
      
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 bg-gray-100 p-1">
          <TabsTrigger value="profile" className="flex items-center gap-2 px-4 py-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Profil</span>
          </TabsTrigger>
          <TabsTrigger value="availability" className="flex items-center gap-2 px-4 py-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Disponibilité</span>
          </TabsTrigger>
          <TabsTrigger value="pricing" className="flex items-center gap-2 px-4 py-2">
            <DollarSign className="h-4 w-4" />
            <span className="hidden sm:inline">Tarification</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2 px-4 py-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Sécurité</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2 px-4 py-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
        </TabsList>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <User className="h-5 w-5 text-indigo-600 mr-2" />
                  Informations personnelles
                </h3>

                {/* Profile Image */}
                <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6 mb-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24 border-4 border-indigo-50">
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
                      className="absolute bottom-0 right-0 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full cursor-pointer transition-colors"
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
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-semibold text-gray-900">Photo de profil</h3>
                    <p className="text-sm text-gray-500 mb-3">
                      Cette photo sera visible par les patients et les interprètes.
                    </p>
                    <p className="text-xs text-gray-400">
                      Formats acceptés: JPG, PNG. Taille max: 5MB
                    </p>
                  </div>
                </div>

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adresse email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} className="h-11" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Languages */}
                <FormField
                  control={form.control}
                  name="languages"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Langues parlées</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Languages className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input placeholder="Ex: Français, Anglais, Arabe" className="pl-10 h-11" {...field} />
                        </div>
                      </FormControl>
                      <p className="text-xs text-gray-500 mt-1">Séparez les langues par des virgules</p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            </TabsContent>

            {/* Availability Tab */}
            <TabsContent value="availability" className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
                  Gestion des disponibilités
                </h3>

                <div className="space-y-6">
                  {/* Available Days */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">Jours disponibles</label>
                    <div className="flex flex-wrap gap-2">
                      {daysOfWeek.map((day) => (
                        <button
                          key={day.value}
                          type="button"
                          onClick={() => toggleDay(day.value)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            selectedDays.includes(day.value)
                              ? 'bg-indigo-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-sm font-medium">Créneaux horaires</label>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={addTimeSlot}
                        className="text-indigo-600 border-indigo-200 hover:bg-indigo-50"
                      >
                        Ajouter un créneau
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      {timeSlots.map((slot) => (
                        <div key={slot.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <Input
                            type="time"
                            value={slot.startTime}
                            onChange={(e) => updateTimeSlot(slot.id, 'startTime', e.target.value)}
                            className="w-32"
                          />
                          <span className="text-gray-500 font-medium">à</span>
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
                </div>
              </motion.div>
            </TabsContent>

            {/* Pricing Tab */}
            <TabsContent value="pricing" className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                  Tarification
                </h3>

                <FormField
                  control={form.control}
                  name="hourlyRate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tarif horaire (€)</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input type="number" min="0" className="pl-10 h-11" {...field} />
                        </div>
                      </FormControl>
                      <p className="text-xs text-gray-500 mt-1">Ce tarif sera affiché aux patients</p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <Shield className="h-5 w-5 text-indigo-600 mr-2" />
                  Sécurité
                </h3>

                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nouveau mot de passe</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" className="h-11" {...field} />
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
                          <Input type="password" placeholder="••••••••" className="h-11" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </motion.div>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <Bell className="h-5 w-5 text-indigo-600 mr-2" />
                  Préférences de notifications
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Notifications par email</h4>
                      <p className="text-sm text-gray-500">Recevez les notifications importantes par email</p>
                    </div>
                    <Switch 
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Notifications SMS</h4>
                      <p className="text-sm text-gray-500">Recevez les notifications urgentes par SMS</p>
                    </div>
                    <Switch 
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, sms: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Notifications push</h4>
                      <p className="text-sm text-gray-500">Recevez les notifications dans votre navigateur</p>
                    </div>
                    <Switch 
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
                    />
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            
            <div className="flex justify-end pt-6">
              <Button 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-700 px-8 py-2 h-11"
              >
                Enregistrer les modifications
              </Button>
            </div>
          </form>
        </Form>
      </Tabs>
    </div>
  );
};

export default DoctorSettings;

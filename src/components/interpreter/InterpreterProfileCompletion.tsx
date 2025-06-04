
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Languages, MapPin, Phone, DollarSign, User, Upload } from 'lucide-react';

// Données exemple
const countries = [
  { code: "FR", name: "France" },
  { code: "BE", name: "Belgique" },
  { code: "CH", name: "Suisse" },
  { code: "CA", name: "Canada" },
  { code: "LU", name: "Luxembourg" },
  { code: "MC", name: "Monaco" }
];

const languages = [
  "Français", "Anglais", "Espagnol", "Portugais", 
  "Lingala", "Kituba", "Kigongo", "Swahili", 
  "Wolof", "Bambara", "Peul", "Yoruba", "Hausa"
];

const phoneIndicatives = [
  { code: "+33", country: "France" },
  { code: "+32", country: "Belgique" },
  { code: "+41", country: "Suisse" },
  { code: "+1", country: "Canada" },
  { code: "+352", country: "Luxembourg" },
  { code: "+377", country: "Monaco" }
];

// Schéma de validation
const profileCompletionSchema = z.object({
  country: z.string().min(1, { message: "Veuillez sélectionner un pays" }),
  phoneIndicative: z.string().min(1, { message: "Veuillez sélectionner un indicatif téléphonique" }),
  phoneNumber: z.string().min(5, { message: "Numéro de téléphone invalide" }),
  languages: z.array(z.string()).min(1, { message: "Veuillez sélectionner au moins une langue" }),
  hourlyRate: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
    message: "Le tarif horaire doit être un nombre positif",
  }),
});

interface InterpreterProfileCompletionProps {
  onComplete: () => void;
}

export const InterpreterProfileCompletion: React.FC<InterpreterProfileCompletionProps> = ({ 
  onComplete 
}) => {
  const { toast } = useToast();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  
  // Initialiser le formulaire
  const form = useForm<z.infer<typeof profileCompletionSchema>>({
    resolver: zodResolver(profileCompletionSchema),
    defaultValues: {
      country: "",
      phoneIndicative: "",
      phoneNumber: "",
      languages: [],
      hourlyRate: "30",
    },
  });

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev => {
      if (prev.includes(language)) {
        return prev.filter(lang => lang !== language);
      } else {
        return [...prev, language];
      }
    });
    
    // Mettre à jour le champ languages dans le formulaire
    form.setValue("languages", 
      selectedLanguages.includes(language) 
        ? selectedLanguages.filter(lang => lang !== language) 
        : [...selectedLanguages, language]
    );
  };

  const onSubmit = (data: z.infer<typeof profileCompletionSchema>) => {
    console.log("Profil complété:", { ...data, profileImage });
    
    toast({
      title: "Profil complété",
      description: "Votre profil a été complété avec succès.",
    });
    
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl"
      >
        <Card className="border-0 shadow-2xl bg-white overflow-hidden">
          <CardHeader className="text-center pb-8 pt-8">
            <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Languages className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Complétez votre profil d'interprète
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              Configurez votre profil pour commencer à recevoir des demandes
            </CardDescription>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Photo de profil */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="w-4 h-4 text-teal-500" />
                    <span className="font-medium text-gray-900">Photo de profil</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center overflow-hidden border-4 border-teal-100 shadow-lg">
                      {profileImage ? (
                        <img src={profileImage} alt="Photo de profil" className="w-full h-full object-cover" />
                      ) : (
                        <User className="text-2xl text-teal-500" size={32} />
                      )}
                    </div>
                    <div>
                      <Label htmlFor="profile-image" className="cursor-pointer">
                        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-colors shadow-lg hover:shadow-xl flex items-center space-x-2">
                          <Upload size={16} />
                          <span>Choisir une image</span>
                        </div>
                        <Input
                          id="profile-image"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleProfileImageChange}
                        />
                      </Label>
                      <p className="text-xs text-gray-500 mt-1">JPG, PNG ou GIF. Max 1MB.</p>
                    </div>
                  </div>
                </div>
                
                {/* Pays */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    <span className="font-medium text-gray-900">Localisation</span>
                  </div>
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pays</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-gray-200 focus:border-teal-500">
                              <SelectValue placeholder="Sélectionnez votre pays" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country.code} value={country.code}>
                                {country.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Téléphone */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="w-4 h-4 text-teal-500" />
                    <span className="font-medium text-gray-900">Contact</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="phoneIndicative"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Indicatif</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-gray-200 focus:border-teal-500">
                                <SelectValue placeholder="+" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {phoneIndicatives.map((indicative) => (
                                <SelectItem key={indicative.code} value={indicative.code}>
                                  {indicative.code} ({indicative.country})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="md:col-span-2">
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Numéro de téléphone</FormLabel>
                            <FormControl>
                              <Input {...field} className="border-gray-200 focus:border-teal-500" placeholder="Votre numéro de téléphone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Langues */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Languages className="w-4 h-4 text-teal-500" />
                    <span className="font-medium text-gray-900">Langues maîtrisées</span>
                  </div>
                  <FormField
                    control={form.control}
                    name="languages"
                    render={() => (
                      <FormItem>
                        <FormLabel>Sélectionnez vos langues</FormLabel>
                        <FormDescription>
                          Choisissez toutes les langues que vous pouvez interpréter.
                        </FormDescription>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                          {languages.map((language) => (
                            <div
                              key={language}
                              className={`cursor-pointer p-3 rounded-lg border transition-all ${
                                selectedLanguages.includes(language)
                                  ? 'bg-gradient-to-r from-teal-100 to-cyan-100 border-teal-300 text-teal-800 font-medium shadow-md'
                                  : 'bg-white border-gray-200 hover:bg-teal-50 hover:border-teal-200 shadow-sm'
                              }`}
                              onClick={() => toggleLanguage(language)}
                            >
                              {language}
                            </div>
                          ))}
                        </div>
                        {form.formState.errors.languages && (
                          <p className="text-sm font-medium text-red-500 mt-2">
                            {form.formState.errors.languages.message}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Tarif horaire */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="w-4 h-4 text-teal-500" />
                    <span className="font-medium text-gray-900">Tarification</span>
                  </div>
                  <FormField
                    control={form.control}
                    name="hourlyRate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tarif horaire (€)</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" min="0" step="0.01" className="border-gray-200 focus:border-teal-500" />
                        </FormControl>
                        <FormDescription>
                          Votre tarif horaire pour les services d'interprétation.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Terminer mon profil
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default InterpreterProfileCompletion;

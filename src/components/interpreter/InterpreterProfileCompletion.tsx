
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-3xl"
      >
        <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-hypocrate-blue to-hypocrate-green mb-2">
          Compléter votre profil d'interprète
        </h1>
        <p className="text-gray-600 mb-6">
          Veuillez compléter ces informations pour activer votre compte d'interprète.
        </p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Photo de profil */}
            <div className="mb-6">
              <h3 className="text-md font-medium mb-4">Photo de profil (optionnelle)</h3>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {profileImage ? (
                    <img src={profileImage} alt="Photo de profil" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl text-gray-400">👤</span>
                  )}
                </div>
                <div>
                  <Label htmlFor="profile-image" className="cursor-pointer">
                    <div className="bg-hypocrate-blue text-white px-4 py-2 rounded-md hover:bg-hypocrate-blue/90 transition-colors">
                      Choisir une image
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
            
            <Separator />
            
            {/* Pays */}
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
                      <SelectTrigger>
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
            
            {/* Téléphone */}
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
                        <SelectTrigger>
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
                        <Input {...field} placeholder="Votre numéro de téléphone" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            {/* Langues */}
            <FormField
              control={form.control}
              name="languages"
              render={() => (
                <FormItem>
                  <FormLabel>Langues maîtrisées</FormLabel>
                  <FormDescription>
                    Sélectionnez toutes les langues que vous pouvez interpréter.
                  </FormDescription>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    {languages.map((language) => (
                      <div
                        key={language}
                        className={`cursor-pointer p-2 rounded-md border ${
                          selectedLanguages.includes(language)
                            ? 'bg-hypocrate-lightBlue border-hypocrate-blue text-hypocrate-blue'
                            : 'bg-white border-gray-200 hover:bg-gray-50'
                        }`}
                        onClick={() => toggleLanguage(language)}
                      >
                        {language}
                      </div>
                    ))}
                  </div>
                  {form.formState.errors.languages && (
                    <p className="text-sm font-medium text-destructive mt-2">
                      {form.formState.errors.languages.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
            
            {/* Tarif horaire */}
            <FormField
              control={form.control}
              name="hourlyRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tarif horaire (€)</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" min="0" step="0.01" />
                  </FormControl>
                  <FormDescription>
                    Votre tarif horaire pour les services d'interprétation.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end pt-4">
              <Button type="submit">Compléter mon profil</Button>
            </div>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};

export default InterpreterProfileCompletion;

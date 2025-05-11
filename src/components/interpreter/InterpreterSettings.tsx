
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
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

// Schéma de validation pour le formulaire des paramètres
const settingsFormSchema = z.object({
  email: z.string().email({ message: "Adresse email invalide" }),
  currentPassword: z.string().min(1, { message: "Le mot de passe actuel est requis" }),
  newPassword: z.string().min(8, { message: "Le nouveau mot de passe doit contenir au moins 8 caractères" }).optional(),
  confirmPassword: z.string().optional(),
  hourlyRate: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
    message: "Le tarif horaire doit être un nombre positif",
  }),
}).refine((data) => {
  if (data.newPassword && data.newPassword !== data.confirmPassword) {
    return false;
  }
  return true;
}, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

export const InterpreterSettings: React.FC = () => {
  const { toast } = useToast();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  // Initialiser le formulaire avec des valeurs par défaut
  const form = useForm<z.infer<typeof settingsFormSchema>>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: {
      email: "interpreter@example.com",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
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

  const onSubmit = (data: z.infer<typeof settingsFormSchema>) => {
    console.log("Données soumises:", data);
    toast({
      title: "Paramètres mis à jour",
      description: "Vos paramètres ont été mis à jour avec succès.",
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-6">Paramètres du compte</h2>
      
      {/* Section de la photo de profil */}
      <div className="mb-8">
        <h3 className="text-md font-medium mb-4">Photo de profil</h3>
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
      
      <Separator className="my-6" />
      
      {/* Formulaire des paramètres */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
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
          
          <Separator className="my-6" />
          
          {/* Changement de mot de passe */}
          <div className="space-y-4">
            <h3 className="text-md font-medium">Changer le mot de passe</h3>
            
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe actuel</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nouveau mot de passe</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormDescription>
                    Laissez vide si vous ne souhaitez pas changer de mot de passe.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmer le nouveau mot de passe</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="flex justify-end pt-4">
            <Button type="submit">Sauvegarder les modifications</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default InterpreterSettings;

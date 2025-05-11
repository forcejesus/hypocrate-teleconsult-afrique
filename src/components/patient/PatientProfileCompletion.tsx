
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { User, Phone, Flag } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";
import { countries, getAfricanCountries } from "@/data/countries";

// Languages options
const languages = [
  { id: "fr", name: "Français" },
  { id: "en", name: "Anglais" },
  { id: "es", name: "Espagnol" },
  { id: "pt", name: "Portugais" },
  { id: "ln", name: "Lingala" },
  { id: "kt", name: "Kituba" },
  { id: "kg", name: "Kigongo" },
  // Add more African languages as needed
];

// Profile completion schema
const profileSchema = z.object({
  phoneNumber: z.string().min(1, "Le numéro de téléphone est requis"),
  countryCode: z.string().min(1, "L'indicatif du pays est requis"),
  country: z.string().min(1, "Le pays est requis"),
  languages: z.array(z.string()).min(1, "Sélectionnez au moins une langue"),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

interface PatientProfileCompletionProps {
  onComplete: () => void;
}

export const PatientProfileCompletion = ({ onComplete }: PatientProfileCompletionProps) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  // Form definition
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      phoneNumber: "",
      countryCode: "+33", // France as default
      country: "FR",
      languages: [],
    },
  });

  // Handle profile picture upload
  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // File type validation
    if (!file.type.includes("image/")) {
      toast.error("Le fichier sélectionné n'est pas une image");
      return;
    }

    // File size validation (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("L'image ne doit pas dépasser 5Mo");
      return;
    }

    // Create a URL for the image preview
    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
    toast.success("Photo de profil ajoutée");
  };

  // Handle language selection
  const toggleLanguage = (langId: string) => {
    setSelectedLanguages(prev => {
      if (prev.includes(langId)) {
        const updated = prev.filter(id => id !== langId);
        form.setValue("languages", updated);
        return updated;
      } else {
        const updated = [...prev, langId];
        form.setValue("languages", updated);
        return updated;
      }
    });
  };

  // Handle form submission
  const onSubmit = (values: ProfileFormValues) => {
    console.log("Profile completion values:", values);
    toast.success("Profil complété avec succès!");
    onComplete();
  };

  // Get African countries
  const africanCountries = getAfricanCountries();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-4xl mx-auto p-4 md:p-6"
    >
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-hypocrate-blue to-hypocrate-green">
            Complétez votre profil
          </CardTitle>
          <CardDescription>
            Merci de compléter votre profil avant de continuer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Profile Picture */}
              <div className="flex flex-col items-center mb-6">
                <Avatar className="h-32 w-32 mb-4">
                  {profileImage ? (
                    <AvatarImage src={profileImage} alt="Photo de profil" />
                  ) : (
                    <AvatarFallback className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green text-white text-4xl">
                      <User size={40} />
                    </AvatarFallback>
                  )}
                </Avatar>
                <Button 
                  variant="outline" 
                  className="relative overflow-hidden" 
                  type="button"
                >
                  <User size={16} className="mr-2" />
                  Choisir une photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    className="absolute inset-0 cursor-pointer opacity-0"
                  />
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Photo de profil (non obligatoire)
                </p>
              </div>

              {/* Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Indicatif</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Indicatif" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="max-h-[300px]">
                          {countries.map((country) => (
                            <SelectItem key={country.code} value={country.dialCode}>
                              <span className="mr-2">{country.flag}</span>
                              {country.dialCode} ({country.name})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Numéro de téléphone</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input className="pl-10" placeholder="Numéro de téléphone" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Country Selection */}
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pays de résidence</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Sélectionnez votre pays" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="max-h-[300px]">
                        <div className="mb-2 px-2 py-1.5 text-sm font-semibold">Afrique</div>
                        {africanCountries.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            <span className="mr-2">{country.flag}</span>
                            {country.name}
                          </SelectItem>
                        ))}
                        <div className="mt-2 mb-2 px-2 py-1.5 text-sm font-semibold">Autres pays</div>
                        {countries
                          .filter(country => !country.isAfrican)
                          .map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              <span className="mr-2">{country.flag}</span>
                              {country.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Languages */}
              <FormField
                control={form.control}
                name="languages"
                render={() => (
                  <FormItem>
                    <FormLabel>Langues parlées</FormLabel>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
                      {languages.map((language) => (
                        <Button
                          key={language.id}
                          type="button"
                          variant={selectedLanguages.includes(language.id) ? "default" : "outline"}
                          className={`justify-start ${
                            selectedLanguages.includes(language.id) 
                              ? "bg-gradient-to-r from-hypocrate-blue to-hypocrate-green text-white" 
                              : ""
                          }`}
                          onClick={() => toggleLanguage(language.id)}
                        >
                          {language.name}
                        </Button>
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

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600"
              >
                Compléter mon profil
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PatientProfileCompletion;

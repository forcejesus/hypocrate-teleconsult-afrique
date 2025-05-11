
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

// Mock patient data - would come from an API in a real app
const mockPatient = {
  id: "1",
  firstName: "Jean",
  lastName: "Dupont",
  email: "jean.dupont@example.com",
  profilePicture: "",
};

// Profile info update schema
const profileSchema = z.object({
  email: z.string().email("L'email n'est pas valide"),
});

// Password update schema
const passwordSchema = z.object({
  currentPassword: z.string().min(1, "Veuillez entrer votre mot de passe actuel"),
  newPassword: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
  confirmPassword: z.string().min(1, "Veuillez confirmer votre mot de passe"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

export const PatientSettings = () => {
  const [profileImage, setProfileImage] = useState<string | null>(mockPatient.profilePicture || null);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Email update form
  const profileForm = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      email: mockPatient.email,
    },
  });

  // Password update form
  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
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
    toast.success("Photo de profil mise à jour");
  };

  // Handle email update submission
  const onEmailSubmit = (values: z.infer<typeof profileSchema>) => {
    console.log("Email update values:", values);
    toast.success("Adresse email mise à jour avec succès");
  };

  // Handle password update submission
  const onPasswordSubmit = (values: z.infer<typeof passwordSchema>) => {
    console.log("Password update values:", values);
    passwordForm.reset();
    toast.success("Mot de passe mis à jour avec succès");
  };

  // Toggle password visibility handlers
  const toggleCurrentPasswordVisibility = () => setShowCurrentPassword(!showCurrentPassword);
  const toggleNewPasswordVisibility = () => setShowNewPassword(!showNewPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Informations personnelles</CardTitle>
          <CardDescription>
            Consultez et modifiez vos informations personnelles
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Profile Picture Section */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <div className="flex flex-col items-center space-y-2">
              <Avatar className="h-24 w-24">
                {profileImage ? (
                  <AvatarImage src={profileImage} alt={`${mockPatient.firstName} ${mockPatient.lastName}`} />
                ) : (
                  <AvatarFallback className="text-lg bg-hypocrate-blue text-white">
                    {mockPatient.firstName[0]}{mockPatient.lastName[0]}
                  </AvatarFallback>
                )}
              </Avatar>
              <div>
                <Button 
                  variant="outline" 
                  className="relative w-full overflow-hidden" 
                  size="sm"
                >
                  <User size={16} className="mr-1" />
                  Changer la photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    className="absolute inset-0 cursor-pointer opacity-0"
                  />
                </Button>
              </div>
            </div>
            <div className="space-y-2 flex-1">
              <div>
                <h3 className="font-medium">Nom</h3>
                <p className="text-gray-600">{mockPatient.firstName} {mockPatient.lastName}</p>
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">{mockPatient.email}</p>
              </div>
            </div>
          </div>

          {/* Settings Tabs */}
          <Tabs defaultValue="email" className="pt-4">
            <TabsList className="mb-4 w-full grid grid-cols-2">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="password">Mot de passe</TabsTrigger>
            </TabsList>
            
            {/* Email Update Tab */}
            <TabsContent value="email">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Modifier votre adresse email</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...profileForm}>
                    <form onSubmit={profileForm.handleSubmit(onEmailSubmit)} className="space-y-4">
                      <FormField
                        control={profileForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nouvelle adresse email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                  className="pl-10"
                                  placeholder="votre@email.com"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600"
                      >
                        Mettre à jour l'email
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Password Update Tab */}
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Modifier votre mot de passe</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...passwordForm}>
                    <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">
                      <FormField
                        control={passwordForm.control}
                        name="currentPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mot de passe actuel</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                  className="pl-10 pr-10"
                                  type={showCurrentPassword ? "text" : "password"}
                                  placeholder="••••••••"
                                  {...field}
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="absolute right-0 top-0"
                                  onClick={toggleCurrentPasswordVisibility}
                                >
                                  {showCurrentPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                  ) : (
                                    <Eye className="h-4 w-4" />
                                  )}
                                  <span className="sr-only">
                                    {showCurrentPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                                  </span>
                                </Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={passwordForm.control}
                        name="newPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nouveau mot de passe</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                  className="pl-10 pr-10"
                                  type={showNewPassword ? "text" : "password"}
                                  placeholder="••••••••"
                                  {...field}
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="absolute right-0 top-0"
                                  onClick={toggleNewPasswordVisibility}
                                >
                                  {showNewPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                  ) : (
                                    <Eye className="h-4 w-4" />
                                  )}
                                  <span className="sr-only">
                                    {showNewPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                                  </span>
                                </Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={passwordForm.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirmer le nouveau mot de passe</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                  className="pl-10 pr-10"
                                  type={showConfirmPassword ? "text" : "password"}
                                  placeholder="••••••••"
                                  {...field}
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  className="absolute right-0 top-0"
                                  onClick={toggleConfirmPasswordVisibility}
                                >
                                  {showConfirmPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                  ) : (
                                    <Eye className="h-4 w-4" />
                                  )}
                                  <span className="sr-only">
                                    {showConfirmPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                                  </span>
                                </Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="bg-gradient-to-r from-hypocrate-blue to-hypocrate-green hover:from-blue-600 hover:to-green-600"
                      >
                        Mettre à jour le mot de passe
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

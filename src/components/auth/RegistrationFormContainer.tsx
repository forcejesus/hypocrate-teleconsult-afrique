
import { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface RegistrationFormContainerProps {
  step: number;
  children: ReactNode;
}

export const RegistrationFormContainer = ({ step, children }: RegistrationFormContainerProps) => {
  return (
    <Card className="border-0 shadow-xl overflow-hidden rounded-2xl bg-white/90 backdrop-blur-md">
      <div className="absolute top-0 left-0 w-full h-1.5">
        <div className="h-full bg-gradient-to-r from-hypocrate-blue to-hypocrate-green" style={{
          width: step === 1 ? "50%" : "100%",
          transition: "width 0.5s ease-in-out"
        }}></div>
      </div>
      
      <CardHeader className="bg-gray-50/80 backdrop-blur-sm p-6">
        <CardTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-hypocrate-blue to-hypocrate-green">
          {step === 1 ? "Informations personnelles" : "Sécurité du compte"}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {step === 1 
            ? "Veuillez renseigner vos informations de base" 
            : "Créez un mot de passe sécurisé pour protéger votre compte"}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-8 p-6">
        {children}
      </CardContent>
    </Card>
  );
};


import { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface RegistrationFormContainerProps {
  step: number;
  children: ReactNode;
}

export const RegistrationFormContainer = ({ step, children }: RegistrationFormContainerProps) => {
  return (
    <Card className="border-0 shadow-lg overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1">
        <div className="h-full bg-gradient-to-r from-hypocrate-blue to-hypocrate-green" style={{
          width: step === 1 ? "50%" : "100%",
          transition: "width 0.5s ease-in-out"
        }}></div>
      </div>
      
      <CardHeader className="bg-gray-50">
        <CardTitle>{step === 1 ? "Informations personnelles" : "Sécurité du compte"}</CardTitle>
        <CardDescription>
          {step === 1 
            ? "Veuillez renseigner vos informations personnelles" 
            : "Créez un mot de passe sécurisé pour protéger votre compte"}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {children}
      </CardContent>
    </Card>
  );
};

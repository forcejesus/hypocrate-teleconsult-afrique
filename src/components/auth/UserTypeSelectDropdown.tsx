
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserRound, Stethoscope, Languages } from "lucide-react";

interface UserTypeSelectDropdownProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
}

export function UserTypeSelectDropdown({ 
  value, 
  onChange, 
  label = "Je suis :", 
  className 
}: UserTypeSelectDropdownProps) {
  return (
    <FormItem className={className}>
      {label && <FormLabel className="text-gray-700 font-medium">{label}</FormLabel>}
      <Select onValueChange={onChange} value={value}>
        <FormControl>
          <SelectTrigger className="min-h-[42px]">
            <SelectValue placeholder="Sélectionnez votre type d'utilisateur" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="patient" className="py-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-hypocrate-lightBlue flex items-center justify-center">
                <UserRound className="h-4 w-4 text-hypocrate-blue" />
              </div>
              <div>
                <span className="font-medium">Patient</span>
                <p className="text-xs text-gray-500">Recevez des consultations médicales en ligne</p>
              </div>
            </div>
          </SelectItem>
          
          <SelectItem value="medecin" className="py-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-hypocrate-lightBlue flex items-center justify-center">
                <Stethoscope className="h-4 w-4 text-hypocrate-blue" />
              </div>
              <div>
                <span className="font-medium">Médecin</span>
                <p className="text-xs text-gray-500">Offrez des consultations médicales en ligne</p>
              </div>
            </div>
          </SelectItem>
          
          <SelectItem value="traducteur" className="py-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-hypocrate-lightBlue flex items-center justify-center">
                <Languages className="h-4 w-4 text-hypocrate-blue" />
              </div>
              <div>
                <span className="font-medium">Traducteur</span>
                <p className="text-xs text-gray-500">Facilitez la communication entre médecins et patients</p>
              </div>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}

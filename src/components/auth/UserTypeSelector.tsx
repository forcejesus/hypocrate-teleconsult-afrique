
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { UserRound, Stethoscope, Languages } from "lucide-react";

interface UserTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function UserTypeSelector({ value, onChange }: UserTypeSelectorProps) {
  return (
    <RadioGroup 
      value={value} 
      onValueChange={onChange}
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <div className={`flex flex-col border rounded-xl p-4 transition-all cursor-pointer ${value === 'patient' ? 'border-hypocrate-blue bg-hypocrate-lightBlue/30' : 'border-gray-200 hover:border-gray-300'}`}>
        <RadioGroupItem value="patient" id="patient" className="sr-only" />
        <Label htmlFor="patient" className="cursor-pointer flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-hypocrate-lightBlue flex items-center justify-center">
              <UserRound className="h-5 w-5 text-hypocrate-blue" />
            </div>
            <span className="font-medium">Patient</span>
          </div>
          <p className="text-xs text-gray-500 ml-[52px]">Recevez des consultations médicales en ligne</p>
        </Label>
      </div>

      <div className={`flex flex-col border rounded-xl p-4 transition-all cursor-pointer ${value === 'medecin' ? 'border-hypocrate-blue bg-hypocrate-lightBlue/30' : 'border-gray-200 hover:border-gray-300'}`}>
        <RadioGroupItem value="medecin" id="medecin" className="sr-only" />
        <Label htmlFor="medecin" className="cursor-pointer flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-hypocrate-lightBlue flex items-center justify-center">
              <Stethoscope className="h-5 w-5 text-hypocrate-blue" />
            </div>
            <span className="font-medium">Médecin</span>
          </div>
          <p className="text-xs text-gray-500 ml-[52px]">Offrez des consultations médicales en ligne</p>
        </Label>
      </div>

      <div className={`flex flex-col border rounded-xl p-4 transition-all cursor-pointer ${value === 'traducteur' ? 'border-hypocrate-blue bg-hypocrate-lightBlue/30' : 'border-gray-200 hover:border-gray-300'}`}>
        <RadioGroupItem value="traducteur" id="traducteur" className="sr-only" />
        <Label htmlFor="traducteur" className="cursor-pointer flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-hypocrate-lightBlue flex items-center justify-center">
              <Languages className="h-5 w-5 text-hypocrate-blue" />
            </div>
            <span className="font-medium">Traducteur</span>
          </div>
          <p className="text-xs text-gray-500 ml-[52px]">Facilitez la communication entre médecins et patients</p>
        </Label>
      </div>
    </RadioGroup>
  );
}

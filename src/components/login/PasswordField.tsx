
import { useState } from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UseFormReturn } from 'react-hook-form';

interface PasswordFieldProps {
  form: UseFormReturn<any, any, undefined>;
}

export const PasswordField = ({ form }: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <div className="flex justify-between items-center mb-1">
            <FormLabel className="text-gray-700 font-medium">Mot de passe</FormLabel>
            <Link to="#" className="text-xs text-hypocrate-blue hover:text-hypocrate-green hover:underline transition-colors duration-200">
              Mot de passe oublié ?
            </Link>
          </div>
          <div className="relative">
            <FormControl>
              <Input 
                type={showPassword ? "text" : "password"}
                placeholder="Votre mot de passe" 
                className="h-12 rounded-xl pr-10 focus:ring-2 focus:ring-hypocrate-blue/40 transition-all duration-200"
                {...field} 
              />
            </FormControl>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-500 hover:text-hypocrate-blue transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </Button>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

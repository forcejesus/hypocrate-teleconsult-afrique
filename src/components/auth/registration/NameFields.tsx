
import { motion } from 'framer-motion';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface NameFieldsProps {
  form: any;
  variants: any;
}

export const NameFields = ({ form, variants }: NameFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div variants={variants}>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium">Prénom</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Votre prénom" 
                  className="h-12 rounded-xl focus:ring-2 focus:ring-hypocrate-blue/40 transition-all duration-200" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </motion.div>

      <motion.div variants={variants}>
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium">Nom</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Votre nom" 
                  className="h-12 rounded-xl focus:ring-2 focus:ring-hypocrate-blue/40 transition-all duration-200" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </motion.div>
    </div>
  );
};


import { motion } from 'framer-motion';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface EmailFieldProps {
  form: any;
  variants: any;
}

export const EmailField = ({ form, variants }: EmailFieldProps) => {
  return (
    <motion.div variants={variants}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-medium">Email</FormLabel>
            <FormControl>
              <Input 
                type="email" 
                placeholder="votre@email.com" 
                className="h-12 rounded-xl focus:ring-2 focus:ring-hypocrate-blue/40 transition-all duration-200" 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </motion.div>
  );
};

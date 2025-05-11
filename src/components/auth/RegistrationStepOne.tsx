
import { motion } from 'framer-motion';
import { FormField } from "@/components/ui/form";
import { UserTypeSelectDropdown } from "@/components/auth/UserTypeSelectDropdown";
import { NameFields } from "@/components/auth/registration/NameFields";
import { EmailField } from "@/components/auth/registration/EmailField";
import { containerVariants, itemVariants } from "@/components/auth/registration/AnimationVariants";

interface StepOneProps {
  form: any;
  userType: string;
  handleCountryChange?: (value: string) => void;
}

export const RegistrationStepOne = ({ form, userType }: StepOneProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <FormField
          control={form.control}
          name="userType"
          render={({ field }) => (
            <UserTypeSelectDropdown
              value={field.value}
              onChange={field.onChange}
              className="space-y-3"
            />
          )}
        />
      </motion.div>

      <NameFields form={form} variants={itemVariants} />

      <EmailField form={form} variants={itemVariants} />
    </motion.div>
  );
};

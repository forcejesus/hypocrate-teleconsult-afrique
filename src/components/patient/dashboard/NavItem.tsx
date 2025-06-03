
import { motion } from 'framer-motion';

interface NavItemProps {
  id: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

const NavItem = ({ id, icon, label, isActive, onClick }: NavItemProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(id)}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
        isActive
          ? 'bg-gradient-to-r from-hypocrate-blue/10 to-hypocrate-green/10 text-hypocrate-blue border border-hypocrate-blue/20 shadow-sm'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <div className={`${isActive ? 'text-hypocrate-blue' : 'text-gray-400'}`}>
        {icon}
      </div>
      <span className="font-medium">{label}</span>
    </motion.button>
  );
};

export default NavItem;

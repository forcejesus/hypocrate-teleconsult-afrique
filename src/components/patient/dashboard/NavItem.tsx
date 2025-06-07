
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface NavItemProps {
  id: string;
  icon: React.ReactNode;
  label: string;
  badge?: number;
  isActive: boolean;
  onClick: (id: string) => void;
}

const NavItem = ({ id, icon, label, badge, isActive, onClick }: NavItemProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(id)}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-200 ${
        isActive
          ? 'bg-gradient-to-r from-blue-50 to-green-50 text-hypocrate-blue border border-blue-200 shadow-sm'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className={`${isActive ? 'text-hypocrate-blue' : 'text-gray-400'}`}>
          {icon}
        </div>
        <span className="font-medium">{label}</span>
      </div>
      
      {badge && badge > 0 && (
        <Badge 
          variant="secondary" 
          className={`text-xs ${
            isActive 
              ? 'bg-hypocrate-blue text-white' 
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {badge}
        </Badge>
      )}
    </motion.button>
  );
};

export default NavItem;

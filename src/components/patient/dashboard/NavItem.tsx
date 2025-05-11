
import React from 'react';

interface NavItemProps {
  id: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

export const NavItem: React.FC<NavItemProps> = ({ id, icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center w-full px-4 py-3 rounded-lg transition-all ${
        isActive 
          ? 'bg-hypocrate-lightBlue text-hypocrate-blue font-medium' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <div className="flex items-center w-full text-left">
        {icon}
        <span className="ml-3">{label}</span>
      </div>
    </button>
  );
};

export default NavItem;

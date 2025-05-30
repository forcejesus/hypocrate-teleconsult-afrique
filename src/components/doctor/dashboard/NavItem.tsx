
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
      className={`flex items-center w-full px-4 py-3 rounded-lg transition-all text-left ${
        isActive 
          ? 'bg-indigo-50 text-indigo-700 font-medium' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <div className="flex items-center w-full">
        <span className="mr-3">{icon}</span>
        <span className="text-left">{label}</span>
      </div>
    </button>
  );
};

export default NavItem;

import type { FC } from 'react';
import { 
  MdDashboard, 
  MdShoppingCart, 
  MdInventory, 
  MdLocalOffer, 
  MdAnalytics, 
  MdAssessment, 
  MdSecurity, 
  MdSettings, 
  MdLogout,
  MdExpandMore
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import type { MenuProps } from '../types';

export const Sidebar: FC<MenuProps> = ({ activeMenu, setActiveMenu }) => {
  const navigate = useNavigate();
  const menuItems = [
    { name: 'Dashboard', icon: MdDashboard },
    { name: 'Sales', icon: MdShoppingCart },
    { name: 'Product', icon: MdInventory },
    { name: 'Promotions', icon: MdLocalOffer },
    { name: 'Analytics', icon: MdAnalytics },
    { name: 'Reports', icon: MdAssessment }
  ];

  const configItems = [
    { name: 'Privacy', icon: MdSecurity },
    { name: 'Settings', icon: MdSettings },
    { name: 'Log out', icon: MdLogout }
  ];

  const MenuItem: FC<{
    item: {
      name: string;
      icon: React.ComponentType<{ className?: string }>;
    };
    onClick: () => void;
    active: boolean;
  }> = ({ item, onClick, active }) => (
    <button
      key={item.name}
      onClick={onClick}
      className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
        active
          ? 'bg-gray-200 text-white'
          : 'text-gray-900 hover:bg-gray-800 hover:text-white'
      }`}
    >
      <item.icon className="w-5 h-5 mr-3" />
      {item.name}
    </button>
  );

  const handleLogout = () => {
     localStorage.removeItem("accessToken");
     localStorage.removeItem("userKey");
     Notify.success("Logout successful");
     navigate("/");
  }

  return (
    <div className="w-64  bg-gray-100 p-4 shadow-lg shadow-right min-h-screen p-6">
      {/* Logo */}
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-orange-400 rounded-lg mr-3 flex items-center justify-center">
          <span className="text-white font-bold text-sm">K</span>
        </div>
        <span className="text-white text-xl font-bold">Kapee</span>
      </div>

     
      <div className="mb-8">
        <span className="text-gray-400 text-xs uppercase tracking-wide mb-4 block">Admin Tools</span>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <MenuItem
              key={item.name}
              item={item}
              onClick={() => setActiveMenu(item.name)}
              active={activeMenu === item.name}
            />
          ))}
        </nav>
      </div>

      {/* Configuration */}
      <div>
        <span className="text-gray-600 text-xs uppercase tracking-wide mb-4 block">Configuration</span>
        <nav className="space-y-2">
          {configItems.map((item) => (
            <MenuItem
              key={item.name}
              item={item}
              onClick={ item.name ===  "Log out"? handleLogout: () => {}}
              active={false}
            />
          ))}
        </nav>
      </div>

      {/* Collapse button */}
      <button className="mt-8 flex items-center text-gray-400 hover:text-white">
        <MdExpandMore className="w-4 h-4 mr-2" />
        Collapse
      </button>
      
    </div>
  );
};
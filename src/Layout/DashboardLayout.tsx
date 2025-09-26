import type { ReactNode } from 'react';
import { Sidebar } from '../dashboardComponents/Sidebar';
import { Navbar } from '../dashboardComponents/Navbar';
import type { MenuProps } from '../types';

interface DashboardLayoutProps extends MenuProps {
  children: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  activeMenu, 
  setActiveMenu 
}) => (
  <div className="flex">
    <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
  
    <div className="flex-1 p-8">
        <Navbar />
      {children}
    </div>
  </div>
);
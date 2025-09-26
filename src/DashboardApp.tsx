import { useState } from 'react';
import { DashboardLayout } from './Layout/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { Sales } from './pages/Sales';
import { Products } from './pages/Products';
import { Reports } from './pages/Reports';
import { Analytics } from './pages/Analytics';
import { SettingsPage } from './pages/Settings';
import { Promotions } from './pages/Promotions';

export const DashboardApp = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  const renderPage = () => {
    switch (activeMenu) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Sales':
        return <Sales />;
      case 'Product':
        return <Products />;
      case 'Promotions':
        return <Promotions />;
      case 'Reports':
        return <Reports />;
      case 'Analytics':
        return <Analytics />;
      case 'Settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <DashboardLayout activeMenu={activeMenu} setActiveMenu={setActiveMenu}>
      {renderPage()}
    </DashboardLayout>
  );
};

export default DashboardApp;

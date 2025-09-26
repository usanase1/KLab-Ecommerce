import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from './Layout/DashboardLayout';
import Products from './components/Products';
import React from 'react';

// Create a simple dashboard page component since the import is missing
const DashboardPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
    <p>Welcome to your dashboard</p>
  </div>
);

function AppRouter() {
  const [activeMenu, setActiveMenu] = React.useState('dashboard');
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route 
          path="/dashboard" 
          element={
            <DashboardLayout 
              activeMenu={activeMenu} 
              setActiveMenu={setActiveMenu}
            >
              <DashboardPage />
            </DashboardLayout>
          } 
        >
          <Route index element={<DashboardPage />} />
          {/* Add more dashboard routes here */}
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

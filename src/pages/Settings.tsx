import { Card } from '../dashboardComponents/Card';
import { MdSettings } from 'react-icons/md';

export const SettingsPage = () => (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
        <MdSettings className="w-6 h-6 mr-2" />
        Settings
      </h1>
      <Card className="p-6">
        <p className="text-gray-600">Settings panel coming soon...</p>
      </Card>
    </div>
  );
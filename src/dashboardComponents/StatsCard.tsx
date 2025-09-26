import { Card } from './Card';
import { MdTrendingUp, MdTrendingDown } from 'react-icons/md';

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  period: string;
  positive?: boolean;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, period, positive = true }) => (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-2">
        <span className="text-gray-500 text-sm">{title}</span>
        <span className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
          positive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
        }`}>
          {positive ? <MdTrendingUp className="w-3 h-3" /> : <MdTrendingDown className="w-3 h-3" />}
          {change}%
        </span>
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-xs text-gray-400">{period}</div>
    </Card>
  );
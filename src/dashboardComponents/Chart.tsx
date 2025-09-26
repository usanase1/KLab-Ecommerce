import type { FC } from 'react';
import type { RevenueData, YearlyData } from '../types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  AreaChart,
  Area,
} from 'recharts';

type ChartProps = {
  type: 'revenue' | 'yearly' | 'circular';
  data?: RevenueData[] | YearlyData[];
  height?: number;
  percentage?: number;
};

const currencyFormatter = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export const Chart: FC<ChartProps> = ({ type, data, height = 220, ...props }) => {
  const RevenueChart = ({ data }: { data: RevenueData[] }) => (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} tickLine={false} axisLine={{ stroke: '#e5e7eb' }} />
          <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={{ stroke: '#e5e7eb' }} />
          <Tooltip formatter={(v: number) => currencyFormatter.format(v)} contentStyle={{ borderRadius: 8 }} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="footwear" name="Footwear" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="fashionware" name="Fashionware" fill="#67e8f9" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const YearlyAreaChart = ({ data }: { data: YearlyData[] }) => (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="yearlyColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} tickLine={false} axisLine={{ stroke: '#e5e7eb' }} />
          <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : `${v}`)} tickLine={false} axisLine={{ stroke: '#e5e7eb' }} />
          <Tooltip formatter={(v: number) => currencyFormatter.format(v)} contentStyle={{ borderRadius: 8 }} />
          <Area type="monotone" dataKey="value" name="Sales" stroke="#06b6d4" fillOpacity={1} fill="url(#yearlyColor)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );

  const CircularProgress = ({ percentage = 0, size = 140 }: { percentage?: number; size?: number }) => {
    const radius = (size - 16) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = Math.max(0, Math.min(percentage, 100));
    const dash = (progress / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e5e7eb" strokeWidth="12" fill="transparent" />
          <defs>
            <linearGradient id="circularGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#circularGradient)"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={`${dash} ${circumference}`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">{progress}%</span>
          <span className="text-xs text-gray-500">Sales Goal</span>
        </div>
      </div>
    );
  };

  switch (type) {
    case 'revenue':
      return <RevenueChart data={data as RevenueData[]} />;
    case 'yearly':
      return <YearlyAreaChart data={data as YearlyData[]} />;
    case 'circular':
      return <CircularProgress percentage={props.percentage} />;
    default:
      return <div>Chart type not supported</div>;
  }
};
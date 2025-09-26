import { Card } from '../dashboardComponents/Card';
import { MdAnalytics } from 'react-icons/md';
import { Chart } from '../dashboardComponents/Chart';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const trafficData = [
  { name: 'Organic', value: 48 },
  { name: 'Paid', value: 22 },
  { name: 'Social', value: 15 },
  { name: 'Email', value: 10 },
  { name: 'Referral', value: 5 },
];
const COLORS = ['#3b82f6', '#06b6d4', '#22c55e', '#f59e0b', '#ef4444'];

const funnel = [
  { step: 'Visitors', value: 12000 },
  { step: 'Product Views', value: 6400 },
  { step: 'Add to Cart', value: 2600 },
  { step: 'Checkout', value: 1500 },
  { step: 'Orders', value: 980 },
];

const salesTrend = [
  { month: 'Jan', sales: 8200 },
  { month: 'Feb', sales: 9400 },
  { month: 'Mar', sales: 11200 },
  { month: 'Apr', sales: 10800 },
  { month: 'May', sales: 12500 },
  { month: 'Jun', sales: 13900 },
];

export const Analytics = () => (
  <div className="p-6 space-y-6">
    <h1 className="text-2xl font-bold text-gray-900 flex items-center">
      <MdAnalytics className="w-6 h-6 mr-2" />
      Analytics
    </h1>

    {/* KPI cards */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="p-4">
        <div className="text-xs text-gray-500">Visitors</div>
        <div className="text-2xl font-bold text-gray-900">12,000</div>
        <div className="text-xs text-green-600">+8% vs prev</div>
      </Card>
      <Card className="p-4">
        <div className="text-xs text-gray-500">Conversion Rate</div>
        <div className="text-2xl font-bold text-gray-900">8.2%</div>
        <div className="text-xs text-green-600">+0.6pp vs prev</div>
      </Card>
      <Card className="p-4">
        <div className="text-xs text-gray-500">Avg. Session</div>
        <div className="text-2xl font-bold text-gray-900">3m 24s</div>
        <div className="text-xs text-gray-400">stable</div>
      </Card>
      <Card className="p-4">
        <div className="text-xs text-gray-500">Bounce Rate</div>
        <div className="text-2xl font-bold text-gray-900">41%</div>
        <div className="text-xs text-red-600">-1.1pp vs prev</div>
      </Card>
    </div>

    {/* Traffic sources + Circular goal */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Traffic Sources</h3>
          <span className="text-sm text-gray-500">Last 30 days</span>
        </div>
        <div style={{ width: '100%', height: 260 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={trafficData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100} paddingAngle={4}>
                {trafficData.map((_, idx) => (
                  <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Sales Goal</h3>
          <span className="text-sm text-gray-500">Q2</span>
        </div>
        <div className="flex justify-center">
          <Chart type="circular" percentage={72} />
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Conversion Funnel</h3>
          <span className="text-sm text-gray-500">Visitors to orders</span>
        </div>
        <div style={{ width: '100%', height: 260 }}>
          <ResponsiveContainer>
            <BarChart data={funnel} layout="vertical" margin={{ top: 8, right: 16, left: 16, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis dataKey="step" type="category" tick={{ fontSize: 12 }} width={100} />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 4, 4]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>

    {/* Sales trend */}
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Sales Trend</h3>
        <span className="text-sm text-gray-500">Monthly</span>
      </div>
      <div style={{ width: '100%', height: 280 }}>
        <ResponsiveContainer>
          <BarChart data={salesTrend} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} tickLine={false} axisLine={{ stroke: '#e5e7eb' }} />
            <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={{ stroke: '#e5e7eb' }} />
            <Tooltip />
            <Bar dataKey="sales" fill="#06b6d4" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  </div>
);
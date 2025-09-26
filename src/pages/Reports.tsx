import { Card } from '../dashboardComponents/Card';
import { MdAssessment } from 'react-icons/md';
import { Chart } from '../dashboardComponents/Chart';
import { products as catalog } from '../data/products';

// Mock revenue data for the report period
const revenueData = [
  { month: 'Jan', footwear: 12500, fashionware: 8400 },
  { month: 'Feb', footwear: 15800, fashionware: 9600 },
  { month: 'Mar', footwear: 17200, fashionware: 11000 },
  { month: 'Apr', footwear: 14900, fashionware: 9900 },
  { month: 'May', footwear: 18800, fashionware: 13200 },
  { month: 'Jun', footwear: 20100, fashionware: 14600 },
];

export const Reports = () => (
  <div className="p-6 space-y-6">
    <h1 className="text-2xl font-bold text-gray-900 flex items-center">
      <MdAssessment className="w-6 h-6 mr-2" />
      Reports
    </h1>

    {/* Filters */}
    <Card className="p-4">
      <div className="flex flex-wrap items-center gap-3">
        <label className="text-sm text-gray-600">Period</label>
        <select className="border rounded px-3 py-2 text-sm">
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>Year to date</option>
        </select>
        <button className="ml-auto px-3 py-2 rounded bg-yellow-400 text-black hover:bg-yellow-500 text-sm">Export CSV</button>
      </div>
    </Card>

    {/* KPIs */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="p-4">
        <div className="text-xs text-gray-500">Total Sales</div>
        <div className="text-2xl font-bold text-gray-900">$119,400</div>
        <div className="text-xs text-green-600">+12% vs prev</div>
      </Card>
      <Card className="p-4">
        <div className="text-xs text-gray-500">Orders</div>
        <div className="text-2xl font-bold text-gray-900">2,146</div>
        <div className="text-xs text-green-600">+4% vs prev</div>
      </Card>
      <Card className="p-4">
        <div className="text-xs text-gray-500">Avg. Order Value</div>
        <div className="text-2xl font-bold text-gray-900">$55.65</div>
        <div className="text-xs text-gray-400">stable</div>
      </Card>
      <Card className="p-4">
        <div className="text-xs text-gray-500">Refunds</div>
        <div className="text-2xl font-bold text-gray-900">$1,240</div>
        <div className="text-xs text-red-600">-2% vs prev</div>
      </Card>
    </div>

    {/* Revenue chart */}
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Revenue by Month</h3>
        <span className="text-sm text-gray-500">Footwear vs Fashionware</span>
      </div>
      <Chart type="revenue" data={revenueData} />
    </Card>

    {/* Top products table */}
    <Card className="p-0 overflow-hidden">
      <div className="px-6 py-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
        <span className="text-sm text-gray-500">by rating count</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50 border-t border-b">
            <tr>
              <th className="px-6 py-3 font-semibold text-gray-700">Product</th>
              <th className="px-6 py-3 font-semibold text-gray-700">Category</th>
              <th className="px-6 py-3 font-semibold text-gray-700">Price</th>
              <th className="px-6 py-3 font-semibold text-gray-700">Rating</th>
              <th className="px-6 py-3 font-semibold text-gray-700">Orders</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {catalog
              .slice() // copy
              .sort((a, b) => b.rating.count - a.rating.count)
              .slice(0, 8)
              .map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 flex items-center gap-3">
                    <img src={p.image} alt={p.name} className="w-10 h-10 object-contain rounded border" />
                    <div className="font-medium text-gray-900">{p.name}</div>
                  </td>
                  <td className="px-6 py-3 text-gray-600">{p.category}</td>
                  <td className="px-6 py-3 text-gray-900 font-medium">${p.price.toFixed(2)}</td>
                  <td className="px-6 py-3 text-gray-800">{p.rating.rate.toFixed(1)} ({p.rating.count})</td>
                  <td className="px-6 py-3 text-gray-600">{Math.max(50, Math.round(p.rating.count * 0.4))}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Card>
  </div>
);
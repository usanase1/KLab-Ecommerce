import { Card } from '../dashboardComponents/Card';
import { StatsCard } from '../dashboardComponents/StatsCard';
import { Chart } from '../dashboardComponents/Chart';
import { MdTrendingUp } from 'react-icons/md';
import mockData from '../types/mocData';

export const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4"></div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Welcome back Mathew Anderson!</h2>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">$2,763</div>
              <div className="text-sm text-gray-500">Today's Sales</div>
              <div className="text-green-500 text-sm flex items-center justify-center">
                <MdTrendingUp className="w-4 h-4 mr-1" /> 39%
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">39%</div>
              <div className="text-sm text-gray-500">Overall Performance</div>
              <div className="text-green-500 text-sm">
                <MdTrendingUp className="w-4 h-4 mx-auto" />
              </div>
            </div>
            <div className="w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-6xl">👨‍💼</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {mockData.stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Updates */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Updates</h3>
            <span className="text-sm text-gray-500">Daily view of Profit</span>
          </div>
          <Chart type="revenue" data={mockData.revenueData} />
          <div className="flex justify-center space-x-4 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
              <span className="text-xs text-gray-600">Footwear</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-cyan-300 rounded mr-2"></div>
              <span className="text-xs text-gray-600">Fashionware</span>
            </div>
          </div>
        </Card>

        {/* Sales Overview */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Sales Overview</h3>
            <span className="text-sm text-gray-500">Every Month</span>
          </div>
          <div className="flex justify-center mb-6">
            <Chart type="circular" percentage={75} />
          </div>
          <div className="text-center mb-4">
            <div className="text-2xl font-bold text-gray-900">$800,325</div>
          </div>
          <div className="flex justify-between">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">$21,256</div>
              <div className="text-sm text-gray-500">Profit</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">$22,325</div>
              <div className="text-sm text-gray-500">Expense</div>
            </div>
          </div>
        </Card>

        {/* Monthly Earnings */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Monthly Earnings</h3>
            <span className="text-green-500 text-sm flex items-center">
              <MdTrendingUp className="w-4 h-4 mr-1" /> +12%
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-4">$8,320</div>
          <div className="h-16 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-lg mb-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-lg opacity-70"></div>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 64">
              <path
                d="M0,32 Q100,10 200,32 T400,32"
                stroke="rgba(59, 130, 246, 0.5)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Stats */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Weekly Stats</h3>
          <span className="text-sm text-gray-500 mb-4 block">Average sales</span>
          <div className="h-32 mb-4 relative">
            <svg className="w-full h-full" viewBox="0 0 300 120">
              <defs>
                <linearGradient id="weeklyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <path
                d="M20,80 Q80,40 140,60 T260,50"
                stroke="url(#weeklyGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M20,80 Q80,40 140,60 T260,50 L260,100 L20,100 Z"
                fill="url(#weeklyGradient)"
                opacity="0.3"
              />
            </svg>
          </div>
          <div className="space-y-3">
            {mockData.weeklyStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    stat.color === 'cyan' ? 'bg-cyan-100' :
                    stat.color === 'purple' ? 'bg-purple-100' :
                    'bg-orange-100'
                  }`}>
                    <stat.icon className={`w-4 h-4 ${
                      stat.color === 'cyan' ? 'text-cyan-600' :
                      stat.color === 'purple' ? 'text-purple-600' :
                      'text-orange-600'
                    }`} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{stat.title}</div>
                    <div className="text-xs text-gray-500">{stat.subtitle}</div>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">{stat.value}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Yearly Sales */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Yearly Sales</h3>
          <span className="text-sm text-gray-500 mb-4 block">Every Month</span>
          <Chart type="yearly" data={mockData.yearlyData} />
          <div className="flex justify-between mt-6">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">$38,554</div>
              <div className="text-sm text-gray-500">Total Sales</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">$6,963</div>
              <div className="text-sm text-gray-500">Expenses</div>
            </div>
          </div>
        </Card>

        {/* Payment Gateways */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Gateways</h3>
          <span className="text-sm text-gray-500 mb-4 block">Platform for income</span>
          <div className="space-y-4">
            {mockData.payments.map((payment, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    payment.color === 'blue' ? 'bg-blue-100' :
                    payment.color === 'purple' ? 'bg-purple-100' :
                    payment.color === 'yellow' ? 'bg-yellow-100' :
                    'bg-red-100'
                  }`}>
                    <payment.icon className={`w-4 h-4 ${
                      payment.color === 'blue' ? 'text-blue-600' :
                      payment.color === 'purple' ? 'text-purple-600' :
                      payment.color === 'yellow' ? 'text-yellow-600' :
                      'text-red-600'
                    }`} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{payment.name}</div>
                    <div className="text-xs text-gray-500">{payment.description}</div>
                  </div>
                </div>
                <span className={`text-sm font-medium ${payment.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {payment.amount}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full text-center text-cyan-500 text-sm mt-4 hover:text-cyan-600 transition-colors">
            View all transactions
          </button>
        </Card>
      </div>
    </div>
  );
}
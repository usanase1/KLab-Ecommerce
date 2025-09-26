// Re-export all types for easier imports
export * from './product.types.js';
export * from './cart.types.js';
export * from './auth.types.js';

// Common props
export interface ChildrenProps {
  children: React.ReactNode;
  className?: string;
}

// Card component props
export interface CardProps extends ChildrenProps {}

// Chart component props
export interface ChartProps {
  type: 'revenue' | 'yearly' | 'circular';  
  data?: any;
  height?: string;
  percentage?: number;
}

// StatsCard component props
export interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  period: string;
  positive?: boolean;
}

// Sidebar and Navbar props
export interface MenuProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

// DashboardLayout props
export interface DashboardLayoutProps extends MenuProps, ChildrenProps {}

// Mock data types
export interface RevenueData {
  month: string;
  footwear: number;
  fashionware: number;
}

export interface YearlyData {
  month: string;
  value: number;
}

export interface StatItem {
  title: string;
  value: string;
  change: number;
  period: string;
  positive: boolean;
}

export interface PaymentItem {
  name: string;
  description: string;
  amount: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WeeklyStat {
  title: string;
  subtitle: string;
  value: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface MockData {
  revenueData: RevenueData[];
  yearlyData: YearlyData[];
  stats: StatItem[];
  payments: PaymentItem[];
  weeklyStats: WeeklyStat[];
}

import type { ComponentType } from 'react';
import type { IconType } from 'react-icons';

export interface MenuProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export interface MenuItemProps {
  item: {
    name: string;
    icon: ComponentType<{ className?: string }>;
  };
  onClick: () => void;
  active: boolean;
}

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
  icon: IconType;
}

export interface WeeklyStat {
  title: string;
  subtitle: string;
  value: string;
  color: string;
  icon: IconType;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface MockData {
  revenueData: RevenueData[];
  yearlyData: YearlyData[];
  stats: StatItem[];
  payments: PaymentItem[];
  weeklyStats: WeeklyStat[];
}

import { MdShoppingCart, MdAttachMoney, MdPeople } from "react-icons/md";
import { SiPaypal, SiVisa, SiMastercard, SiGooglepay } from "react-icons/si";
import type { MockData } from "../types";

const mockData: MockData = {
  revenueData: [
    { month: "Jan", footwear: 30, fashionware: 45 },
    { month: "Feb", footwear: 22, fashionware: 35 },
    { month: "Mar", footwear: 40, fashionware: 28 },
    { month: "Apr", footwear: 18, fashionware: 25 },
    { month: "May", footwear: 50, fashionware: 38 },
    { month: "Jun", footwear: 35, fashionware: 42 },
  ],
  yearlyData: [
    { month: "Jan", value: 12000 },
    { month: "Feb", value: 15000 },
    { month: "Mar", value: 18000 },
    { month: "Apr", value: 22000 },
    { month: "May", value: 26000 },
    { month: "Jun", value: 30000 },
    { month: "Jul", value: 28000 },
    { month: "Aug", value: 32000 },
    { month: "Sep", value: 35000 },
    { month: "Oct", value: 38000 },
    { month: "Nov", value: 42000 },
    { month: "Dec", value: 46000 },
  ],
  stats: [
    { title: "Total Sales", value: "$24,560", change: 12, period: "vs last month", positive: true },
    { title: "Orders", value: "1,245", change: 5, period: "vs last week", positive: true },
    { title: "New Customers", value: "320", change: 2, period: "vs last week", positive: true },
    { title: "Refunds", value: "$1,120", change: 3, period: "vs last month", positive: false },
  ],
  payments: [
    { name: "PayPal", description: "Payment received", amount: "+$2,430", color: "blue", icon: SiPaypal },
    { name: "Visa", description: "Payment sent", amount: "-$560", color: "purple", icon: SiVisa },
    { name: "Mastercard", description: "Payment received", amount: "+$1,020", color: "yellow", icon: SiMastercard },
    { name: "Google Pay", description: "Payment failed", amount: "-$120", color: "red", icon: SiGooglepay },
  ],
  weeklyStats: [
    { title: "Orders", subtitle: "This week", value: "1,245", color: "cyan", icon: MdShoppingCart },
    { title: "Revenue", subtitle: "This week", value: "$8,320", color: "purple", icon: MdAttachMoney },
    { title: "New Users", subtitle: "This week", value: "320", color: "orange", icon: MdPeople },
  ],
};

export default mockData;
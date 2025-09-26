import { Card } from '../dashboardComponents/Card';
import { MdShoppingCart, MdEdit, MdDelete } from 'react-icons/md';

const sales = [
  { id: 1, customer: "Alice", product: "Laptop", quantity: 1, total: "$1200" },
  { id: 2, customer: "Bob", product: "Smartphone", quantity: 2, total: "$1600" },
  { id: 3, customer: "Charlie", product: "Headphones", quantity: 3, total: "$450" },
  { id: 4, customer: "Diana", product: "Smartwatch", quantity: 1, total: "$250" },
];

export const Sales = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
      <MdShoppingCart className="w-6 h-6 mr-2" />
      Sales
    </h1>

    <Card className="p-6">
      <table className="min-w-full border border-gray-200 text-left text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Customer</th>
            <th className="px-4 py-2 border">Product</th>
            <th className="px-4 py-2 border">Quantity</th>
            <th className="px-4 py-2 border">Total</th>
            <th className="px-4 py-2 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{sale.id}</td>
              <td className="px-4 py-2 border">{sale.customer}</td>
              <td className="px-4 py-2 border">{sale.product}</td>
              <td className="px-4 py-2 border">{sale.quantity}</td>
              <td className="px-4 py-2 border">{sale.total}</td>
              <td className="px-4 py-2 border text-center space-x-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <MdEdit className="inline w-5 h-5" />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <MdDelete className="inline w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </div>
);

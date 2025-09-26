import { Card } from '../dashboardComponents/Card';
import { MdLocalOffer, MdAdd, MdDiscount } from 'react-icons/md';
import { products as catalog } from '../data/products';

export const Promotions = () => {
  const saleProducts = catalog.filter((p) => p.isOnSale);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 flex items-center">
        <MdLocalOffer className="w-6 h-6 mr-2" />
        Promotions
      </h1>

      {/* Quick KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="text-xs text-gray-500">Active Sale Products</div>
          <div className="text-2xl font-bold text-gray-900">{saleProducts.length}</div>
          <div className="text-xs text-green-600">on sale now</div>
        </Card>
        <Card className="p-4">
          <div className="text-xs text-gray-500">Top Discount</div>
          <div className="text-2xl font-bold text-gray-900">
            {(() => {
              const maxDisc = saleProducts.reduce((m, p) => {
                const d = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
                return Math.max(m, d);
              }, 0);
              return `${maxDisc}%`;
            })()}
          </div>
          <div className="text-xs text-gray-400">best current deal</div>
        </Card>
        <Card className="p-4">
          <div className="text-xs text-gray-500">Coupons</div>
          <div className="text-2xl font-bold text-gray-900">3</div>
          <div className="text-xs text-gray-400">example count</div>
        </Card>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <MdDiscount className="w-5 h-5 mr-2" /> Create Coupon
          </h3>
          <p className="text-sm text-gray-600 mb-4">Set a percentage or fixed discount, validity dates and usage limits.</p>
          <button className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">
            <MdAdd className="w-4 h-4" /> New Coupon
          </button>
        </Card>
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Banner Promotion</h3>
          <div className="rounded-lg border bg-gradient-to-r from-yellow-100 to-white p-6 flex items-center justify-between">
            <div>
              <div className="text-xl font-bold text-gray-900 mb-1">Fall Sale</div>
              <div className="text-sm text-gray-600 mb-3">Up to 30% off selected categories. Customize headline and dates.</div>
              <button className="text-sm px-3 py-2 rounded border hover:bg-gray-50">Edit Banner</button>
            </div>
            <div className="hidden md:block w-32 h-20 bg-yellow-300/40 rounded-lg" />
          </div>
        </Card>
      </div>

      {/* Sale products */}
      <Card className="p-0 overflow-hidden">
        <div className="px-6 py-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Sale Products</h3>
          <span className="text-sm text-gray-500">auto-sourced from catalog</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-50 border-t border-b">
              <tr>
                <th className="px-6 py-3 font-semibold text-gray-700">Product</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Category</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Price</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Original</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Discount</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {saleProducts.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 flex items-center gap-3">
                    <img src={p.image} alt={p.name} className="w-10 h-10 object-contain rounded border" />
                    <div className="font-medium text-gray-900">{p.name}</div>
                  </td>
                  <td className="px-6 py-3 text-gray-600">{p.category}</td>
                  <td className="px-6 py-3 text-gray-900 font-medium">${p.price.toFixed(2)}</td>
                  <td className="px-6 py-3 text-gray-400 line-through">${(p.originalPrice ?? p.price).toFixed(2)}</td>
                  <td className="px-6 py-3 text-green-600 font-medium">
                    {p.originalPrice ? `${Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)}%` : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import type { Order } from "../types/order.types"

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const raw = localStorage.getItem("orders")
    if (!raw) return
    try {
      const parsed = JSON.parse(raw) as Order[]
      setOrders(Array.isArray(parsed) ? parsed : [])
    } catch {
      setOrders([])
    }
  }, [])

  const hasOrders = useMemo(() => orders.length > 0, [orders])

  if (!hasOrders) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Orders</h1>
        <p className="text-gray-600 mb-6">You have no orders yet.</p>
        <Link to="/" className="inline-block bg-yellow-400 text-black px-6 py-2 rounded font-medium hover:bg-yellow-500">Start Shopping</Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Orders</h1>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="hidden md:grid grid-cols-12 bg-gray-100 px-6 py-3 text-sm font-medium text-gray-600 uppercase tracking-wider">
          <div className="col-span-3">Order</div>
          <div className="col-span-3">Placed</div>
          <div className="col-span-2 text-center">Items</div>
          <div className="col-span-2 text-right">Total</div>
          <div className="col-span-2 text-right">Status</div>
        </div>

        {orders.map((o) => (
          <div key={o.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b last:border-b-0">
            <div className="md:col-span-3">
              <div className="font-mono font-semibold">{o.id}</div>
              <Link to={`/orders/success/${o.id}`} className="text-sm text-blue-600 hover:text-blue-800">View details</Link>
            </div>
            <div className="md:col-span-3 flex items-center">{new Date(o.createdAt).toLocaleString()}</div>
            <div className="md:col-span-2 flex items-center justify-center">{o.items.reduce((n, it) => n + it.quantity, 0)}</div>
            <div className="md:col-span-2 flex items-center justify-end font-bold">${o.total.toFixed(2)}</div>
            <div className="md:col-span-2 flex items-center justify-end">
              <span className="px-2 py-1 text-xs rounded bg-green-50 text-green-700 border border-green-200">{o.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

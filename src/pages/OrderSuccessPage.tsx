import { Link, useParams } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import type { Order } from "../types/order.types"

export default function OrderSuccessPage() {
  const { orderId } = useParams()
  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem("orders")
    if (!raw) return
    try {
      const orders = JSON.parse(raw) as Order[]
      const found = orders.find(o => o.id === orderId)
      if (found) setOrder(found)
    } catch {}
  }, [orderId])

  const formattedDate = useMemo(() => order ? new Date(order.createdAt).toLocaleString() : "", [order])

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center">
      <svg className="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
      <h1 className="text-2xl font-bold text-gray-900">Thank you! Your order has been placed.</h1>
      <p className="text-gray-600 mt-2">Order ID: <span className="font-mono font-medium">{orderId}</span></p>
      {order && (
        <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6 text-left">
          <div className="flex justify-between">
            <div>
              <div className="text-sm text-gray-500">Placed on</div>
              <div className="font-medium">{formattedDate}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Total</div>
              <div className="font-bold">${order.total.toFixed(2)}</div>
            </div>
          </div>
          <div className="border-t my-4" />
          <h2 className="font-semibold mb-3">Items</h2>
          <ul className="space-y-2">
            {order.items.map(it => (
              <li key={`${it.id}-${it.name}`} className="flex justify-between text-sm">
                <span className="truncate pr-2">{it.name} × {it.quantity}</span>
                <span className="font-medium">${(it.price * it.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-8 flex gap-3 justify-center">
        <Link to="/orders" className="bg-yellow-400 text-black px-5 py-2 rounded font-medium hover:bg-yellow-500">View Orders</Link>
        <Link to="/" className="px-5 py-2 rounded border border-gray-300 hover:bg-gray-50">Continue Shopping</Link>
      </div>
    </div>
  )
}

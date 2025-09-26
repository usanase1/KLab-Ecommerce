import { FormEvent, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import type { ShippingInfo, Order } from "../types/order.types"

function generateOrderId() {
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase()
  const date = new Date()
  const ymd = `${date.getFullYear()}${String(date.getMonth()+1).padStart(2,'0')}${String(date.getDate()).padStart(2,'0')}`
  return `ORD-${ymd}-${rand}`
}

export default function CheckoutPage() {
  const navigate = useNavigate()
  const { cart, getCartSubtotal, getCartTotal, clearCart } = useCart()

  const [shipping, setShipping] = useState<ShippingInfo>({
    fullName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  })
  const [error, setError] = useState<string | null>(null)

  const totals = useMemo(() => {
    const subtotal = getCartSubtotal()
    const total = getCartTotal()
    const tax = total - subtotal
    return { subtotal, tax, total }
  }, [getCartSubtotal, getCartTotal])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    if (cart.length === 0) {
      setError("Your cart is empty.")
      return
    }
    // minimal validation
    if (!shipping.fullName || !shipping.email || !shipping.phone || !shipping.addressLine1 || !shipping.city || !shipping.postalCode || !shipping.country) {
      setError("Please fill in all required fields.")
      return
    }

    const order: Order = {
      id: generateOrderId(),
      createdAt: new Date().toISOString(),
      items: cart,
      subtotal: totals.subtotal,
      tax: totals.tax,
      total: totals.total,
      shipping,
      status: "placed",
    }

    try {
      const existing = localStorage.getItem("orders")
      const orders = existing ? (JSON.parse(existing) as Order[]) : []
      orders.unshift(order)
      localStorage.setItem("orders", JSON.stringify(orders))

      clearCart()
      navigate(`/orders/success/${order.id}`)
    } catch (err) {
      setError("Failed to place order. Please try again.")
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Checkout</h1>

      {error && <div className="mb-4 p-3 rounded bg-red-50 text-red-700 border border-red-200">{error}</div>}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-6 space-y-4">
          <h2 className="text-lg font-semibold">Shipping Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Full Name *</label>
              <input className="w-full border rounded px-3 py-2" value={shipping.fullName} onChange={e=>setShipping(s=>({...s, fullName:e.target.value}))} />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email *</label>
              <input type="email" className="w-full border rounded px-3 py-2" value={shipping.email} onChange={e=>setShipping(s=>({...s, email:e.target.value}))} />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone *</label>
              <input className="w-full border rounded px-3 py-2" value={shipping.phone} onChange={e=>setShipping(s=>({...s, phone:e.target.value}))} />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Address Line 1 *</label>
              <input className="w-full border rounded px-3 py-2" value={shipping.addressLine1} onChange={e=>setShipping(s=>({...s, addressLine1:e.target.value}))} />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Address Line 2</label>
              <input className="w-full border rounded px-3 py-2" value={shipping.addressLine2} onChange={e=>setShipping(s=>({...s, addressLine2:e.target.value}))} />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">City *</label>
              <input className="w-full border rounded px-3 py-2" value={shipping.city} onChange={e=>setShipping(s=>({...s, city:e.target.value}))} />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">State/Province</label>
              <input className="w-full border rounded px-3 py-2" value={shipping.state} onChange={e=>setShipping(s=>({...s, state:e.target.value}))} />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Postal Code *</label>
              <input className="w-full border rounded px-3 py-2" value={shipping.postalCode} onChange={e=>setShipping(s=>({...s, postalCode:e.target.value}))} />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Country *</label>
              <input className="w-full border rounded px-3 py-2" value={shipping.country} onChange={e=>setShipping(s=>({...s, country:e.target.value}))} />
            </div>
          </div>

          <div className="pt-2">
            <button type="submit" className="bg-yellow-400 text-black px-6 py-3 rounded font-medium hover:bg-yellow-500">Place Order</button>
          </div>
        </form>

        <aside className="bg-white border border-gray-200 rounded-lg p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3">
            {cart.length === 0 ? (
              <div className="text-gray-600">No items in cart.</div>
            ) : (
              cart.map(item => (
                <div key={`${item.id}-${item.name}`} className="flex justify-between text-sm">
                  <div className="truncate pr-2">{item.name} × {item.quantity}</div>
                  <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))
            )}
          </div>

          <div className="border-t my-4"></div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-gray-600">Subtotal</span><span className="font-medium">${totals.subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Tax</span><span className="font-medium">${totals.tax.toFixed(2)}</span></div>
            <div className="flex justify-between text-base font-bold"><span>Total</span><span>${totals.total.toFixed(2)}</span></div>
          </div>
        </aside>
      </div>
    </div>
  )
}

import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"
import { CartItem } from "../types/cart.types"

export default function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getCartSubtotal,
    getCartTotal,
    getCartCount,
    clearCart,
  } = useCart()
  
  const TAX_RATE = 0.1 // 10% tax rate

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
            />
          </svg>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some products to get started!</p>
          <Link 
            to="/"
            className="inline-block bg-yellow-400 text-black px-6 py-2 rounded font-medium hover:bg-yellow-500 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart ({getCartCount()} items)</h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="hidden md:grid grid-cols-12 bg-gray-100 px-6 py-3 text-sm font-medium text-gray-600 uppercase tracking-wider">
          <div className="col-span-5">Product</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-3 text-center">Quantity</div>
          <div className="col-span-2 text-right">Total</div>
        </div>
        
        {cart.map((item) => (
          <div key={`${item.id}-${item.name}`} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b border-gray-200 last:border-b-0">
            <div className="md:col-span-5 flex items-center">
              <img
                src={item.image || "/placeholder.svg?height=100&width=100&query=product"}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.category}</p>
              </div>
            </div>
            
            <div className="md:col-span-2 flex items-center justify-center">
              <div className="text-center">
                <span className="font-bold text-gray-900">${item.price.toFixed(2)}</span>
                {item.originalPrice && (
                  <span className="block text-sm text-gray-500 line-through">${item.originalPrice.toFixed(2)}</span>
                )}
              </div>
            </div>
            
            <div className="md:col-span-3 flex items-center justify-center">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  onClick={() => handleQuantityChange(item, item.quantity - 1)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-md"
                >
                  -
                </button>
                <span className="px-4 py-1 bg-white">{item.quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(item, item.quantity + 1)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-md"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="md:col-span-2 flex items-center justify-between">
              <span className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="text-gray-400 hover:text-red-500 p-1"
                aria-label="Remove item"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        ))}

        <div className="p-6 bg-gray-50">
          <div className="max-w-md ml-auto space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${getCartSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax (10%)</span>
              <span className="font-medium">${(getCartSubtotal() * TAX_RATE).toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-200 my-2"></div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
          </div>
          
          <div className="mt-6 space-y-3">
            <button 
              onClick={clearCart}
              className="w-full text-center text-sm text-red-600 hover:text-red-800 font-medium"
            >
              Clear Cart
            </button>
            <Link 
              to="/checkout"
              className="block w-full bg-yellow-400 text-black py-3 px-6 rounded font-medium hover:bg-yellow-500 transition-colors text-center"
            >
              Proceed to Checkout
            </Link>
            <div className="text-center">
              <Link to="/" className="text-sm text-blue-600 hover:text-blue-800">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

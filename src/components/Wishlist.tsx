import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useCart()

  if (wishlist.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Wishlist</h1>
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-6">Browse products and add some favorites!</p>
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

  const moveToCart = (id: number) => {
    const item = wishlist.find(w => w.id === id)
    if (!item) return
    // Add to cart with at least quantity 1
    addToCart({ ...item, quantity: item.quantity || 1 })
    removeFromWishlist(id)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Wishlist ({wishlist.length} items)</h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="hidden md:grid grid-cols-12 bg-gray-100 px-6 py-3 text-sm font-medium text-gray-600 uppercase tracking-wider">
          <div className="col-span-6">Product</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-4 text-right">Actions</div>
        </div>

        {wishlist.map(item => (
          <div key={`${item.id}-${item.name}`} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b border-gray-200 last:border-b-0">
            <div className="md:col-span-6 flex items-center">
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
              <span className="font-bold text-gray-900">${item.price.toFixed(2)}</span>
            </div>

            <div className="md:col-span-4 flex items-center justify-end space-x-3">
              <button
                onClick={() => moveToCart(item.id)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="text-gray-500 hover:text-red-600 px-3 py-2"
                aria-label="Remove from wishlist"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link to="/cart" className="text-sm text-blue-600 hover:text-blue-800">
          Go to Cart
        </Link>
      </div>
    </div>
  )
}

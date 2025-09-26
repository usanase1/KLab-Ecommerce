import ProductCard from "../components/ProductCard"
import { useCart } from "../context/CartContext"
import { Product } from "../types/product.types"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { Notify } from "notiflix"


const products: Product[] = [
 
]

const hotDealProduct: Product = {
  id: 11,
  name: "Apple Watch Series 5",
  price: 499,
  originalPrice: 599,
  image: "/apple-watch-series-5-white.jpg",
  category: "ELECTRONICS",
  discount: "17% OFF",
  soldCount: 50,
  availableCount: 75,
  rating: 4.8,
  isOnSale: true
}

export default function Products() {
  const { addToCart, getCartCount } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()

  const bestSellingProducts = products.slice(0, 6)
  const featuredProducts = products.slice(6, 10)

  const ensureLoggedIn = (action: () => void) => {
    if (!user) {
      Notify.warning('Please log in to add items to your cart')
      navigate('/login')
      return
    }
    action()
  }

  const toCartItem = (p: Product) => {
    const numericRating = typeof (p as any).rating === 'number' ? (p as any).rating : (p as any).rating?.rate ?? undefined
    return { ...p, rating: numericRating, quantity: 1 } as any
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <div className="text-right text-sm text-gray-600">Cart: {getCartCount()} items</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">BEST SELLING PRODUCTS</h2>
            <div className="w-24 h-1 bg-yellow-400 mt-2"></div>
          </div>
          <button className="bg-gray-800 text-white px-6 py-2 text-sm font-medium hover:bg-gray-700 transition-colors">
            VIEW ALL
          </button>
        </div>

        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-12">
            {bestSellingProducts.map((product: Product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={(p: Product) => ensureLoggedIn(() => addToCart(toCartItem(p)))} 
              />
            ))}
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hot Deals Section */}
          <div className="lg:col-span-1">
            <div className="border-2 border-yellow-400 bg-white p-6 rounded-lg">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800">HOT DEALS</h3>
                <div className="w-16 h-1 bg-yellow-400 mt-2"></div>
              </div>

              <div className="relative mb-4">
                <span className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">
                  {hotDealProduct.discount}
                </span>
                <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <img
                  src={hotDealProduct.image || "/placeholder.svg"}
                  alt={hotDealProduct.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div className="text-sm text-gray-600 mb-2">{hotDealProduct.category}</div>
              <h4 className="font-semibold text-gray-800 mb-3">{hotDealProduct.name}</h4>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-gray-800">${hotDealProduct.price}.00</span>
                <span className="text-gray-500 line-through">${hotDealProduct.originalPrice}.00</span>
              </div>

              {hotDealProduct.soldCount !== undefined && hotDealProduct.availableCount !== undefined && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Already Sold: {hotDealProduct.soldCount}</span>
                    <span>Available: {hotDealProduct.availableCount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{
                        width: `${(hotDealProduct.soldCount / (hotDealProduct.soldCount + hotDealProduct.availableCount)) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              )}

              <button
                onClick={() => ensureLoggedIn(() => addToCart(toCartItem(hotDealProduct)))}
                className="w-full bg-yellow-400 text-black py-2 px-4 rounded font-medium hover:bg-yellow-500 transition-colors"
              >
                BUY NOW
              </button>
            </div>
          </div>

          {/* Featured Products Section */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800">FEATURED PRODUCTS</h3>
                <div className="w-20 h-1 bg-yellow-400 mt-2"></div>
              </div>
              <button className="bg-gray-800 text-white px-6 py-2 text-sm font-medium hover:bg-gray-700 transition-colors">
                VIEW ALL
              </button>
            </div>

            <div className="relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-12">
                {featuredProducts.map((product: Product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={(p: Product) => ensureLoggedIn(() => addToCart(toCartItem(p)))} 
                  />
                ))}
              </div>

              <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">FREE SHIPPING</h4>
              <p className="text-sm text-gray-600">On All Orders Over $99</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">EASY RETURNS</h4>
              <p className="text-sm text-gray-600">30 Days Return Policy</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">SECURE PAYMENT</h4>
              <p className="text-sm text-gray-600">100% Secure Payment</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">24/7 SUPPORT</h4>
              <p className="text-sm text-gray-600">Dedicated Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

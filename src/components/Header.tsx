import { User, Heart, ShoppingCart, Search, ChevronDown, X } from "lucide-react"

export default function Header() {
  return (
    <>
      <div className="bg-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm">SUMMER SALE, Get 40% Off for all products.</span>
            <button className="bg-yellow-400 text-black px-4 py-1 rounded text-sm font-medium hover:bg-yellow-500">
              Click Here
            </button>
          </div>
          <button className="text-white hover:text-gray-300">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-yellow-400 text-black py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <span>ENGLISH</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center space-x-1">
              <span>$ DOLLAR (US)</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <span>WELCOME TO OUR STORE!</span>
            <a href="#" className="hover:underline">
              BLOG
            </a>
            <a href="#" className="hover:underline">
              FAQ
            </a>
            <a href="#" className="hover:underline">
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      <header className="bg-white py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-black">kapee.</h1>
          </div>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative flex">
              <input
                type="text"
                placeholder="Search for products, categories, brands, sku..."
                className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <select className="px-4 py-3 border-l-0 border border-gray-300 bg-gray-50 text-gray-700">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Accessories</option>
              </select>
              <button className="bg-yellow-400 text-black px-6 py-3 hover:bg-yellow-500">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <div className="text-sm">
                <div className="text-gray-500">HELLO,</div>
                <div className="font-medium">SIGN IN</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <div className="text-sm">
                <div className="text-gray-500">Cart</div>
                <div className="font-medium">$0.00</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

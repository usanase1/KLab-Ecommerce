export default function Header() {
  return (
    <header className="bg-yellow-400 text-black py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">kapee.</h1>
        </div>

        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products, categories, brands etc..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-1 rounded text-sm">
              All Categories
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <span className="text-sm">👤</span>
            <span className="text-sm">Sign In</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm">❤️</span>
            <span className="text-sm">0</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm">🛒</span>
            <span className="text-sm">Cart</span>
            <span className="bg-black text-white text-xs px-2 py-1 rounded-full">0</span>
          </div>
        </div>
      </div>
    </header>
  )
}

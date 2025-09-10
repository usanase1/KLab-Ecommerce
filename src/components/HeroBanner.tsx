import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroBanner() {
  return (
    <div className="bg-white py-8 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
          <div className="space-y-6">
            <div className="text-yellow-500 text-sm font-medium tracking-wide">BEST SMARTPHONE</div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              WIRELESS
              <br />
              CHARGING STAND
            </h1>
            <p className="text-2xl text-gray-600 font-medium">Up To 70% Off</p>
            <button className="bg-yellow-400 text-black px-8 py-3 rounded font-bold hover:bg-yellow-500 transition-colors text-sm tracking-wide">
              BUY NOW
            </button>
          </div>

          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              <img
                src="/modern-iphone-with-colorful-screen-display-showing.jpg"
                alt="iPhone Wireless Charging"
                className="max-w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-3 hover:bg-gray-50 shadow-lg">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-3 hover:bg-gray-50 shadow-lg">
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

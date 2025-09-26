export default function HeroBanner() {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Hero - Wireless Charging Stand */}
          <div className="lg:col-span-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between min-h-[400px]">
            <div className="space-y-4 text-center md:text-left mb-6 md:mb-0">
              <div className="text-blue-600 text-sm font-medium tracking-wide">BEST SMARTPHONE</div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                WIRELESS
                <br />
                CHARGING STAND
              </h1>
              <p className="text-xl text-gray-600 font-medium">Up To 70% Off</p>
              <button className="bg-blue-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors text-sm tracking-wide shadow-md hover:shadow-lg">
                SHOP NOW
              </button>
            </div>
            <div className="relative w-full md:w-auto">
              <img 
                src="/images/wireless-charging-stand.png" 
                alt="Wireless Charging Stand" 
                className="w-full max-w-xs md:max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Side Promotions */}
          <div className="space-y-6">
            {/* Headphones Promotion */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white relative overflow-hidden h-48">
              <div className="absolute right-0 bottom-0 w-32 h-32 transform translate-x-8 translate-y-8">
                <img 
                  src="/images/jbl-wireless-headphones.jpg" 
                  alt="Wireless Headphones"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative z-10 max-w-[60%]">
                <h3 className="text-lg font-bold mb-1">WIRELESS</h3>
                <h4 className="text-xl font-bold mb-2">HEADPHONES</h4>
                <p className="text-sm mb-3">Up to 50% Off</p>
                <button className="bg-white text-purple-600 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
                  BUY NOW
                </button>
              </div>
            </div>

            {/* Smartwatch Promotion */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg p-6 text-white relative overflow-hidden h-48">
              <div className="absolute right-0 bottom-0 w-32 h-32 transform translate-x-8 translate-y-8">
                <img 
                  src="/images/apple-watch-series-5.jpg" 
                  alt="Smart Watch"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative z-10 max-w-[60%]">
                <h3 className="text-lg font-bold mb-1">SMART WATCH</h3>
                <h4 className="text-xl font-bold mb-2">SERIES 5</h4>
                <p className="text-sm mb-3">New Arrivals</p>
                <button className="bg-white text-orange-600 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>

            {/* Additional Promo */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-1">SMART DEVICES</h3>
                <h4 className="text-xl font-bold mb-2">LATEST TECH</h4>
                <p className="text-sm mb-3">Up to 60% Off</p>
                <button className="bg-white text-green-600 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
                  SHOP NOW
                </button>
              </div>
              <img
                src="/images/Apple-AirPods.jpg"
                alt="AirPods"
                className="absolute right-2 bottom-2 w-16 h-16 object-cover opacity-80 rounded"
              />
            </div>
          </div>
        </div>

        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-3 hover:bg-gray-50 shadow-lg z-10">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-3 hover:bg-gray-50 shadow-lg z-10">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="flex justify-center mt-6 space-x-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

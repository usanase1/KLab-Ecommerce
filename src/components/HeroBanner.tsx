export default function HeroBanner() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-yellow-600 text-sm font-medium mb-2">BEST SELLER PHONE</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              WIRELESS
              <br />
              CHARGING STAND
            </h1>
            <p className="text-xl text-gray-600 mb-6">Up To 70% Off</p>
            <button className="bg-yellow-400 text-black px-8 py-3 rounded font-medium hover:bg-yellow-500 transition-colors">
              BUY NOW
            </button>
          </div>
          <div className="flex justify-center">
            <img src="/modern-smartphone-with-wireless-charging.jpg" alt="Wireless Charging Phone" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

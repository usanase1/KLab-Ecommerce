import HeroBanner from "../components/HeroBanner"
import Products from "../components/Products"

export default function Home() {
  return (
    <div>
      <HeroBanner />

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Wireless Speaker */}
            <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">WIRELESS SPEAKER</h3>
                <p className="text-gray-600 mb-4">UP TO 70% OFF</p>
                <button className="bg-yellow-400 text-black px-6 py-2 rounded font-medium hover:bg-yellow-500 transition-colors">
                  BUY NOW
                </button>
              </div>
              <img src="/wireless-bluetooth-speaker.jpg" alt="Wireless Speaker" className="w-24 h-24 object-cover" />
            </div>

            {/* Watch Charger */}
            <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">WATCH CHARGER</h3>
                <p className="text-gray-600 mb-4">UP TO 70% OFF</p>
                <button className="bg-yellow-400 text-black px-6 py-2 rounded font-medium hover:bg-yellow-500 transition-colors">
                  BUY NOW
                </button>
              </div>
              <img src="/apple-watch-charging-dock.jpg" alt="Watch Charger" className="w-24 h-24 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Products />
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Trust Badges */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-3">🚚</div>
              <h4 className="font-semibold text-gray-900 mb-1">FREE SHIPPING</h4>
              <p className="text-sm text-gray-600">On All Orders Over $99</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-3">↩️</div>
              <h4 className="font-semibold text-gray-900 mb-1">EASY RETURNS</h4>
              <p className="text-sm text-gray-600">30 Days Return Policy</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-3">🔒</div>
              <h4 className="font-semibold text-gray-900 mb-1">SECURE PAYMENT</h4>
              <p className="text-sm text-gray-600">100% Secure Payment</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-3">📞</div>
              <h4 className="font-semibold text-gray-900 mb-1">24/7 SUPPORT</h4>
              <p className="text-sm text-gray-600">Dedicated Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">kapee.</h3>
              <p className="text-gray-600 text-sm">
                Your trusted electronics store with the latest gadgets and accessories.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">FEATURED</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    On Sale
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Top Rated
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">CATEGORIES</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Smartphones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Accessories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Audio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Wearables
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">SUPPORT</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">© 2024 kapee. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube, Rss } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">kapee.</h3>
              <p className="text-gray-600 text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-gray-500" />
                  <span>Lorem Ipsum, 2046 Lorem Ipsum</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-gray-500" />
                  <span>576-245-2478</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-gray-500" />
                  <span>info@kapee.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-3 text-gray-500" />
                  <span>Mon - Fri / 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wide">INFORMATION</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Store Location
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Shipping & Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Latest News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Our Sitemap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wide">OUR SERVICE</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Terms of Sale
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Customer Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Delivery Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Payments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Saved Cards
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wide">MY ACCOUNT</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    My Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    My Cart
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Checkout
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    My Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Tracking Order
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wide">NEWSLETTER</h4>
              <p className="text-gray-600 text-sm mb-4">Subscribe to our mailing list to get the new updates!</p>

              <div className="flex mb-6">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                />
                <button className="px-6 py-3 bg-gray-800 text-white text-sm font-medium rounded-r-md hover:bg-gray-900 transition-colors">
                  SIGN UP
                </button>
              </div>

              <div className="flex space-x-2">
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-black text-white rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-700 text-white rounded flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-pink-600 text-white rounded flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-pink-500 text-white rounded flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-orange-500 text-white rounded flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Rss className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">Kapee © 2025 by PressLayouts All Rights Reserved.</p>

            <div className="flex items-center space-x-3">
              <img src="/visa-logo-generic.png" alt="Visa" className="h-6" />
              <img src="/paypal-logo.png" alt="PayPal" className="h-6" />
              <img src="/abstract-discover-logo.png" alt="Discover" className="h-6" />
              <img src="/maestro-logo.png" alt="Maestro" className="h-6" />
              <img src="/mastercard-logo.png" alt="MasterCard" className="h-6" />
              <img src="/american-express-logo.png" alt="American Express" className="h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
        <span className="text-sm">$35</span>
      </div>
    </footer>
  )
}

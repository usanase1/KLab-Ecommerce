import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center space-x-8">
          <li>
            <Link to="/" className="text-gray-700 hover:text-yellow-600 font-medium">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/category/shop" className="text-gray-700 hover:text-yellow-600 font-medium">
              SHOP
            </Link>
          </li>
          <li>
            <Link to="/category/pages" className="text-gray-700 hover:text-yellow-600 font-medium">
              PAGES
            </Link>
          </li>
          <li>
            <Link to="/category/blog" className="text-gray-700 hover:text-yellow-600 font-medium">
              BLOG
            </Link>
          </li>
          <li>
            <Link to="/category/elements" className="text-gray-700 hover:text-yellow-600 font-medium">
              ELEMENTS
            </Link>
          </li>
          <li>
            <Link to="/category/buy-now" className="text-gray-700 hover:text-yellow-600 font-medium">
              BUY NOW
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

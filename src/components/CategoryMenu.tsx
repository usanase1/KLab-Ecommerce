import { Link } from "react-router-dom"
import { ChevronRight, Menu } from "lucide-react"

const categories = [
  "Men's Clothing",
  "Women's Clothing",
  "Accessories",
  "Shoes",
  "Jewellery",
  "Bags & Backpacks",
  "Watches",
  "Dresses",
  "Shirts",
]

export default function CategoryMenu() {
  return (
    <aside className="w-80 bg-white border-r border-gray-200 relative">
      <div className="bg-yellow-400 text-black px-6 py-4 font-medium flex items-center justify-between">
        <span>SHOP BY CATEGORIES</span>
        <Menu className="w-5 h-5" />
      </div>
      <ul className="py-0">
        {categories.map((cat) => (
          <li key={cat} className="border-b border-gray-100 last:border-b-0">
            <Link
              to={`/category/${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
              className="flex items-center justify-between px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors"
            >
              <span className="font-medium">{cat}</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-6 left-6">
        <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold shadow-lg">
          <span className="text-sm">$</span>
          <span className="text-xl">35</span>
        </div>
      </div>
    </aside>
  )
}

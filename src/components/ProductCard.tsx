"use client"

import { Heart } from "lucide-react"

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: number
    originalPrice?: number
    image: string
    category: string
    discount?: string
    badge?: string
    isOnSale?: boolean
    rating?: number
  }
  id?: number
  name?: string
  price?: number
  originalPrice?: number
  image?: string
  rating?: number
  isOnSale?: boolean
  onAddToCart: (product: {
    id: number
    name: string
    price: number
    originalPrice?: number
    image: string
    category: string
    discount?: string
    badge?: string
    isOnSale?: boolean
    rating?: number
  }) => void
}

export default function ProductCard({
  product,
  id,
  name,
  price,
  originalPrice,
  image,
  rating = 5,
  isOnSale = false,
  onAddToCart,
}: ProductCardProps) {
  const productId = id ?? product.id
  const productName = name ?? product.name
  const productPrice = price ?? product.price
  const productOriginalPrice = originalPrice ?? product.originalPrice
  const productImage = image ?? product.image
  const productRating = rating ?? product.rating ?? 5

  const productData = {
    id: productId,
    name: productName,
    price: productPrice,
    originalPrice: productOriginalPrice,
    image: productImage,
    category: product.category,
    discount: product.discount,
    badge: product.badge,
    isOnSale: isOnSale || product.isOnSale,
    rating: productRating,
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        {product.discount && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-medium">
            {product.discount}
          </span>
        )}
        {product.badge && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded font-medium">
            {product.badge}
          </span>
        )}
        <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
          <Heart className="w-4 h-4" />
        </button>
        <img src={productImage || "/placeholder.svg"} alt={productName} className="w-full h-48 object-cover" />
      </div>

      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{productName}</h3>

        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400 text-sm">{"★".repeat(productRating)}</div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">${productPrice.toFixed(2)}</span>
            {productOriginalPrice && (
              <span className="text-sm text-gray-500 line-through">${productOriginalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>

        <button
          onClick={() => onAddToCart(productData)}
          className="w-full bg-yellow-400 text-black py-2 px-4 rounded font-medium hover:bg-yellow-500 transition-colors"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  )
}

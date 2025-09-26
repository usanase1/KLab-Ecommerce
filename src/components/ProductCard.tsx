import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';
import type { ProductCardProps } from '../types/product.types';

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

  const { addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    setInWishlist(isInWishlist(productId));
  }, [isInWishlist, productId]);

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
    rating: typeof productRating === 'number' ? productRating : productRating?.rate ?? 5,
    quantity: 1,
  };

  // Normalize rating for UI
  const numericRating = typeof productRating === 'number' ? productRating : (productRating?.rate ?? 0);
  const ratingCount = typeof product.rating === 'object' ? product.rating.count : undefined;

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(productId);
      setInWishlist(false);
    } else {
      addToWishlist(productData);
      setInWishlist(true);
    }
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(productData);
    }
  };

  return (
    <div className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 relative">
      {/* Badge */}
      <div className="absolute top-3 left-3 z-10 flex flex-col space-y-2">
        {product.discount && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            {product.discount}
          </span>
        )}
        {product.badge && (
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            {product.badge}
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button 
        onClick={handleWishlistClick}
        className={`absolute top-3 right-3 z-10 rounded-full p-2 shadow-md transition-all duration-300 ${
          inWishlist 
            ? 'bg-red-500 text-white' 
            : 'bg-white text-red-500 opacity-0 group-hover:opacity-100 hover:bg-red-500 hover:text-white'
        }`}
        aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <svg 
          className="w-4 h-4" 
          fill={inWishlist ? 'currentColor' : 'none'} 
          stroke="currentColor" 
          strokeWidth={inWishlist ? 0 : 2}
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
          />
        </svg>
      </button>

      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-50">
        <img 
          src={productImage || "/placeholder.svg"} 
          alt={productName} 
          className="w-full h-56 object-contain p-6 group-hover:scale-110 transition-transform duration-300" 
        />
        
        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100">
          <button 
            onClick={handleAddToCartClick}
            className="bg-white text-gray-800 rounded-full p-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-blue-600 hover:text-white"
            title="Add to cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          <button 
            className="bg-white text-gray-800 rounded-full p-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 hover:bg-blue-600 hover:text-white"
            title="Quick view"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">{product.category}</div>
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          {productName}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-amber-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < Math.floor(numericRating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            {ratingCount != null ? (
              <span className="text-xs text-gray-500 ml-1">({ratingCount})</span>
            ) : (
              <span className="text-xs text-gray-500 ml-1">({numericRating.toFixed(1)})</span>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">${productPrice.toFixed(2)}</span>
            {productOriginalPrice && (
              <span className="text-sm text-gray-400 line-through">${productOriginalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  discount?: string;
  badge?: string;
  isOnSale?: boolean;
  rating?: number;
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  wishlist: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  addToWishlist: (product: CartItem) => void;
  removeFromWishlist: (productId: number) => void;
  getCartSubtotal: () => number;
  getCartTotal: () => number;
  getCartCount: () => number;
  isInWishlist: (productId: number) => boolean;
  clearCart: () => void;
}

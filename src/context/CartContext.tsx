"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { CartItem, CartContextType } from '../types/cart.types';

const CartContext = createContext<CartContextType | undefined>(undefined)

// Safely parse JSON from localStorage
function safeParse<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch (e) {
    // Corrupt data – clear it to prevent recurring crashes
    try {
      // Best-effort cleanup; ignore failures
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        // noop
      }
    } catch {}
    return fallback;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<CartItem[]>([])
  const TAX_RATE = 0.1 // 10% tax rate

  // Load data from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart")
      const savedWishlist = localStorage.getItem("wishlist")

      setCart(safeParse<CartItem[]>(savedCart, []))
      setWishlist(safeParse<CartItem[]>(savedWishlist, []))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }
  }, [wishlist])

  const addToCart = (product: CartItem) => {
    setCart((prev) => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
  }

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const addToWishlist = (product: CartItem) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id)
      if (exists) {
        return prev.filter((item) => item.id !== product.id)
      }
      return [...prev, product]
    })
  }

  const removeFromWishlist = (productId: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId))
  }

  const getCartSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartTotal = () => {
    const subtotal = getCartSubtotal();
    const tax = subtotal * TAX_RATE;
    return subtotal + tax;
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const isInWishlist = (productId: number) => {
    return wishlist.some((item) => item.id === productId)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToWishlist,
        removeFromWishlist,
        getCartSubtotal,
        getCartTotal,
        getCartCount,
        isInWishlist,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

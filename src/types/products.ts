export interface ProductCardProps {
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
  onAddToCart?: (product: {
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
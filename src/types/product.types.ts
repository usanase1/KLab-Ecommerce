export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  discount?: string;
  badge?: string;
  isOnSale?: boolean;
  rating?: number | { rate: number; count: number };
  soldCount?: number;
  availableCount?: number;
}

export interface ProductCardProps {
  product: Product;
  id?: number;
  name?: string;
  price?: number;
  originalPrice?: number;
  image?: string;
  rating?: number;
  isOnSale?: boolean;
  onAddToCart?: (product: Product) => void;
}

import type { CartItem } from "./cart.types";

export interface ShippingInfo {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
}

export interface OrderItem extends CartItem {}

export type OrderStatus = "placed" | "processing" | "shipped" | "delivered" | "cancelled";

export interface Order {
  id: string; // e.g., ORD-20250925-abcdef
  createdAt: string; // ISO string
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  shipping: ShippingInfo;
  status: OrderStatus;
}

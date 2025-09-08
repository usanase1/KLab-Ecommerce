import { useState } from "react";
import ProductCard from "../components/ProductCard";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const products: Product[] =  [
   {
    id: 1,
    name: "Smartphone",
    price: 499,
    image: "/images/Apple-AirPods.jpg", 
  },
  {
    id: 2,
    name: "Laptop",
    price: 899,
    image: "/images/Apple-iPhone-11-Pro-Max.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    price: 149,
    image: "/images/Apple-iPhone-11-Pro.jpg",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 199,
    image: "/images/Apple-Watch-Series-5-Black-Milanese.jpg",
  },
  {
    id: 5,
    name: "Smartwatch",
    price: 199,
    image: "/images/Apple-Watch-Series-5-White.jpg",
  },
  {
    id: 6,
    name: "Smartwatch",
    price: 199,
    image: "/images/JBL-On-Ear-Headphones.jpg",
  },
  {
    id: 7,
    name: "Smartwatch",
    price: 199,
    image: "/images/JBL-Wireless-Bluetooth-Speaker.jpg",
  },
  {
    id: 8,
    name: "Smartwatch",
    price: 199,
    image: "/images/Samsung-Gear-360-Camera.jpg",
  },
  {
    id: 9,
    name: "Smartwatch",
    price: 199,
    image: "/images/Samsung-Virtual-Reality-Headset.jpg",
  },
  {
    id: 10,
    name: "Smartwatch",
    price: 199,
    image: "/images/watch-charger.jpg",
  },
  {
    id: 11,
    name: "Smartwatch",
    price: 199,
    image: "/images/wireless-charging-stand.jpg",
  },
  {
    id: 12,
    name: "Smartwatch",
    price: 199,
    image: "/images/wireless-speaker.jpg",
  },
]; 

export default function ProductsPage() {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart} 
          />
        ))}
      </div>

      {/* Simple Cart Display */}
      <div className="mt-6 p-4 border rounded">
        <h2 className="font-semibold">Cart</h2>
        {cart.length === 0 ? (
          <p>No items yet</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

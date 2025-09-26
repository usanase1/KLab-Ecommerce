// src/pages/Products.tsx
import ProductCard from "../components/ProductCard"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { Notify } from "notiflix"

type Product = {
  id: number
  name: string
  price: number
  image: string
  category: string
}
const products: Product[] = [
  {
    id: 1,
    name: "Smartphone",
    price: 499,
    image: "/images/Apple-AirPods.jpg",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Laptop",
    price: 899,
    image: "/images/Apple-iPhone-11-Pro-Max.jpg",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Headphones",
    price: 149,
    image: "/images/Apple-iPhone-11-Pro.jpg",
    category: "Audio",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 199,
    image: "/images/Apple-Watch-Series-5-Black-Milanese.jpg",
    category: "Wearables",
  },
  {
    id: 5,
    name: "Smartwatch",
    price: 199,
    image: "/images/Apple-Watch-Series-5-White.jpg",
    category: "Wearables",
  },
  {
    id: 6,
    name: "Smartwatch",
    price: 199,
    image: "/images/JBL-On-Ear-Headphones.jpg",
    category: "Audio",
  },
  {
    id: 7,
    name: "Smartwatch",
    price: 199,
    image: "/images/JBL-Wireless-Bluetooth-Speaker.jpg",
    category: "Audio",
  },
  {
    id: 8,
    name: "Smartwatch",
    price: 199,
    image: "/images/Samsung-Gear-360-Camera.jpg",
    category: "Cameras",
  },
  {
    id: 9,
    name: "Smartwatch",
    price: 199,
    image: "/images/Samsung-Virtual-Reality-Headset.jpg",
    category: "Wearables",
  },
  {
    id: 10,
    name: "Smartwatch",
    price: 199,
    image: "/images/watch-charger.jpg",
    category: "Accessories",
  },
  {
    id: 11,
    name: "Smartwatch",
    price: 199,
    image: "/images/wireless-charging-stand.jpg",
    category: "Accessories",
  },
  {
    id: 12,
    name: "Smartwatch",
    price: 199,
    image: "/images/wireless-speaker.jpg",
    category: "Audio",
  },
]

export default function ProductsPage() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const ensureLoggedIn = (action: () => void) => {
    if (!user) {
      Notify.warning('Please log in to add items to your cart')
      navigate('/login')
      return
    }
    action()
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(p: Product): void => {
              ensureLoggedIn(() => {
                // Replace with real addToCart from context if this page is wired later
                console.log("Added to cart:", p)
              })
            }}
          />
        ))}
      </div>
    </div>
  )
}

import { Truck, RotateCcw, CreditCard, MessageCircle } from "lucide-react"

const PreFooter = () => {
  const serviceFeatures = [
    {
      icon: <Truck className="w-8 h-8 text-yellow-500" />,
      title: "FREE SHIPPING",
      description: "On All Orders Over $99",
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-yellow-500" />,
      title: "EASY RETURNS",
      description: "30 Days Return Policy",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-yellow-500" />,
      title: "SECURE PAYMENT",
      description: "100% Secure Payment",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-yellow-500" />,
      title: "24/7 SUPPORT",
      description: "Dedicated Support",
    },
  ]

  const featuredProducts = [
    { name: "Apple AirPods with Wireless...", price: "$85.00", image: "/apple-airpods.jpg" },
    { name: "JBL Wireless Bluetooth Speak...", price: "$96.00", image: "/jbl-bluetooth-speaker-blue.jpg" },
    { name: "JBL On-Ear Headphones", price: "$124.00", image: "/jbl-white-headphones.jpg" },
  ]

  const recentProducts = [
    {
      name: "Apple iPhone 11 Pro Max 256...",
      price: "$199.00",
      oldPrice: "$254.00",
      image: "/iphone-11-pro-max-gold.jpg",
    },
    { name: "Apple AirPods with Wireless ...", price: "$85.00", image: "/apple-airpods-white.jpg" },
    { name: "Apple Watch Series 5", price: "$499.00 - $599.00", image: "/apple-watch-series-5.jpg" },
  ]

  const onSaleProducts = [
    {
      name: "Apple iPhone 11 Pro Max 256...",
      price: "$199.00",
      oldPrice: "$254.00",
      image: "/iphone-11-pro-max-gold.jpg",
    },
    { name: "Apple Watch Series 5", price: "$499.00 - $599.00", image: "/apple-watch-series-5-white.jpg" },
    { name: "Samsung Gear 360 Camera", price: "$29.00", oldPrice: "$48.00", image: "/samsung-gear-360-camera.jpg" },
  ]

  const topRatedProducts = [
    { name: "Samsung Virtual Reality Head...", price: "$18.00", image: "/samsung-vr-headset.jpg" },
    {
      name: "Microsoft Xbox One Wireless ...",
      price: "$25.00",
      oldPrice: "$45.00",
      image: "/xbox-one-controller-white.jpg",
    },
    { name: "Apple Watch Series 5 Black M...", price: "$599.00", image: "/apple-watch-series-5-black.jpg" },
  ]

  const categories = [
    { letter: "B", title: "BEAUTY", tagline: "BEAUTY TAGLINE" },
    { letter: "D", title: "DESIGN", tagline: "DESIGN TAGLINE" },
    { letter: "D", title: "DRESS", tagline: "DRESS TAGLINE" },
    { letter: "F", title: "FASHION", tagline: "FASHION TAGLINE" },
    { letter: "J", title: "JACKET", tagline: "JACKET TAGLINE" },
    { letter: "S", title: "SHOES", tagline: "SHOES TAGLINE" },
  ]

  const ProductList = ({ products }: { products: any[] }) => (
    <div className="space-y-4">
      {products.map((product, index) => (
        <div key={index} className="flex items-center space-x-3">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-12 h-12 object-cover rounded"
          />
          <div className="flex-1">
            <h4 className="text-sm text-gray-800 font-medium truncate">{product.name}</h4>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-gray-900">{product.price}</span>
              {product.oldPrice && <span className="text-sm text-gray-500 line-through">{product.oldPrice}</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceFeatures.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              {feature.icon}
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
              FEATURED
            </h3>
            <ProductList products={featuredProducts} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
              RECENT
            </h3>
            <ProductList products={recentProducts} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
              ON SALE
            </h3>
            <ProductList products={onSaleProducts} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
              TOP RATED
            </h3>
            <ProductList products={topRatedProducts} />
          </div>
        </div>

        {/* Category Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center bg-gray-600 text-white px-4 py-2 rounded">
              <span className="bg-white text-gray-600 w-8 h-8 rounded flex items-center justify-center font-bold text-sm mr-3">
                {category.letter}
              </span>
              <div>
                <div className="font-semibold text-sm">{category.title}</div>
                <div className="text-xs text-gray-300">{category.tagline}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PreFooter


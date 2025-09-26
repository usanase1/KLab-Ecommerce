const PreFooter = () => {
  const serviceFeatures = [
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      title: "FREE SHIPPING",
      description: "On All Orders Over $99",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      title: "EASY RETURNS",
      description: "30 Days Return Policy",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
      title: "SECURE PAYMENT",
      description: "100% Secure Payment",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
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

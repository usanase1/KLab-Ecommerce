import React from 'react';
import HeroBanner from "../components/HeroBanner";
import FeaturedCategories from "../components/FeaturedCategories";
import HotDeals from "../components/HotDeals";
import FeaturedProducts from "../components/FeaturedProducts";

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <HeroBanner />
        <FeaturedCategories />
        <HotDeals />
        <FeaturedProducts />
      </main>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <h4 className="font-bold text-gray-900 mb-2">FREE SHIPPING</h4>
              <p className="text-sm text-gray-600">On all orders over $100</p>
            </div>
            <div className="text-center p-4">
              <h4 className="font-bold text-gray-900 mb-2">SECURE PAYMENT</h4>
              <p className="text-sm text-gray-600">100% secure payment</p>
            </div>
            <div className="text-center p-4">
              <h4 className="font-bold text-gray-900 mb-2">24/7 SUPPORT</h4>
              <p className="text-sm text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
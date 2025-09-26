import React from 'react';
import Layout from "../Layout/Layout";
import HeroBanner from "../components/HeroBanner";
import FeaturedCategories from "../components/FeaturedCategories";
import HotDeals from "../components/HotDeals";
import FeaturedProducts from "../components/FeaturedProducts";

const Home: React.FC = () => {
  return (
    <Layout>
      <div>
        {/* Top Announcement Bar */}
        <div className="bg-red-600 text-white text-center py-2 text-sm font-medium">
          SUMMER SALE, Get 40% Off for all products. Use code: SUMMER40
        </div>

        {/* Main Content */}
        <main>
          <HeroBanner />
          <FeaturedCategories />
          <HotDeals />
          <FeaturedProducts />
        </main>
      </div>
    </Layout>
  );
};

export default Home; 
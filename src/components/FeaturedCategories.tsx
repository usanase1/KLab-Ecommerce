
const categories = [
  {
    id: 1,
    name: 'WIRELESS SPEAKER',
    discount: 'MIN. 30-75% OFF',
    image: '/images/wireless-speaker.jpg',
    bgGradient: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    name: 'WATCH CHARGER',
    discount: 'UP TO 75% OFF',
    image: '/images/watch-charger.jpg',
    bgGradient: 'from-purple-500 to-purple-600',
  },
  {
    id: 3,
    name: 'SMART WATCHES',
    discount: 'UP TO 50% OFF',
    image: '/images/apple-watch-series-5.jpg',
    bgGradient: 'from-green-500 to-green-600',
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`bg-gradient-to-r ${category.bgGradient} rounded-lg p-8 text-white relative overflow-hidden h-48 hover:shadow-lg transition-shadow`}
            >
              <div className="relative z-10">
                <p className="text-sm opacity-90 mb-1">DIGITAL SMART</p>
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-lg mb-4">{category.discount}</p>
                <button className="bg-white px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors"
                  style={{ color: category.bgGradient.includes('blue') ? '#3B82F6' : category.bgGradient.includes('purple') ? '#8B5CF6' : '#10B981' }}
                >
                  SHOP NOW
                </button>
              </div>
              <img
                src={category.image}
                alt={category.name}
                className="absolute right-4 bottom-4 w-24 h-24 object-contain opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;

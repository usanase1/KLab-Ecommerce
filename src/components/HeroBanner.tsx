export default function HeroBanner() {
  return (
    <div className="bg-yellow-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-4 md:mb-0">
        <h2 className="text-2xl font-bold mb-2">Big Sale on Electronics</h2>
        <p className="text-gray-600">Up to 50% off on selected products</p>
        <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
          Shop Now
        </button>
      </div>
      <img
        src="/images/banner.png"
        alt="Sale"
        className="w-60 md:w-80 rounded-lg"
      />
    </div>
  );
}

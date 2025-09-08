import ProductsPage from "../components/Products";

export default function Home() {
  return (
    <section className="text-center py-16">
      <h1 className="text-2xl sm:text-3xl font-bold">Home</h1>
      <ProductsPage />
      <p className="text-gray-600 mt-2">Hero + products coming next.</p>
    </section>
  );
}

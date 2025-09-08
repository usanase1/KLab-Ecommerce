// ProductCard.tsx
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: (product: Product) => void;
}) {
  return (
    <div className="border rounded-lg p-3 shadow-sm hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-2 font-medium">{product.name}</h3>
      <p className="text-yellow-600 font-bold">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-2 w-full bg-yellow-500 text-white py-1.5 rounded hover:bg-yellow-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

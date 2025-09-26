import { useCart } from '../context/CartContext';
import ProductCard from './ProductCard';
import { Product } from '../types/product.types';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix';

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch('/data/products.json')
      .then(async (res) => {
        if (!res.ok) throw new Error(`Failed to load products: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // data can be either an array or an object with { products: [...] }
        const list = Array.isArray(data) ? data : data?.products;
        if (isMounted) {
          if (Array.isArray(list)) setProducts(list as Product[]);
          else setError('Invalid products data format');
        }
      })
      .catch((e) => {
        if (isMounted) setError(e.message || 'Failed to load products');
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const ensureLoggedIn = (action: () => void) => {
    if (!user) {
      Notify.warning('Please log in to add items to your cart');
      navigate('/login');
      return;
    }
    action();
  };

  const handleAddToCart = (product: Product) => {
    const numericRating =
      typeof (product as any).rating === 'number'
        ? (product as any).rating
        : (product as any).rating?.rate ?? undefined;
    const cartItem = { ...product, rating: numericRating, quantity: 1 } as any;
    ensureLoggedIn(() => addToCart(cartItem));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {error && (
          <div className="text-red-600 text-center mb-6">{error}</div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

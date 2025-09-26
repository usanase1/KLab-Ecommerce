import { Clock, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';
import Notification from './Notification';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix';

interface DealType {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  timeLeft: string;
  category: string;
  rating: number;
  features: string[];
  isOnSale?: boolean;
}

const deals: DealType[] = [
  {
    id: 1,
    title: 'Apple Watch Series 5',
    price: 399.99,
    originalPrice: 499.99,
    discount: 20,
    image: '/images/Apple-Watch-Series-5-White.jpg',
    timeLeft: '05:23:12',
    category: 'Wearables',
    rating: 4.7,
    features: [
      'GPS + Cellular',
      'Always-On Retina display',
      '30% larger screen',
      'Swimproof',
      'ECG app'
    ]
  },
  {
    id: 2,
    title: 'Samsung Gear 360 Camera',
    price: 199.99,
    originalPrice: 299.99,
    discount: 33,
    image: '/images/samsung-gear-360-camera.jpg',
    timeLeft: '12:45:30',
    category: 'Cameras',
    rating: 4.5,
    features: [
      'Wireless Bluetooth streaming',
      'Dual external passive Bass radiators',
      '10 hours of playtime',
      '1 year warranty',
      'Signature Sound'
    ]
  },
  {
    id: 3,
    title: 'Xbox One Controller',
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    image: '/images/xbox-one-controller-white.jpg',
    timeLeft: '08:15:45',
    category: 'Gaming',
    rating: 4.8,
    features: [
      'Compatible with Xbox One and Xbox One S',
      'Wireless Bluetooth',
      '10 hours of playtime',
      '1 year warranty',
      'Ergonomic design'
    ]
  },
];

interface NotificationState {
  show: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
}

const HotDeals = () => {
  const { 
    addToCart, 
    addToWishlist, 
    removeFromWishlist, 
    isInWishlist
  } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [wishlistStatus, setWishlistStatus] = useState<{[key: number]: boolean}>({});
  const [notification, setNotification] = useState<NotificationState>({
    show: false,
    message: '',
    type: 'success'
  });
  const [timeLeft, setTimeLeft] = useState('23:59:59');
  
  // Initialize wishlist status on component mount
  useEffect(() => {
    const initialStatus: {[key: number]: boolean} = {};
    deals.forEach(deal => {
      initialStatus[deal.id] = isInWishlist(deal.id);
    });
    setWishlistStatus(initialStatus);
  }, [isInWishlist]);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const [hours, minutes, seconds] = timeLeft.split(':').map(Number);
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timer);
        return;
      }
      
      let newSeconds = seconds - 1;
      let newMinutes = minutes;
      let newHours = hours;
      
      if (newSeconds < 0) {
        newSeconds = 59;
        newMinutes--;
      }
      
      if (newMinutes < 0) {
        newMinutes = 59;
        newHours--;
      }
      
      setTimeLeft(
        `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`
      );
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft]);

  const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  const handleAddToCart = (e: React.MouseEvent, deal: DealType) => {
    e.stopPropagation();
    if (!user) {
      Notify.warning('Please log in to add items to your cart');
      navigate('/login');
      return;
    }
    const product = {
      id: deal.id,
      name: deal.title,
      price: deal.price,
      originalPrice: deal.originalPrice,
      image: deal.image,
      category: deal.category,
      rating: deal.rating,
      quantity: 1,
      discount: `${deal.discount}% OFF`,
      isOnSale: true,
    };
    addToCart(product);
    showNotification(`${deal.title} added to cart!`);
  };

  const toggleWishlist = (e: React.MouseEvent, deal: DealType) => {
    e.stopPropagation();
    const product = {
      id: deal.id,
      name: deal.title,
      price: deal.price,
      originalPrice: deal.originalPrice,
      image: deal.image,
      category: deal.category,
      rating: deal.rating,
      quantity: 1,
      isOnSale: true,
    };

    if (isInWishlist(deal.id)) {
      removeFromWishlist(deal.id);
      setWishlistStatus(prev => ({
        ...prev,
        [deal.id]: false
      }));
      showNotification(`${deal.title} removed from wishlist!`, 'info');
    } else {
      addToWishlist(product);
      setWishlistStatus(prev => ({
        ...prev,
        [deal.id]: true
      }));
      showNotification(`${deal.title} added to wishlist!`);
    }
  };

  return (
    <section className="py-12 bg-white relative">
      {/* Notification */}
      {notification.show && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(prev => ({ ...prev, show: false }))}
        />
      )}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-4 h-8 bg-red-500 mr-2"></div>
            <h2 className="text-2xl font-bold text-gray-900">Hot Deals</h2>
          </div>
          <div className="flex items-center bg-red-50 px-4 py-2 rounded-full">
            <Clock className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-red-500 font-medium">Ends in: {timeLeft}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div key={deal.id} className="group bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                {/* Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{deal.discount}%
                  </span>
                </div>

                {/* Wishlist Button */}
                <button 
                  onClick={(e) => toggleWishlist(e, deal)}
                  className={`absolute top-3 right-3 z-10 rounded-full p-2 shadow-md transition-all duration-300 ${
                    wishlistStatus[deal.id] || isInWishlist(deal.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-red-500 hover:bg-red-500 hover:text-white'
                  }`}
                  aria-label={wishlistStatus[deal.id] || isInWishlist(deal.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  <svg 
                    className="w-4 h-4" 
                    fill={(wishlistStatus[deal.id] || isInWishlist(deal.id)) ? 'currentColor' : 'none'} 
                    stroke="currentColor" 
                    strokeWidth={(wishlistStatus[deal.id] || isInWishlist(deal.id)) ? 0 : 2}
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                    />
                  </svg>
                </button>

                {/* Product Image */}
                <div className="bg-gray-50 p-6">
                  <img 
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-48 object-contain mx-auto transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {deal.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(deal.rating) ? 'fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">({deal.rating})</span>
                </div>

                {/* Features */}
                <ul className="mb-4 space-y-1">
                  {deal.features?.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price and Add to Cart */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-gray-900">${deal.price.toFixed(2)}</span>
                      <span className="ml-2 text-sm text-gray-500 line-through">${deal.originalPrice.toFixed(2)}</span>
                    </div>
                    <button 
                      onClick={(e) => handleAddToCart(e, deal)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors flex items-center"
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDeals;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag, Loader } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { initiateCheckout } from '../lib/stripe';

export const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    let lineItems;
    try {
      setIsProcessing(true);
      setError(null);
  
      lineItems = items.map(item => ({
        name: item.product.name,
        description: item.product.description || '',
        image: item.product.imageUrl,
        unit_amount: item.product.price * 100,
        quantity: item.quantity,
      }));
  
      await initiateCheckout(lineItems);
    } catch (err) {
      setError('Failed to initiate checkout. Please try again.');
      console.error('Checkout error:', err);
      console.error('Line items:', lineItems);
    } finally {
      setIsProcessing(false);
    }
  };
  

  if (items.length === 0) {
    return (
      <div className="container mx-auto py-8 text-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-600 flex items-center justify-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center p-6 border-b last:border-b-0"
              >
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                
                <div className="flex-1 ml-6">
                  <Link
                    to={`/product/${item.product.id}`}
                    className="text-lg font-semibold text-gray-800 hover:text-blue-500"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-gray-600">₹{item.product.price.toLocaleString()}</p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                      disabled={isProcessing}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-x">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                      disabled={isProcessing}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-500 hover:text-red-600"
                    disabled={isProcessing}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-xl font-semibold">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg mt-6 hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isProcessing ? (
                <>
                  <Loader className="h-5 w-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                'Proceed to Checkout'
              )}
            </button>

            <button
              onClick={clearCart}
              disabled={isProcessing}
              className="w-full text-red-500 px-6 py-3 rounded-lg mt-2 hover:text-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
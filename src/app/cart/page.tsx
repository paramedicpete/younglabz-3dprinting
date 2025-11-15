'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CartPage() {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);

    try {
      // Create checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart }),
      });

      const data = await response.json();

      if (data.error) {
        alert('Error: ' + data.error);
        setIsProcessing(false);
        return;
      }

      // Redirect to Stripe checkout
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }
      
      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    } catch (error: any) {
      console.error('Checkout error:', error);
      alert('An error occurred. Please try again.');
      setIsProcessing(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag className="mx-auto text-gray-500 mb-6" size={80} />
          <h1 className="text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
          <p className="text-gray-400 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neon-cyan text-background font-semibold rounded-lg hover:bg-neon-pink hover:shadow-lg hover:shadow-neon-pink/50 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-foreground">
          Shopping <span className="text-neon-cyan">Cart</span>
        </h1>
        <button
          onClick={clearCart}
          className="text-gray-400 hover:text-neon-pink transition-colors text-sm"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-gray-medium border border-gray-light rounded-lg p-4 flex gap-4"
            >
              <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-light">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{item.category}</p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 bg-gray-dark border border-gray-light rounded hover:border-neon-cyan transition-colors flex items-center justify-center"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-foreground font-semibold w-8 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 bg-gray-dark border border-gray-light rounded hover:border-neon-cyan transition-colors flex items-center justify-center"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-end justify-between">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-neon-pink transition-colors"
                >
                  <Trash2 size={20} />
                </button>
                <p className="text-xl font-bold text-neon-pink">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-medium border border-gray-light rounded-lg p-6 sticky top-24">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Order Summary
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Tax (8%)</span>
                <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-light pt-3">
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-foreground">Total</span>
                  <span className="text-neon-pink">
                    ${(getCartTotal() * 1.08 + 9.99).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 mb-3 ${
                isProcessing
                  ? 'bg-gray-light text-gray-500 cursor-not-allowed'
                  : 'bg-neon-cyan text-background hover:bg-neon-pink hover:shadow-lg hover:shadow-neon-pink/50'
              }`}
            >
              {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
            </button>

            <Link
              href="/products"
              className="block text-center text-gray-400 hover:text-neon-cyan transition-colors text-sm"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

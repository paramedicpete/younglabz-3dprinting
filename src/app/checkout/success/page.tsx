'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { clearCart } = useCart();
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const id = searchParams.get('session_id');
    setSessionId(id);
    
    // Clear the cart after successful payment
    if (id) {
      clearCart();
    }
  }, [searchParams, clearCart]);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <CheckCircle className="mx-auto text-neon-green mb-6" size={100} />
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Order <span className="text-neon-green">Confirmed!</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Thank you for your purchase from Young LABZ
          </p>
        </div>

        <div className="bg-gray-medium border border-gray-light rounded-lg p-8 mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Package className="text-neon-cyan" size={32} />
            <h2 className="text-2xl font-semibold text-foreground">
              Your Order is Being Prepared
            </h2>
          </div>

          <p className="text-gray-400 mb-6">
            We've received your order and will start processing it right away. 
            You'll receive an email confirmation shortly with your order details and tracking information.
          </p>

          {sessionId && (
            <div className="bg-gray-dark rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-500">Order Reference</p>
              <p className="text-neon-cyan font-mono text-sm mt-1 break-all">
                {sessionId}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-dark rounded-lg p-4">
              <div className="text-neon-cyan mb-2">📧</div>
              <p className="text-gray-400">Confirmation email sent</p>
            </div>
            <div className="bg-gray-dark rounded-lg p-4">
              <div className="text-neon-pink mb-2">📦</div>
              <p className="text-gray-400">Processing order</p>
            </div>
            <div className="bg-gray-dark rounded-lg p-4">
              <div className="text-neon-purple mb-2">🚚</div>
              <p className="text-gray-400">Ships in 2-3 days</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="px-8 py-4 bg-neon-cyan text-background font-semibold rounded-lg hover:bg-neon-pink hover:shadow-lg hover:shadow-neon-pink/50 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            Continue Shopping
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/"
            className="px-8 py-4 border-2 border-neon-purple text-neon-purple font-semibold rounded-lg hover:bg-neon-purple hover:text-background transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-20 text-center"><p className="text-gray-400">Loading...</p></div>}>
      <SuccessContent />
    </Suspense>
  );
}

'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { products } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, ArrowLeft, Package, Truck, Shield } from 'lucide-react';
import { useState } from 'react';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
        <button
          onClick={() => router.push('/products')}
          className="text-neon-cyan hover:text-neon-pink transition-colors"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setTimeout(() => {
      setIsAdding(false);
      router.push('/cart');
    }, 500);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-medium border border-gray-light">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-4xl font-bold text-neon-pink">
              ${product.price.toFixed(2)}
            </span>
            {product.stock < 10 && (
              <span className="bg-neon-purple/20 text-neon-purple px-3 py-1 rounded-full text-sm">
                Only {product.stock} left!
              </span>
            )}
          </div>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Category */}
          <div className="mb-6">
            <span className="text-sm text-gray-500">Category:</span>
            <span className="ml-2 text-neon-cyan">{product.category}</span>
          </div>

          {/* Quantity Selector */}
          <div className="mb-8">
            <label className="block text-sm text-gray-500 mb-2">Quantity:</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 bg-gray-medium border border-gray-light rounded-lg hover:border-neon-cyan transition-colors"
              >
                -
              </button>
              <span className="text-2xl font-semibold text-foreground w-12 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="w-10 h-10 bg-gray-medium border border-gray-light rounded-lg hover:border-neon-cyan transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
              product.stock === 0
                ? 'bg-gray-medium text-gray-500 cursor-not-allowed'
                : isAdding
                ? 'bg-neon-green text-background'
                : 'bg-neon-cyan text-background hover:bg-neon-pink hover:shadow-lg hover:shadow-neon-pink/50'
            }`}
          >
            <ShoppingCart size={24} />
            {product.stock === 0 ? 'Out of Stock' : isAdding ? 'Added to Cart!' : 'Add to Cart'}
          </button>

          {/* Features */}
          <div className="grid grid-cols-1 gap-4 mt-8">
            <div className="flex items-start gap-3 p-4 bg-gray-medium rounded-lg border border-gray-light">
              <Package className="text-neon-cyan mt-1" size={20} />
              <div>
                <h4 className="text-foreground font-semibold mb-1">Quality Materials</h4>
                <p className="text-gray-400 text-sm">
                  Premium PLA/ABS filament for durability
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-medium rounded-lg border border-gray-light">
              <Truck className="text-neon-pink mt-1" size={20} />
              <div>
                <h4 className="text-foreground font-semibold mb-1">Fast Shipping</h4>
                <p className="text-gray-400 text-sm">
                  Ships within 2-3 business days
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-medium rounded-lg border border-gray-light">
              <Shield className="text-neon-purple mt-1" size={20} />
              <div>
                <h4 className="text-foreground font-semibold mb-1">30-Day Guarantee</h4>
                <p className="text-gray-400 text-sm">
                  Money back if you're not satisfied
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

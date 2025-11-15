'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="group bg-gray-medium rounded-lg overflow-hidden border border-gray-light hover:border-neon-cyan transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-light">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-neon-cyan transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-400 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-neon-pink">
            ${product.price.toFixed(2)}
          </span>
          
          <button
            onClick={handleAddToCart}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              isAdding
                ? 'bg-neon-green text-background'
                : 'bg-neon-cyan text-background hover:bg-neon-pink hover:shadow-lg hover:shadow-neon-pink/50'
            }`}
          >
            <ShoppingCart size={18} />
            {isAdding ? 'Added!' : 'Add'}
          </button>
        </div>
        
        {product.stock < 10 && (
          <p className="text-neon-purple text-xs mt-2">
            Only {product.stock} left!
          </p>
        )}
      </div>
    </div>
  );
}

'use client';

import { useState, useMemo } from 'react';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map(p => p.category)));
    return ['all', ...cats.sort()];
  }, []);

  // Filter products by category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products;
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-foreground mb-4">
          Our <span className="text-neon-cyan">Products</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Browse our complete collection of 3D printed items
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-neon-cyan text-gray-900 shadow-lg shadow-neon-cyan/50'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-neon-cyan'
            }`}
          >
            {category === 'all' ? 'All Products' : category}
            <span className="ml-2 text-xs opacity-75">
              ({category === 'all' 
                ? products.length 
                : products.filter(p => p.category === category).length})
            </span>
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* No results message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}

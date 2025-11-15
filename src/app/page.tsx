import Link from 'next/link';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="text-neon-cyan" size={32} />
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-foreground">Welcome to </span>
              <span className="text-neon-cyan">Young </span>
              <span className="text-neon-pink">LABZ</span>
            </h1>
            <Sparkles className="text-neon-pink" size={32} />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Discover premium 3D printed products crafted with precision and care
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-4 bg-neon-cyan text-background font-semibold rounded-lg hover:bg-neon-pink hover:shadow-lg hover:shadow-neon-pink/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Shop Now
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-neon-purple text-neon-purple font-semibold rounded-lg hover:bg-neon-purple hover:text-background transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-neon-pink">Products</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Check out our most popular 3D printed items
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neon-cyan text-neon-cyan font-semibold rounded-lg hover:bg-neon-cyan hover:text-background transition-all duration-300"
          >
            View All Products
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-medium p-6 rounded-lg border border-gray-light hover:border-neon-cyan transition-colors">
            <div className="w-12 h-12 bg-neon-cyan/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Custom Designs</h3>
            <p className="text-gray-400">
              Unique 3D printed products designed and crafted with attention to detail
            </p>
          </div>

          <div className="bg-gray-medium p-6 rounded-lg border border-gray-light hover:border-neon-pink transition-colors">
            <div className="w-12 h-12 bg-neon-pink/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Fast Shipping</h3>
            <p className="text-gray-400">
              Quick processing and shipping to get your products to you fast
            </p>
          </div>

          <div className="bg-gray-medium p-6 rounded-lg border border-gray-light hover:border-neon-purple transition-colors">
            <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Premium Quality</h3>
            <p className="text-gray-400">
              High-quality materials and professional finishing for lasting products
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


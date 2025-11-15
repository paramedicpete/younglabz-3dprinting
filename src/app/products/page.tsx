import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

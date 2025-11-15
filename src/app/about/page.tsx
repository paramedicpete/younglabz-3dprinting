export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-foreground mb-6 text-center">
          About <span className="text-neon-cyan">Young LABZ</span>
        </h1>

        <div className="bg-gray-medium border border-gray-light rounded-lg p-8 mb-8">
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Welcome to Young LABZ, where innovation meets craftsmanship. We specialize in creating 
            premium 3D printed products that combine cutting-edge technology with artistic design.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Every item in our collection is carefully designed and printed with precision using 
            high-quality materials. From functional accessories to decorative pieces, each product 
            is crafted to exceed your expectations.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            We believe in the power of 3D printing to revolutionize manufacturing and bring unique, 
            customizable products to everyone. Our mission is to make premium 3D printed items 
            accessible while maintaining the highest standards of quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-medium border border-neon-cyan rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
            <p className="text-gray-400">
              Deliver exceptional 3D printed products that enhance everyday life
            </p>
          </div>

          <div className="bg-gray-medium border border-neon-pink rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
            <p className="text-gray-400">
              Constantly exploring new designs and printing techniques
            </p>
          </div>

          <div className="bg-gray-medium border border-neon-purple rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Quality</h3>
            <p className="text-gray-400">
              Premium materials and meticulous attention to detail
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

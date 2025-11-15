export default function Footer() {
  return (
    <footer className="bg-gray-dark border-t border-gray-light mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-neon-cyan">Young </span>
              <span className="text-neon-pink">LABZ</span>
            </h3>
            <p className="text-gray-400">
              Premium 3D printed products crafted with precision and care.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="/products?category=Home%20Decor" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Home Decor
                </a>
              </li>
              <li>
                <a href="/products?category=Figurines" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Figurines
                </a>
              </li>
              <li>
                <a href="/products?category=Accessories" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="/returns" className="text-gray-400 hover:text-neon-cyan transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-light mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Young LABZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

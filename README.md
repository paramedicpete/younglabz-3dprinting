# 🎨 3DPrintShop - E-commerce Website

A sleek, modern e-commerce website for selling 3D printed products, built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Features a stunning gray and neon color theme for a futuristic, user-friendly shopping experience.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🎯 **Modern UI/UX** - Sleek design with gray and neon (cyan, pink, purple, green) color scheme
- 🛒 **Shopping Cart** - Full cart functionality with add, remove, and quantity updates
- � **Stripe Payments** - Secure checkout with credit card processing
- �📱 **Responsive Design** - Mobile-first approach, works perfectly on all devices
- 🚀 **Fast Performance** - Built with Next.js 15 App Router for optimal speed
- 🎨 **Product Showcase** - Beautiful product cards with hover effects and animations
- � **Cart Management** - Real-time cart updates with item count badges
- 🔍 **Product Details** - Detailed product pages with images and specifications
- 📦 **Sample Products** - Pre-loaded with 8 example 3D printed products
- ✉️ **Order Confirmation** - Beautiful success pages after checkout

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone or navigate to the project directory**

```bash
cd 3dprinting
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Set up Stripe payments** (Optional but recommended)

See [STRIPE_SETUP.md](./STRIPE_SETUP.md) for detailed instructions on configuring payments.

Quick setup:
- Get your Stripe API keys from [dashboard.stripe.com](https://dashboard.stripe.com)
- Add them to `.env.local` file
- Restart the server

5. **Open your browser**

Visit [http://localhost:3000](http://localhost:3000) to see your site!

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── cart/                # Shopping cart page
│   ├── contact/             # Contact page
│   ├── products/            # Products listing & detail pages
│   │   └── [id]/           # Dynamic product detail page
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles with neon theme
├── components/              # Reusable React components
│   ├── Header.tsx          # Navigation header with cart
│   ├── Footer.tsx          # Site footer
│   └── ProductCard.tsx     # Product display card
├── context/                 # React Context providers
│   └── CartContext.tsx     # Shopping cart state management
└── lib/                     # Utilities and data
    └── products.ts         # Product data and types
```

## 🎨 Customization

### Changing Colors

Edit the color scheme in `src/app/globals.css`:

```css
:root {
  --neon-cyan: #00ffff;      /* Change cyan color */
  --neon-pink: #ff00ff;      /* Change pink color */
  --neon-green: #00ff00;     /* Change green color */
  --neon-purple: #b000ff;    /* Change purple color */
}
```

### Adding Products

Edit `src/lib/products.ts` to add your own products:

```typescript
{
  id: '9',
  name: 'Your Product Name',
  price: 29.99,
  description: 'Product description here',
  image: 'https://your-image-url.com/image.jpg',
  category: 'Your Category',
  stock: 15,
}
```

### Replacing Product Images

Replace the Unsplash placeholder URLs in `products.ts` with your own product images. You can:
- Upload images to `/public` folder and use `/image-name.jpg`
- Use your own image hosting service
- Keep using Unsplash URLs for testing

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Stripe](https://stripe.com/)** - Secure payment processing
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[React Context API](https://react.dev/reference/react/createContext)** - State management

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

That's it! Vercel automatically detects Next.js and configures everything.

### Deploy to Other Platforms

Build the project:
```bash
npm run build
```

Then deploy the `.next` folder to your hosting platform of choice.

## 💡 Future Enhancements

- [x] Add Stripe payment integration ✅
- [ ] Implement user authentication
- [ ] Add product search and filtering
- [ ] Create admin dashboard for product management
- [ ] Add product reviews and ratings
- [ ] Implement wishlist functionality
- [ ] Add email notifications for order updates
- [ ] Set up actual image hosting for products
- [ ] Add inventory management
- [ ] Implement discount codes and promotions

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

Need help? Have questions? Feel free to:
- Open an issue on GitHub
- Contact us through the website's contact form
- Check the Next.js documentation

---

**Built with ❤️ for the 3D printing community**

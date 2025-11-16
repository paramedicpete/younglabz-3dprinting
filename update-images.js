#!/usr/bin/env node

/**
 * Helper script to bulk update product images
 * 
 * Usage:
 * 1. Add your images to public/products/fidget-toys/ or public/products/flexi-zoo/
 * 2. Update the imageMap below with your product IDs and filenames
 * 3. Run: node update-images.js
 * 
 * This will show you the changes to make in products.ts
 */

const imageMap = {
  // Fidget Toys - Baby
  'baby-dragon': '/products/fidget-toys/baby-dragon.jpg',
  'baby-shark': '/products/fidget-toys/baby-shark.jpg',
  'baby-unicorn': '/products/fidget-toys/baby-unicorn.jpg',
  
  // Fidget Toys - Big
  'big-dragon': '/products/fidget-toys/big-dragon.jpg',
  'big-shark': '/products/fidget-toys/big-shark.jpg',
  
  // Flexi Zoo Models
  'flexi-wolf': '/products/flexi-zoo/wolf.jpg',
  'flexi-red-panda': '/products/flexi-zoo/red-panda.jpg',
  'flexi-axolotl': '/products/flexi-zoo/axolotl.jpg',
  
  // Add more mappings as you add images...
};

console.log('=== Product Image Update Helper ===\n');
console.log('Images mapped:', Object.keys(imageMap).length);
console.log('\nTo update your products, change the image field in src/lib/products.ts:\n');

Object.entries(imageMap).forEach(([productId, imagePath]) => {
  console.log(`Product ID: ${productId}`);
  console.log(`New image path: ${imagePath}`);
  console.log('---');
});

console.log('\n💡 Tip: You can also use find & replace in VS Code to update multiple images at once!');
console.log('\nExample: Replace');
console.log('  https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500&q=80');
console.log('with');
console.log('  /products/fidget-toys/baby-dragon.jpg');

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
}

export const products: Product[] = [
  // Baby Size Animals (0.75" - $1.00)
  {
    id: 'baby-dragon',
    name: 'Baby Dragon - Articulated Fidget',
    price: 1.00,
    description: '3D printed articulated dragon fidget toy. Baby size (0.75"). Made from eco-friendly biodegradable PLA. Perfect for stress relief and fun!',
    image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500&q=80',
    category: 'Fidget Toys - Baby',
    stock: 50,
  },
  {
    id: 'baby-shark',
    name: 'Baby Shark - Articulated Fidget',
    price: 1.00,
    description: '3D printed articulated shark fidget toy. Baby size (0.75"). Made from eco-friendly biodegradable PLA. Great for sensory play!',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&q=80',
    category: 'Fidget Toys - Baby',
    stock: 50,
  },
  {
    id: 'baby-unicorn',
    name: 'Baby Unicorn - Articulated Fidget',
    price: 1.00,
    description: '3D printed articulated unicorn fidget toy. Baby size (0.75"). Made from eco-friendly biodegradable PLA. Magical and fun!',
    image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=500&q=80',
    category: 'Fidget Toys - Baby',
    stock: 50,
  },
  {
    id: 'baby-dolphin',
    name: 'Baby Dolphin - Articulated Fidget',
    price: 1.00,
    description: '3D printed articulated dolphin fidget toy. Baby size (0.75"). Made from eco-friendly biodegradable PLA. Perfect gift!',
    image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=500&q=80',
    category: 'Fidget Toys - Baby',
    stock: 50,
  },
  {
    id: 'baby-panda',
    name: 'Baby Panda - Articulated Fidget',
    price: 1.00,
    description: '3D printed articulated panda fidget toy. Baby size (0.75"). Made from eco-friendly biodegradable PLA. Adorable and fun!',
    image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500&q=80',
    category: 'Fidget Toys - Baby',
    stock: 50,
  },
  {
    id: 'baby-narwhal',
    name: 'Baby Narwhal - Articulated Fidget',
    price: 1.00,
    description: '3D printed articulated narwhal fidget toy. Baby size (0.75"). Made from eco-friendly biodegradable PLA. Unique ocean creature!',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=500&q=80',
    category: 'Fidget Toys - Baby',
    stock: 50,
  },

  // Big Size Animals (1.5" - $5.00)
  {
    id: 'big-dragon',
    name: 'Big Dragon - Articulated Fidget',
    price: 5.00,
    description: '3D printed articulated dragon fidget toy. Big size (1.5"). Made from eco-friendly biodegradable PLA. Detailed and perfect for display!',
    image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500&q=80',
    category: 'Fidget Toys - Big',
    stock: 30,
  },
  {
    id: 'big-shark',
    name: 'Big Shark - Articulated Fidget',
    price: 5.00,
    description: '3D printed articulated shark fidget toy. Big size (1.5"). Made from eco-friendly biodegradable PLA. Great for collectors!',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&q=80',
    category: 'Fidget Toys - Big',
    stock: 30,
  },
  {
    id: 'big-unicorn',
    name: 'Big Unicorn - Articulated Fidget',
    price: 5.00,
    description: '3D printed articulated unicorn fidget toy. Big size (1.5"). Made from eco-friendly biodegradable PLA. Magical and enchanting!',
    image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=500&q=80',
    category: 'Fidget Toys - Big',
    stock: 30,
  },
  {
    id: 'big-sea-turtle',
    name: 'Big Sea Turtle - Articulated Fidget',
    price: 5.00,
    description: '3D printed articulated sea turtle fidget toy. Big size (1.5"). Made from eco-friendly biodegradable PLA. Ocean lover favorite!',
    image: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=500&q=80',
    category: 'Fidget Toys - Big',
    stock: 30,
  },
  {
    id: 'big-alligator',
    name: 'Big Alligator - Articulated Fidget',
    price: 5.00,
    description: '3D printed articulated alligator fidget toy. Big size (1.5"). Made from eco-friendly biodegradable PLA. Realistic reptile fun!',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500&q=80',
    category: 'Fidget Toys - Big',
    stock: 30,
  },
  {
    id: 'big-fox',
    name: 'Big Fox - Articulated Fidget',
    price: 5.00,
    description: '3D printed articulated fox fidget toy. Big size (1.5"). Made from eco-friendly biodegradable PLA. Cute woodland creature!',
    image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500&q=80',
    category: 'Fidget Toys - Big',
    stock: 30,
  },
];

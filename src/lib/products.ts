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
  {
    id: '1',
    name: 'Geometric Vase',
    price: 24.99,
    description: 'Modern geometric vase with sharp angles and clean lines. Perfect for succulents or flowers.',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&q=80',
    category: 'Home Decor',
    stock: 15,
  },
  {
    id: '2',
    name: 'Dragon Figurine',
    price: 34.99,
    description: 'Detailed dragon sculpture with intricate scales and wings. Great for collectors.',
    image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500&q=80',
    category: 'Figurines',
    stock: 8,
  },
  {
    id: '3',
    name: 'Phone Stand',
    price: 12.99,
    description: 'Adjustable phone stand with anti-slip base. Works with all smartphone sizes.',
    image: 'https://images.unsplash.com/photo-1635514569146-9a9607ecf303?w=500&q=80',
    category: 'Accessories',
    stock: 25,
  },
  {
    id: '4',
    name: 'Spiral Planter',
    price: 18.99,
    description: 'Eye-catching spiral design planter for small plants and succulents.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80',
    category: 'Home Decor',
    stock: 12,
  },
  {
    id: '5',
    name: 'Cable Organizer',
    price: 9.99,
    description: 'Keep your desk tidy with this sleek cable management solution.',
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80',
    category: 'Accessories',
    stock: 30,
  },
  {
    id: '6',
    name: 'Articulated Shark',
    price: 16.99,
    description: 'Flexible articulated shark toy with moving joints. Fun desk fidget.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&q=80',
    category: 'Toys',
    stock: 20,
  },
  {
    id: '7',
    name: 'Minimalist Lamp',
    price: 44.99,
    description: 'Modern minimalist desk lamp with LED lighting. USB powered.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',
    category: 'Lighting',
    stock: 10,
  },
  {
    id: '8',
    name: 'Custom Keychain',
    price: 7.99,
    description: 'Personalized keychain with your initials or design.',
    image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=500&q=80',
    category: 'Accessories',
    stock: 50,
  },
];

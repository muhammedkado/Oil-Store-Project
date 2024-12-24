import React from 'react';
import { Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Extra Virgin Olive Oil",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80",
    rating: 5,
    category: "Olive Oils"
  },
  {
    id: 2,
    name: "Traditional Laurel Soap",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80",
    rating: 4.5,
    category: "Soaps"
  },
  // Add more products as needed
];

export function ProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-serif text-gray-900 mb-8">Best Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded-lg"
              />
              <button className="absolute bottom-4 right-4 bg-white/90 hover:bg-white px-4 py-2 rounded-md text-sm font-medium text-olive-800 opacity-0 group-hover:opacity-100 transition-opacity">
                Add to Cart
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                    } fill-current`}
                  />
                ))}
              </div>
              <p className="mt-1 text-lg font-medium text-olive-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
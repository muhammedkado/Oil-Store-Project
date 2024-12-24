import React from 'react';
import { ShoppingCart, Menu, Search } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-600 lg:hidden">
              <Menu size={24} />
            </button>
            <Link href="/" className="text-2xl font-serif text-olive-900">Olive & Co.</Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/products/olive-oils">Olive Oils</Link>
            <Link href="/products/soaps">Natural Soaps</Link>
            <Link href="/products/gift-sets">Gift Sets</Link>
            <Link href="/about">Our Story</Link>
            <Link href="/blog">Journal</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md text-gray-600">
              <Search size={20} />
            </button>
            <button className="p-2 rounded-md text-gray-600 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-olive-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
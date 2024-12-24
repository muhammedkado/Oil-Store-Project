import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-serif mb-4">Olive & Co.</h3>
            <p className="text-gray-400 text-sm">
              Premium olive oil products crafted with care and tradition.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="/products/olive-oils" className="text-gray-400 hover:text-white">Olive Oils</a></li>
              <li><a href="/products/soaps" className="text-gray-400 hover:text-white">Natural Soaps</a></li>
              <li><a href="/products/gift-sets" className="text-gray-400 hover:text-white">Gift Sets</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white">Journal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Olive & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
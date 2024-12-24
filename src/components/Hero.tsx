import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[600px] bg-olive-50">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80"
          alt="Olive grove at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-white sm:text-5xl lg:text-6xl">
          Pure Olive Goodness,<br />Straight from Nature
        </h1>
        <p className="mt-6 max-w-lg text-xl text-gray-100">
          Experience the finest olive oils and natural soaps, crafted with care from sustainable sources.
        </p>
        <div className="mt-10">
          <a
            href="/products"
            className="inline-block bg-olive-600 hover:bg-olive-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
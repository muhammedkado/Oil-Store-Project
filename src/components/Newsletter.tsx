import React from 'react';

export function Newsletter() {
  return (
    <div className="bg-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-gray-900">Join Our Community</h2>
          <p className="mt-4 text-lg text-gray-600">
            Subscribe to receive exclusive offers, recipes, and olive oil tips.
            Get 10% off your first order!
          </p>
          <form className="mt-8 sm:flex sm:max-w-md sm:mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-olive-500 focus:border-olive-500"
            />
            <button
              type="submit"
              className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto flex-shrink-0 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-olive-600 hover:bg-olive-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-olive-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
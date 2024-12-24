/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f8f9f3',
          100: '#e8ebd3',
          200: '#d4dba4',
          300: '#b8c76e',
          400: '#9cb344',
          500: '#7a8f2f',
          600: '#5d6e23',
          700: '#454f1b',
          800: '#2d3314',
          900: '#1a1d0c',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
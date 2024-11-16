/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'bitcoin-orange': '#F7931A',
        'soft-orange': '#ffe9d4',
        'secondary-blue': '#1a94f7',
        'warm-black': '#201e1c',
        'black': '#282623',
        'grey': '#757575',
        'light-grey': '#808080',
        'off-white': '#faf8f7',
      },
    },
  },
  plugins: [],
};
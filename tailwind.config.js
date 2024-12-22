/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    fontFamily: {
      custom: ['Sagace', 'sans-serif'], 
    },
    extend: {
      colors: {
      'primary-lowest': '#F2F4FE',
      },
    },
  },
  plugins: [],
}
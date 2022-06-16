/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'twitter' :'#1da1f2',
        'gris_gb' :'#3d3d3d',
        'gris_cell': '#2b2b2b',
        'gris_fonce': '#000f1a',
        'scroll' : '#555555'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
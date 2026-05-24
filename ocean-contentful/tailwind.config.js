/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          deep: '#030d1a',
          dark: '#05111f',
          mid: '#071c2e',
          blue: '#38bdf8',
          teal: '#2dd4bf',
          violet: '#a78bfa',
          mist: '#c8dff0',
          soft: '#91b8d4',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

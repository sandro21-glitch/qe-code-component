/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'LightGray': 'hsl(212, 45%, 89%)',
        'GrayishBlue': 'hsl(220, 15%, 55%)',
        'DarkBlue': 'hsl(218, 44%, 22%)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

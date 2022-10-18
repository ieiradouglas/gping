/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
    screens: {
      md: {'max':'887px'},
    },
    extend: {},
  },
  plugins: [],
}

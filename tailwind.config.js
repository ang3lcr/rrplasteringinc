/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "400": "400px"
      }
    },
    fontFamily: {
      'body': ['"Oxygen"', 'sans-serif'],
      'principal': ['"Roboto"', 'sans-serif'],
      'acentos': ['"Cormorant Garamond"', 'serif']
    },
    fontWeight:{
      light: 300,
      regular: 400,
      bold: 700,
    }
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1876f2',
      'green': '#13ce66',
      'gray-dark': '#e9eaea',
      'gray': '#ccc',
      'white': '#fff',
      'black':'#150B2B'
    },
    fontFamily: {
      exo: "'Exo 2', sans-serif"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}


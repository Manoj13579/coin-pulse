// /** */ is jsDoc comment whereas /* */ is block level 
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
}


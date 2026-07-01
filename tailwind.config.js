/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This makes Montserrat the default for standard text (replaces font-sans)
        sans: ['Montserrat', 'sans-serif'],
        // This creates a custom class for your headings (font-display)
        display: ['Comfortaa', 'cursive'], 
      },
    },
  },
  plugins: [],
}
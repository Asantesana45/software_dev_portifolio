/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables toggle
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // Sky blue - Trust & Tech
        secondary: "#6366f1", // Indigo - Creativity
        dark: "#0f172a", // Slate 900
        light: "#f8fafc", // Slate 50
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
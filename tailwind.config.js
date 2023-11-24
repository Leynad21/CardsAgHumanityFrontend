/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-bg': '#E6E6E6',         // Light gray for the background
        'c-bg-variant': '#F0F0F0', // Slightly lighter gray variant
        'c-primary': '#212529',  // Dark gray for primary text
        'c-primary-var': '#495057', // Slightly lighter gray variant for primary text
        'c-secondary': '#E74C3C', // Red for secondary text or accents
        'c-secondary-var': '#D9534F', // Slightly lighter red variant
        'c-accent': '#3498DB',    // Blue for accents
        'c-accent-var': '#5BC0DE', // Slightly lighter blue variant
      },
      boxShadow: {
        'around': '0 20px 80px -15px rgba(0, 0, 0, 0.3)',
      }
      // transitionDuration: {
      //   '400': '400ms',
      // },
      // container: {
      //   'lg': '75%',
      //   'md': '86%',
      //   'sm': '90%',
      // },
    },
  },
  plugins: [require("daisyui")],
}


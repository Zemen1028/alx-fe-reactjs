/** @type {import('tailwindcss').Config} */
module.exports = {
 purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable manual dark mode
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
         backgroundColor: {
        // Disable hover and focus variants for backgroundColor
        hover: false,
        focus: false,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Example plugin
  ],
}

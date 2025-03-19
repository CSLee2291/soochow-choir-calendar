/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a5568',
        secondary: '#718096',
        accent: '#6b46c1',
      },
    },
  },
  plugins: [],
}

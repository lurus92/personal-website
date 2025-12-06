/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0b1220',
        steel: '#0f172a',
        accent: '#06b6d4',
        sand: '#f8fafc',
        ink: '#111827'
      }
    },
  },
  plugins: [],
};

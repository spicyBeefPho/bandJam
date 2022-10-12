/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#1E1E1E",
        "night-black": "#21242D",
        "gunmetal-gray": "#2E313A",
        "cream-light": "#F4F3EE",
        "primary-white": "#f6f5f5",
      },
    },
  },
  plugins: [],
};

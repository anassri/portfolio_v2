/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-green": "#2DE483",
        gray: "#D4D4D4",
        "dark-gray": "#282828",
        "light-gray": "#B6B6B6",
        pill: "#4C4C4C",
      },
    },
  },
  plugins: [],
};

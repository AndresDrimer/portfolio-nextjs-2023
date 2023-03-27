/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '2px 3px 6px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};

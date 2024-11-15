/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#23A6F0',
        'primary-text': '#252B42',
        'secondary-text': '#737373',
      },
    },
    fontFamily: {
      'Montserrat': ['"Montserrat"', "sans-serif"],
    },
  },
  plugins: [],
};

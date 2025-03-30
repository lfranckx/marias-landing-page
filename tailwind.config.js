/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: '#b49fcc',
        brandBlack: '#1a1a1a',
        brandGrey: '#f2f2f2',
        brandWhite: '#ffffff',
      },
      fontFamily: {
        sans: ['Cormorant Garamond', 'serif'], // set as default
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};

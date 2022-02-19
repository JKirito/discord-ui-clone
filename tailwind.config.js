module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      ginto: ['Ginto Nord'],
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

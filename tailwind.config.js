/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const lineClampUtilities = {};
      for (let i = 1; i <= 5; i++) {
        lineClampUtilities[`.line-clamp-${i}`] = {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-line-clamp': `${i}`,
          '-webkit-box-orient': 'vertical',
        };
      }
      addUtilities(lineClampUtilities, ['responsive', 'hover']);
    },
  ],
}


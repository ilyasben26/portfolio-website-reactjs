/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular:["Regular"],
        primaryBold:["Bold"],
      },
      keyframes: {
        borderPop: {
          '0%': { borderWidth: '2px' },
          '50%': { borderWidth: '6px' },
          '100%': { borderWidth: '2px' },
        },
      },
      animation: {
        borderPop: 'borderPop 0.5s ease-out',
      },
    },
  },
  plugins: [],
}


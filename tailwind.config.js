/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
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
    },
  },
  variants: {
    extend: {
      scrollbar: ['dark'],
    },
  },
  plugins: [],
}


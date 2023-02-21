/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Grotesque: "Grotesque-Mono",
        Eurostile: "Eurostile",
      },
      colors: {
        OffWhite: "#F2F2F2",
        Gray: "#787878",
        offGray: "#6D6D6D",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#A18A68",
        darkGray: "#707070",
        lightGray: "#EFEFEF",

        ...defaultTheme.colors,
      },
      backgroundImage: {
        bannerBackground: "url('/src/assets/images/HomeBanner.png')",
      },
    },
  },
  plugins: [],
};

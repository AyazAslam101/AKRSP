/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },

    fontWeight: {
      hairline: 100,
      "extra-light": 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      "extra-bold": 800,
      black: 900,
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#0C9A4A",
        secondary: "#202428",
        tertiary: "#F5F5F5",
        fblack: "#07080C",
        bgprimary: "#F9F9F9",
        svgbg: "#F0F9F4",
        playerbg: "#DBF0E4",
      },
      height: {
        '128': "26rem",
        '132': '32rem',
      },
    },
  },
  plugins: [
  ],
};

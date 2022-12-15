const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');

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
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
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
        lblack: "#353535",
        buttontext: "#2C2727;",
      },
      height: {
        128: "26rem",
        132: "32rem",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    plugin(function ({ addVariant }) {
      addVariant("current", "&.active");
    }),
  ],
};

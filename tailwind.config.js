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
      },
      height: {
        128: "26rem",
        132: "32rem",
      },
    },
  },
  plugins: [],
};

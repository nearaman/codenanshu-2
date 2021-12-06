const { colors: defaultColors } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultColors,
      bgBlack: "#162129",
      secBlack: "#0f171d",
      textWhite: "#ecf8ff",
      textGreen: "#96f9ad",
      textBlue: "#5e8ca7",
      textWhiteBlue: "#c9e2f0",
      selectedbg: "#416883",
      discord: "#5865F2",
      Gray: "#393E46",
      Black: "#1C2A34",
      secgBlack: "#111A20",
      Green: "#B0FBBC",
      secGreen: "#82F9A1",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

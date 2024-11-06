const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6c5ce7', // Tono púrpura base del logo
          light: '#a29bfe',   // Versión más clara de púrpura
          dark: '#4834d4',    // Versión más oscura de púrpura
        },
        secondary: {
          DEFAULT: '#0984e3', // Tono azul base del logo
          light: '#74b9ff',   // Versión más clara de azul
          dark: '#0652DD',    // Versión más oscura de azul
        },
        accent: {
          DEFAULT: '#00cec9', // Tono verde azulado del logo
          light: '#81ecec',   // Versión más clara de verde azulado
          dark: '#00b894',    // Versión más oscura de verde
        },
        customPurple: {
          DEFAULT: '#6129a1', // Tono púrpura personal
          light1: '#a64ff0', // Variante de púrpura muy claro
          light2: '#c440c1', // Variante de púrpura claro medio
          dark1: '#9737ce',  // Variante de púrpura oscuro
          dark2: '#3e0e5e',  // Variante de púrpura muy oscuro
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

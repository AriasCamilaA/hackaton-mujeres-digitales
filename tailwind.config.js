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
          DEFAULT: '#50858B', 
          light: '#8eacbb',
          dark: '#2c3e50',
        },
        secondary: {
          DEFAULT: '#A1D2CE', 
          light: '#d4e9e7',
          dark: '#6c8ba3',
        },
        accent: {
          DEFAULT: '#00cec9', 
          light: '#81ecec',  
          dark: '#00b894',  
        },
        customBlue: {
          DEFAULT: '#50858B',
          light1: '#A1D2CE',
          light2: '#78CAD2',
          dark1: '#62A8AC',  
          dark2: '#5497A7',  
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

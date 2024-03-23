/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightYellow: "hsl(38, 90%, 56%)",
        brightYellowLight: "hsl(37, 86%, 69%)",
        brightYellowSupLight: "hsl(38, 65%, 91%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        darkBlack: "hsl(0, 0%, 0%)",
      },
    },
  },
  plugins: [],
};

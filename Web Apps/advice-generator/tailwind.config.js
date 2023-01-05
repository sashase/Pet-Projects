/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: "Manrope"
      },
      colors: {
        primaryCyan: "hsl(193, 38%, 86%)",
        primaryGreen: "hsl(150, 100%, 66%)",
        grayBlue: "hsl(217, 19%, 38%)",
        darkGrayBlue: "hsl(217, 19%, 24%)",
        darkBlue: "hsl(218, 23%, 16%)"
      }
    }
  },
  plugins: []
}

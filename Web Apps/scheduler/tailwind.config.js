/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: "Pacifico",
        montserrat: "Montserrat"
      },
      colors: {
        green: "#40b32e",
        whiteGreen: "#fafcfa",
        grayGreen: "#f1f5f0",
        blackGreen: "#0c0f0b" ,
        grey: "#8F8F8F",
        darkGray: "#303030",
        darkModeGray: "#1E1E1E"
      },
      boxShadow: {
        def: "0px 3px 20px rgba(0, 0, 0, 0.25)",
        groups: "0px 3px 15px rgba(0, 0, 0, 0.1)",
      }
    }
  },
  plugins: []
}

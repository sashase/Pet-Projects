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
        green: "#40B32E",
        whiteGreen: "#FAFCFA",
        grayGreen: "#F1F5F0",
        blackGreen: "#0C0F0B",
        grey: "#8F8F8F",
        darkGray: "#303030",
        darkModeGray: "#1E1E1E"
      },
      boxShadow: {
        def: "0px 3px 20px rgba(0, 0, 0, 0.25)",
        groups: "0px 3px 15px rgba(0, 0, 0, 0.1)"
      },
      animation: {
        fadein: "fadein 0.1s ease-in forwards"
      },
      keyframes: {
        fadein: {
          "0%": {
            opacity: "0",
            visibility: "hidden"
          },
          "100%": {
            opacity: "1",
            visibility: "visible"
          }
        }
      }
    }
  },
  plugins: []
}

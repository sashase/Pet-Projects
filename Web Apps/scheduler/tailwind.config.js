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
        purple: "#5236D2",
        whitePurple: "#F8F7FD",
        grayPurple: "#EFEEF4",
        grey: "#8F8F8F",
        darkGray: "#303030"
      },
      boxShadow: {
        def: "0px 3px 20px rgba(0, 0, 0, 0.25)",
        groups: "0px 3px 15px rgba(0, 0, 0, 0.1)"
      }
    }
  },
  plugins: []
}

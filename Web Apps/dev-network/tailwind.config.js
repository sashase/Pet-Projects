/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins"
      },
      colors: {
        lighter: "#CFF5E7",
        light: "#A0E4CB",
        dark: "#59C1BD",
        darker: "#0D4C92"
      }
    }
  },
  plugins: []
}

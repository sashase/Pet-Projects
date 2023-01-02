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
        lighter: "#F9F7F7",
        light: "#DBE2EF",
        dark: "#3F72AF",
        darker: "#112D4E"
      }
    }
  },
  plugins: []
}

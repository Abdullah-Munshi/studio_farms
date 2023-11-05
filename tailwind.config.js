/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "1.5rem",
      },
    },
    extend: {
      colors: {
        primary: "#007076",
        green: "#1D4F32",
      },
      boxShadow: {
        one: "0px 5px 21px 0 rgba(36, 135, 206, 0.251)",
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif;",
        raleway: "'Raleway', sans-serif",
        sacramento: "'Sacramento', cursive",
        satisfy: "'Satisfy', cursive",
      },
      backgroundColor: {
        green: "#1D4F32",
      },
      lineHeight: {
        snug: 1.25,
      },
    },
  },
  plugins: [],
};

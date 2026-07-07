/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        gold: {
          tint: "#fbf3df",
          light: "#f3d489",
          DEFAULT: "#e2a020",
          deep: "#bd7e06",
          dark: "#94620a",
        },
        ink: "#221c11",
        smoke: "#6d6353",
        cream: "#faf5ea",
        ivory: "#fffdf7",
        night: "#161209",
        night2: "#221b0e",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"Plus Jakarta Sans"', '"Segoe UI"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 6px 24px rgba(34, 28, 17, 0.07)",
        lift: "0 20px 48px -12px rgba(34, 28, 17, 0.18)",
        gold: "0 12px 30px -8px rgba(226, 160, 32, 0.5)",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};

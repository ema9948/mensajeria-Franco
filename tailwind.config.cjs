/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('./src/img/bg.jpg')",
        bg2: "url('./src/img/bg2.png')",
      },
    },
  },
  plugins: [],
};

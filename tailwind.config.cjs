/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        backgroundImg: "url('../src/assets/Backdrop.png')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        head: '#95999a',
        secondary2: '#f6931c',
        font_color: '#232323',
        custom: {
          DEFAULT: "#10B981",
          light: "#D1FAE5"
        }
      }
    },
  },
  plugins: [],
}
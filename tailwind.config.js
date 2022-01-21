module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1A1B21",
        white: "#FAFBFC"
      },
    }, 
  },
  plugins: [require('tailwindcss-font-inter')],
}

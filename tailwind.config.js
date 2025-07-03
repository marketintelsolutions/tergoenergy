/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        max: '1200px'
      },
      colors: {
        primaryGreen: '#060',
        secondaryGreen: '#79FF91',
        secondaryBlack: '#000',
        lightGreen: '#E1FFE640',
        primaryGrey: '#A7A8A7'
      },
      screens: {
        zr: "0px",
        mb: "430px",
        sm: "640px",
        md: "768px",
        lg: "991px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
}


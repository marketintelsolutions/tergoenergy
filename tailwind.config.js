/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        max: '1600px'
      },
      colors: {
        primaryGreen: '#3bb44a', //rgb(59,180,74) 
        secondaryGreen: '#13294a',// rgb(19,41,74)
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


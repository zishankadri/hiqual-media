/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#9333ea',
        'brand': '#7e22ce',
        // 'brand-light': '#b35cff',
        'brand-light': 'white',
      },
      
      fontFamily: {
        'poppins': ['Poppins'],
        'instrumentSerif': ['Instrument Serif, serif'],
     }
    },
  },
  plugins: [
    // tailwindcss: {},
    // autoprefixer: {},
  ],
}


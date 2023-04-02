/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'mob' : { 'min' : '360px' , 'max': '479px' },
      'xsm' : { 'min' : '480px' , 'max': '639px' },
      'sm'  : {'min': '640px', 'max': '767px'},
      'md'  : {'min': '768px', 'max': '1023px'},
      'lg'  : {'min': '1024px', 'max': '1279px'},
      'xl'  : {'min': '1280px', 'max': '1535px'},
      '2xl' : {'min': '1536px'},
    },
    extend: {
      colors: {
        "abnamro-green": "#337872",
        "abnamro-yellow": "#F9D347",
        "shimmer-gray"       : "#999"
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './public/index.html'
  ],
  theme: {
    extend: {
      width: {
        '1200':'1200px',
        '1120':'1120px',
      },
     
      backgroundColor : {
        primary:'#021A84',
        secondary:'#E5532A',
        red:'#FE4C4C',
        green:'#2ADA66',
        grey:'#F2F2F2',
        white: '#ffffff',
        transparent: 'transparent'

      },
      borderColor : {
        primary:'#021A84',
        secondary:'#E5532A',
        white: '#ffffff',
        black: '#000000'
      },
      textColor:{
        white: '#ffffff',
        black: '#000000'
      },
      cursor: {
        pointer:'pointer'
      },
      maxWidth: {
        '1200':'1200px'
      },
      // backgroundImage:{
      //   // 'Banner' : "url('./public/assets/images/Banner.jpg')"
      // }
    },
  },
  plugins: [],
}

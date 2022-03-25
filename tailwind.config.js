module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-punch': '#F39B17',
        'rosa': '#E818FA',
        'background':"#04032E"
      },
      backgroundImage: {
        'fondo': "url('https://labahiamasbella.com/wp-content/uploads/2020/01/Mural-misael.jpg')",
      },
      extend: {
        height: {
          '75': '25rem'
        }
      }
    
    },
  },
  plugins: [],
}

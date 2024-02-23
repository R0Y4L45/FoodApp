module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FFC529',
        'custom-red' : '#FF6135',
        'custom-white': '#FFFFFF',
        'custom-green': '#66B600',
        'custom-blue': '#42C2E5',
        'custom-grey': '#727272',
        'custom-orange': '#FF6135',
      },
      fontfamily: {
        poppins: {
          'poppins': 'Poppins-Regular'
        }
      }
    },
  },
  plugins: []
}
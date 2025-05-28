export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          brand: ['Poppins', 'sans-serif'],
        },
        colors: {
          brand: '#7C3AED',
        },
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        fontSize: {
          'xxl': '2.75rem',
        },
      },
    },
    plugins: [],
  }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'blue-500':'#1fb6ff',
      'red':{
        '100':"red",
        '200':"pink",
      }
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '150': '40rem'
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}




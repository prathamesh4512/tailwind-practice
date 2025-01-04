/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        150: "40rem",
        1.23: "1.23rem",
      },
      gridColsFit: {},
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        blue: "#1fb6ff",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        "blue-500": "#1fb6ff",
        red: {
          100: "red",
          200: "pink",
        },
      },
      backgroundImage: {
        bac: "url('https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        vite: "url('/abc.svg')",
      },
    },
  },
  plugins: [
    require("./src/plugins/tab-size"),
    require("./src/plugins/grid-auto-fit"),
  ],
};

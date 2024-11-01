/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        10: "10px",
      },
      colors: {
        main: "#246AA3",
        textColor: "#4B465C",
        dark: {
          100: '#4C465C',
          200: '#F8F7FA',
        }
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Itim", "Itim"]
      },
      colors: {
        primary: "#007C4E",
        secondary: "#93D4BC",
        secondary2: "#F1F5FC",
        textPrimary: "#000000",
        testSecondary: "#776E79",
        bgInput: "#F6F6F6",
        bgError: "#E33A3A"
      },
      backgroundImage: {
        "gradient-verde": "linear-gradient(90deg, #007C4E 31%, #008856 44%, #68E0B4 100%)",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};


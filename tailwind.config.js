/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "home-clr": "#2d3134",
        "complementary-clr": "#fdc86b",
        "project-container-clr": "#4B5055",
        "whitish-clr": "#e4e5e6",
        "greyish-clr": "#a3a4a8",
      },
    },
  },
  plugins: [],
};

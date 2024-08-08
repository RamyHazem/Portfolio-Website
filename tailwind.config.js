/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "home-clr": "#151418",
        "complementary-yellow-clr": "#fdc86b",
        "project-container-clr": "#242329",
        "navbar-items-clr": "#a3a4a8",
        "navbar-items-hover-clr": "#e4e5e6",
      },
    },
  },
  plugins: [],
};

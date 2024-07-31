/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "home-clr": "#34353a",
        "project-container-clr": "#30333a",
        "whitish-clr": "#e4e5e6",
        "greyish-clr": "#a3a4a8",
        "view-more-btn": "#fdc86b",
      },
    },
  },
  plugins: [],
};

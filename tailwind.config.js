/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "home-clr": "#483dc6",
        "project-container-clr": "#4852e5",
      },
    },
  },
  plugins: [],
};

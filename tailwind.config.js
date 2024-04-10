/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        salmon: "#F6909E",
        "cream-light": "#F9F9E0",
        "cream-dark": "#FFEBB2",
        purple: "#7469B6",
      },
      spacing: {
        90: "90%",
      },
    },
  },
  plugins: [],
};

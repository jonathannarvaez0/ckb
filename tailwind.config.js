import { transform } from "typescript";

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
      animation: {
        fade: "fade 0.5s ease",
        ball: "ball 0.2s ease",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        ball: {
          "0%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

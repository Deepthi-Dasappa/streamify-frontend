import tailwindScrollbarHide from "tailwind-scrollbar-hide";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(149deg, rgb(108, 30, 65) 6.96%, rgb(37, 23, 67) 40.17%, rgb(18, 12, 31) 73.39%)",
      },
    },
  },
  plugins: [tailwindScrollbarHide],
};

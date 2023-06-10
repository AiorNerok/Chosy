/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "chosy-gray-purple": "#EFEDF5",
        "chosy-gray-dark": "#51515A",
        "chosy-gray": "#A4A5AE",
        "chosy-purple": "#9334e6",
      },
    },
  },
  plugins: [],
};

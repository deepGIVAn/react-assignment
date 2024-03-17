/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite linear",
        blob2: "blob2 7s infinite linear",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0%, 0%)",
          },
          "20%": {
            transform: "translate(-20%, 0%)",
          },
          "40%": {
            transform: "translate(-40%, 0%)",
          },
          "60%": {
            transform: "translate(-60%, 0px)",
          },
          "80%": {
            transform: "translate(-80%, 0px)",
          },
          "100%": {
            transform: "translate(-100%, 40%)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0%, 0%)",
          },
          "20%": {
            transform: "translate(20%, 0%)",
          },
          "40%": {
            transform: "translate(40%, 0%)",
          },
          "60%": {
            transform: "translate(60%, 0px)",
          },
          "80%": {
            transform: "translate(80%, 0px)",
          },
          "100%": {
            transform: "translate(100%, -40%)",
          },
        },
      },
    },
  },
  plugins: [],
};

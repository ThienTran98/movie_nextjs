/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "show-modals": {
          "0%": {
            transform: "translateY(-150%)",
            opacity: 0,
          },

          "100%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
        },
      },
      animation: {
        "show-menu": "show-modals 1s linear",
      },
    },
  },
  plugins: [],
};

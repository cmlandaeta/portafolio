const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 15s linear infinite", // Rotación lenta (20s)
      },
    },
  },
  plugins: [flowbite.plugin()],
};

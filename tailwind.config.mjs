/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "-100% 0" },
          "40%, 100%": { "background-position": "140% 0" },
        },
        gradientMove: {
          "0%": { "background-position": "0% 0%" },
          "100%": { "background-position": "200% 0%" },
        },
      },
      animation: {
        shine: "shine 5s infinite",
        gradientMove: "gradientMove 2s linear infinite",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#242F65",
        secundary: "#FF774C",
        negro: "#2A2C32",
        celeste: "#7390F9",
        plomo: "#4F4F4F",
        gray: "#8B8C8C",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            foreground: "#2D2F30",
          },
        },
      },
    }),
  ],
};

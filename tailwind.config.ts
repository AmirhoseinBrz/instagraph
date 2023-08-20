import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1086px",
        "max-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "max-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "max-lg": { max: "1086px" },
        // => @media (max-width: 1023px) { ... }

        "max-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "max-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        "text-gradiant": "rgba(23, 23, 33, 0.0)",
        "color-primary": "#FD346E",
        "color-secondary": "#5D00D0",
        "body-background-color": "#171721",
        "color-black-5": "rgba(255,255,255,0.5)",
        "color-black-05": "rgba(255,255,255,0.05)",
        "color-black-03": "rgba(255,255,255,0.03)",
        "color-black-2": "rgba(255,255,255,0.2)",
        "color-black-02": "rgba(255,255,255,0.02)",
      },
      backgroundImage: {
        layer: "[url('../../public/layer.png')]",
      },
      animation: {
        "fade-slow": "fadeIn 1s ease-in;",
      },
    },
  },
  plugins: [],
};
export default config;

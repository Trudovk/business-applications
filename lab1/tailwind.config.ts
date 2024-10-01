import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //primery color
        background: "var(--background)",
        foreground: "var(--foreground)",
        //secondary color
        baseblue: "#196AA6",
        baseorange: "#F79420",
        darkblue: "#064B66",
        blue: "#00A0BB",
        darkgreen: "#0D4F4C",
        darkpurple: "#132B4F",
        darkgold: "#C2912E",
        baseyellow: "#FAC826",
        lightgold: "#EDD688",
        lightyellow: "#FFFACB",
      },
    },
  },
  plugins: [],
};
export default config;

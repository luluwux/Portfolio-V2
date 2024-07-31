import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      foreground: "hsl(var(--foreground))",
      background: "hsl(var(--background))", 
      secondary: "var(--secondary)",
      border: "hsl(var(--border))"
    },
  },
  plugins: [],
};
export default config;

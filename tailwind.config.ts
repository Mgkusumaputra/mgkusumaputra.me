import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        "text-primary": "#18181B",
        "text-secondary": "#2A2A2A",
        inactive: "#747476",
        primary: "#2563EB",
        secondary: "#D0DEFB",
        accent: "#047857",
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              padding: "2rem",
              "overflow-x": 'auto'
            }
          }
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

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
        background: "#F5F5F2",
        foreground: "#0A0A0A",
        surface: "#FFFFFF",
        orbital: {
          cyan: "#00E5FF",
          blue: "#0A84FF",
          border: "#E2E2DF",
          darkBorder: "#1F1F1F",
          muted: "#737373",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.06em",
        tight: "-0.04em",
      },
    },
  },
  plugins: [],
};
export default config;
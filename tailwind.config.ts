import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "384px",
      },
      colors: {
        // Semantic role tokens, mapped to Tailwind v4 stock colors
        // ("Schoolyard Blue" palette).
        ink: "#0f172a", // slate-900  — dark base / text
        chalk: "#f8fafc", // slate-50   — light page surface
        brass: "#0ea5e9", // sky-500    — primary accent
        signal: "#f43f5e", // rose-500   — alert / alarm system
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [typography],
};

export default config;

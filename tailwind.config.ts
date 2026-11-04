import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme A & Theme B Industrial Palette
        navy: {
          800: "#172c4d", // Midnight Blue (Theme B)
          900: "#10243a", // Premium Navy (Theme A)
          950: "#0b1726", // Deep Industrial Slate
        },
        steel: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#687787", // Theme A Steel Grey
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
        },
        brand: {
          orange: "#f28c28", // Theme A Vibrant Industrial Orange
          "orange-hover": "#d97416",
          blue: "#2878ff", // High-Tech Electric Blue
          teal: "#0d9488", // Clean Engineering Teal
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(16, 36, 58, 0.08)",
        "card-hover": "0 12px 30px -4px rgba(16, 36, 58, 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;

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
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(16, 36, 58, 0.08)",
        "card-hover": "0 12px 30px -4px rgba(16, 36, 58, 0.16)",
        "glow-orange": "0 0 25px -2px rgba(242, 140, 40, 0.35)",
        "glow-teal": "0 0 25px -2px rgba(13, 148, 136, 0.35)",
        "inner-soft": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "industrial-glow": "radial-gradient(circle at 50% 30%, rgba(242, 140, 40, 0.08) 0%, transparent 70%)",
        "steel-glow": "radial-gradient(ellipse at top, rgba(23, 44, 77, 0.35), transparent 70%)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        fadeInUp: "fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        slideInLeft: "slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        slideInRight: "slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

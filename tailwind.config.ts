import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef5ff",
          100: "#d9e8ff",
          200: "#bcd7ff",
          300: "#8dbbff",
          400: "#5d9bff",
          500: "#3478f6",
          600: "#245edb",
          700: "#1f4caf",
          800: "#203f8a",
          900: "#1e376f",
          950: "#132448"
        },
        paper: "#faf9f5",
        ink: "#172033",
        sky: "#5db7ef",
        warm: "#f4c95d",
        success: "#2f8f5b",
        warning: "#c8751b",
        danger: "#c44747"
      },
      boxShadow: {
        soft: "0 12px 30px rgba(22, 36, 72, 0.08)",
        card: "0 4px 18px rgba(22, 36, 72, 0.07)"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};

export default config;

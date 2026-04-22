import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#092235",
        ocean: "#0F4C5C",
        gold: "#C49A3A",
        mist: "#F3F7F9",
        slate: "#5D6B75"
      },
      fontFamily: {
        display: ["var(--font-sora)"],
        body: ["var(--font-dm-sans)"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(9, 34, 53, 0.18)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(196, 154, 58, 0.12), transparent 28%), linear-gradient(135deg, rgba(15, 76, 92, 0.06), rgba(9, 34, 53, 0.02))"
      }
    }
  },
  plugins: []
};

export default config;


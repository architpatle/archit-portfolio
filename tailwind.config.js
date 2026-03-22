/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "n-bg":      "#0F0F0F",
        "n-elevated":"#161616",
        "n-lime":    "#E8FF47",
        "n-muted":   "rgba(255,255,255,0.28)",
        "n-border":  "rgba(255,255,255,0.06)",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        mono:    ["'DM Mono'",    "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ticker": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "ticker":  "ticker 18s linear infinite",
      },
    },
  },
  plugins: [],
};

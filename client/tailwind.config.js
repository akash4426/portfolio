/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-blue": "#00f3ff",
        "neon-purple": "#bc13fe",
        "deep-space": "#0a0a0a",
        "glass": "rgba(255, 255, 255, 0.05)",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px #00f3ff" },
          "50%": { opacity: "0.5", boxShadow: "0 0 10px #00f3ff" },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "obsidian": "#020617", // Slate 950 - Main background
        "obsidian-light": "#0f172a", // Slate 900 - Cards/Secondary
        "gold-primary": "#f59e0b", // Amber 500 - Primary accent
        "gold-light": "#fbbf24", // Amber 400 - Hover/Highlight
        "gold-dim": "#b45309", // Amber 700 - Dimmed/Borders
        "slate-text": "#94a3b8", // Slate 400 - Secondary text
        "slate-light": "#e2e8f0", // Slate 200 - Primary text
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'obsidian-gradient': 'linear-gradient(to bottom right, #020617, #0f172a)',
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'gold': '0 0 20px rgba(245, 158, 11, 0.15)',
      },
    },
  },
  plugins: [],
}

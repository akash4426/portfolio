/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "void": "#030712",
        "void-light": "#111827",
        "void-card": "#0a0f1a",
        "cyber": "#00ffd5",
        "cyber-dim": "#0d7377",
        "cyber-blue": "#0ea5e9",
        "cyber-glow": "rgba(0, 255, 213, 0.15)",
        "accent-purple": "#a855f7",
        "slate-text": "#94a3b8",
        "slate-light": "#e2e8f0",
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'void-gradient': 'linear-gradient(to bottom right, #030712, #111827)',
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
        "grid-scroll": "gridScroll 20s linear infinite",
        "blink": "blink 1s step-end infinite",
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
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 255, 213, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 255, 213, 0.25)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        gridScroll: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 40px" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'cyber': '0 0 20px rgba(0, 255, 213, 0.15)',
        'cyber-strong': '0 0 40px rgba(0, 255, 213, 0.25)',
      },
    },
  },
  plugins: [],
}

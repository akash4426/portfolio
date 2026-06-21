/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Void / Obsidian dark palette
        "obsidian": "#030712",
        "obsidian-light": "#0a0f1a",
        "void": "#030712",
        "void-light": "#111827",
        "void-card": "#0a0f1a",

        // Gold accent palette
        "gold-primary": "#f59e0b",
        "gold-light": "#fbbf24",
        "gold-dim": "#d97706",

        // Cyber / teal accent
        "cyber": "#00ffd5",
        "cyber-dim": "#0d7377",
        "cyber-blue": "#0ea5e9",
        "cyber-glow": "rgba(0, 255, 213, 0.15)",

        // Accent purple
        "accent-purple": "#a855f7",

        // Slate text shades
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
        'pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
        "grid-scroll": "gridScroll 20s linear infinite",
        "blink": "blink 1s step-end infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 6s ease-in-out infinite",
        "typing": "typing 3s steps(20) infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)", opacity: "0.6" },
          "50%": { transform: "translateY(-20px) rotate(180deg)", opacity: "1" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        typing: {
          "0%": { width: "0" },
          "50%": { width: "100%" },
          "100%": { width: "0" },
        },
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'cyber': '0 0 20px rgba(0, 255, 213, 0.15)',
        'cyber-strong': '0 0 40px rgba(0, 255, 213, 0.25)',
        'gold': '0 0 30px rgba(245, 158, 11, 0.25)',
        'gold-sm': '0 0 15px rgba(245, 158, 11, 0.15)',
      },
    },
  },
  plugins: [],
}

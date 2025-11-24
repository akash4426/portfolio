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
        "neon-cyan": "#00d9ff",
        "neon-purple": "#bc13fe",
        "neon-pink": "#ff006e",
        "neon-green": "#39ff14",
        "electric-violet": "#8b00ff",
        "deep-space": "#0a0a0a",
        "dark-slate": "#0f0f23",
        "glass": "rgba(255, 255, 255, 0.05)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)',
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-slower": "spin 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-glow": "pulse-glow 2s infinite",
        "pulse-glow-purple": "pulse-glow-purple 2s infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 30px rgba(0, 243, 255, 0.6)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 15px rgba(0, 243, 255, 0.4)" },
        },
        "pulse-glow-purple": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 30px rgba(188, 19, 254, 0.6)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 15px rgba(188, 19, 254, 0.4)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { filter: "drop-shadow(0 0 5px rgba(0, 243, 255, 0.5))" },
          "50%": { filter: "drop-shadow(0 0 20px rgba(0, 243, 255, 0.8))" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 243, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(188, 19, 254, 0.5)',
        'neon-blue-lg': '0 0 40px rgba(0, 243, 255, 0.6)',
        'neon-purple-lg': '0 0 40px rgba(188, 19, 254, 0.6)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

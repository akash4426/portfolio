/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neural-blue": "#00f3ff",
        "synapse-purple": "#bc13fe",
        "deep-mind": "#050510", // Darker, bluer background
        "ai-cyan": "#00d9ff",
        "cyber-green": "#00ff41", // Keep as accent for security
        "alert-red": "#ff0000",
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        mono: ['"Share Tech Mono"', '"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'neural-grid': 'radial-gradient(circle, rgba(0, 243, 255, 0.1) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "glow": "glow 2s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "spin-reverse-slow": "spin-reverse 15s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { filter: "drop-shadow(0 0 5px rgba(0, 243, 255, 0.5))" },
          "50%": { filter: "drop-shadow(0 0 20px rgba(0, 243, 255, 0.8))" },
        },
        "spin-reverse": {
          "from": { transform: "rotate(360deg)" },
          "to": { transform: "rotate(0deg)" },
        },
      },
      boxShadow: {
        'neural': '0 0 20px rgba(0, 243, 255, 0.3), 0 0 40px rgba(188, 19, 254, 0.2)',
        'neural-strong': '0 0 30px rgba(0, 243, 255, 0.5), 0 0 60px rgba(188, 19, 254, 0.3)',
      },
    },
  },
  plugins: [],
}

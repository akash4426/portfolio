/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cyber-green": "#00ff41",
        "cyber-blue": "#008F11", // Matrix dark green
        "alert-red": "#ff0000",
        "matrix-black": "#0d0208",
        "neon-blue": "#00f3ff",
        "neon-purple": "#bc13fe",
        "deep-space": "#050505",
        "terminal-green": "#4af626",
        "terminal-dim": "rgba(74, 246, 38, 0.1)",
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', '"Fira Code"', 'monospace'],
        sans: ['"Outfit"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0, 255, 65, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.05) 1px, transparent 1px)',
        'scanline': 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2))',
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "glitch": "glitch 1s linear infinite",
        "scanline": "scanline 8s linear infinite",
        "typing": "typing 3.5s steps(40, end)",
        "blink": "blink .75s step-end infinite",
        "pulse-glow": "pulse-glow 2s infinite",
      },
      keyframes: {
        glitch: {
          "2%, 64%": { transform: "translate(2px,0) skew(0deg)" },
          "4%, 60%": { transform: "translate(-2px,0) skew(0deg)" },
          "62%": { transform: "translate(0,0) skew(5deg)" },
        },
        scanline: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "0% 100%" },
        },
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        blink: {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#00ff41" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 30px rgba(0, 243, 255, 0.6)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 15px rgba(0, 243, 255, 0.4)" },
        },
      },
      boxShadow: {
        'neon-green': '0 0 10px #00ff41, 0 0 20px #00ff41',
        'neon-blue': '0 0 10px #00f3ff, 0 0 20px #00f3ff',
      },
    },
  },
  plugins: [],
}

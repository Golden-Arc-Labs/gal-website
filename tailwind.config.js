module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Rajdhani', 'Lato', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        ink: {
          900: '#05030a',
          800: '#0a0614',
          700: '#0f0a1f',
          600: '#160d2b',
        },
        neon: {
          violet: '#a855f7',
          fuchsia: '#d946ef',
          cyan: '#22d3ee',
        },
      },
      boxShadow: {
        'neon-violet':
          '0 0 8px rgba(168,85,247,0.6), 0 0 24px rgba(168,85,247,0.35)',
        'neon-fuchsia':
          '0 0 8px rgba(217,70,239,0.6), 0 0 28px rgba(217,70,239,0.35)',
        'neon-cyan':
          '0 0 8px rgba(34,211,238,0.6), 0 0 24px rgba(34,211,238,0.3)',
        hud: 'inset 0 0 24px rgba(168,85,247,0.08), 0 8px 30px rgba(0,0,0,0.5)',
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
        typing: "typing 3s steps(30, end) forwards",
        blink: "blink 0.7s infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2.6s ease-in-out infinite",
        "gradient-x": "gradientX 6s ease infinite",
        scan: "scan 4s linear infinite",
        flicker: "flicker 3.5s infinite",
        "spin-slow": "spin 14s linear infinite",
        "border-flow": "borderFlow 4s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(0px) rotate(0deg) scale(1)" },
          "50%": { transform: "translateX(10px) rotate(3deg) scale(1.05)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        glowPulse: {
          "0%, 100%": {
            opacity: "0.85",
            filter: "drop-shadow(0 0 6px rgba(217,70,239,0.55))",
          },
          "50%": {
            opacity: "1",
            filter: "drop-shadow(0 0 18px rgba(217,70,239,0.9))",
          },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1" },
          "20%, 22%, 24%, 55%": { opacity: "0.4" },
        },
        borderFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

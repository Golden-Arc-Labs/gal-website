module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
        typing: "typing 3s steps(30, end) forwards",
        blink: "blink 0.7s infinite",
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
      },
    },
  },
  plugins: [],
};

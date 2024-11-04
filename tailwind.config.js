// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust these paths to match your project structure
  ],
  theme: {
    extend: {
      animation: {
        bounceSlow: 'bounceSlow 6s infinite',
        spinSlow: 'spinSlow 20s linear infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(5%)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1.05)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
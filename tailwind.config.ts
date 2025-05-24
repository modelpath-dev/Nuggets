module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#8B5CF6',
          500: '#6D4AFF',
        },
        zinc: {
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
        orange: {
          500: '#FF5722',
        },
        green: {
          500: '#22C55E',
        },
        red: {
          500: '#EF4444',
        },
        blue: {
          500: '#3B82F6',
        },
        yellow: {
          500: '#EAB308',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
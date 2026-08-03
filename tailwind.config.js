/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dentora: {
          cyan: '#06B6D4',
          'cyan-dark': '#0891B2',
          'cyan-light': '#22D3EE',
          'cyan-soft': '#ECFEFF',
          navy: '#0F172A',
          slate: '#334155',
          muted: '#64748B',
          bg: '#FAFCFF',
          card: '#FFFFFF',
          teal: '#14B8A6',
          'teal-dark': '#0D9488',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        'floating': '0 25px 50px -12px rgba(6, 182, 212, 0.25)',
        'pill': '0 8px 25px -5px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}

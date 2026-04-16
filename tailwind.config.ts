import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        divider: 'rgb(var(--divider) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        gold: 'rgb(var(--gold) / <alpha-value>)',
        error: 'rgb(var(--error) / <alpha-value>)',
        success: 'rgb(var(--success) / <alpha-value>)',
        purple: 'rgb(var(--purple) / <alpha-value>)',
        purpleSoft: 'rgb(var(--purpleSoft) / <alpha-value>)',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(17, 12, 10, 0.06)',
        lift: '0 18px 60px rgba(17, 12, 10, 0.10)',
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    },
  },
  plugins: [],
} satisfies Config;

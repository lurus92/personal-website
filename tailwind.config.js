/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // legacy tokens (other pages, unchanged in this mockup)
        midnight: '#0b1220',
        steel: '#0f172a',
        accent: v('accent'),
        sand: '#f8fafc',
        ink: '#111827',
        // theme tokens
        bg: v('bg'),
        surface: v('surface'),
        fg: v('fg'),
        muted: v('muted'),
        line: v('line'),
        'on-accent': v('on-accent'),
        'accent-ink': v('accent-ink')
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'Menlo', 'monospace']
      }
    }
  },
  plugins: []
};

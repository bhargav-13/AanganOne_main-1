/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Editorial serif for display, humanist grotesque for everything else.
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Warm paper / courtyard surfaces
        paper: '#FBF8F4',
        sand: {
          50: '#F7F2EA',
          100: '#F1E9DD',
          200: '#E6DACA',
          300: '#D6C6B0',
          400: '#BFA98D',
          500: '#A38B6C',
        },
        // Deep warm ink
        ink: {
          50: '#F5F4F7',
          100: '#E9E7ED',
          200: '#D3CFDB',
          300: '#ADA7BC',
          400: '#7E7691',
          500: '#5E566F',
          600: '#463F55',
          700: '#332D40',
          800: '#241F2F',
          900: '#171322',
          950: '#0E0B16',
        },
        // Brand indigo, taken from the AanganOne mark
        indigo: {
          50: '#EEEFFC',
          100: '#DDDEF9',
          200: '#BCBFF2',
          300: '#9A9FEC',
          400: '#7C82E6',
          500: '#646AE8',
          600: '#4F55D8',
          700: '#3E43B4',
          800: '#31358D',
          900: '#282B70',
        },
        // The single warm accent. Indigo + terracotta over warm neutrals is the
        // whole palette — variety comes from value, not from more hues.
        terracotta: { 100: '#F7E3DA', 300: '#E0A188', 500: '#C9603C', 600: '#AC4E2E', 700: '#8B3E24' },
      },
      borderRadius: {
        arch: '9999px 9999px 28px 28px',
        'arch-sm': '9999px 9999px 16px 16px',
        'arch-l': '9999px 28px 28px 9999px',
        card: '20px',
        pill: '999px',
      },
      boxShadow: {
        paper: '0 1px 2px rgba(23,19,34,.04), 0 10px 24px -14px rgba(23,19,34,.18)',
        raise: '0 2px 4px rgba(23,19,34,.04), 0 24px 48px -24px rgba(23,19,34,.30)',
        deep: '0 32px 64px -28px rgba(23,19,34,.45)',
      },
      letterSpacing: {
        tightest: '-0.045em',
        wider2: '0.18em',
      },
      keyframes: {
        rise: { '0%': { opacity: '0', transform: 'translateY(22px)' }, '100%': { opacity: '1', transform: 'none' } },
        ticker: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        sway: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '.25' } },
      },
      animation: {
        rise: 'rise .8s cubic-bezier(.2,.8,.2,1) both',
        ticker: 'ticker 38s linear infinite',
        sway: 'sway 7s ease-in-out infinite',
        blink: 'blink 2s ease-in-out infinite',
      },
      transitionTimingFunction: { smooth: 'cubic-bezier(.2,.8,.2,1)' },
      transitionDuration: { 400: '400ms', 600: '600ms' },
    },
  },
  plugins: [],
}

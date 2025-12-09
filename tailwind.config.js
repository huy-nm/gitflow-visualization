/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ctp: {
          base: 'var(--ctp-base)',
          mantle: 'var(--ctp-mantle)',
          crust: 'var(--ctp-crust)',
          surface0: 'var(--ctp-surface0)',
          surface1: 'var(--ctp-surface1)',
          surface2: 'var(--ctp-surface2)',
          overlay0: 'var(--ctp-overlay0)',
          overlay1: 'var(--ctp-overlay1)',
          overlay2: 'var(--ctp-overlay2)',
          text: 'var(--ctp-text)',
          subtext0: 'var(--ctp-subtext0)',
          subtext1: 'var(--ctp-subtext1)',
          green: 'var(--ctp-green)',
          blue: 'var(--ctp-blue)',
          lavender: 'var(--ctp-lavender)',
          mauve: 'var(--ctp-mauve)',
          red: 'var(--ctp-red)',
          peach: 'var(--ctp-peach)',
          yellow: 'var(--ctp-yellow)',
          teal: 'var(--ctp-teal)',
        },
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
          card: 'var(--bg-card)',
          'card-hover': 'var(--bg-card-hover)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        border: {
          color: 'var(--border-color)',
          active: 'var(--border-active)',
        },
        glass: {
          bg: 'var(--glass-bg)',
          border: 'var(--glass-border)',
        }
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'normal': 'var(--transition-normal)',
        'slow': 'var(--transition-slow)',
      }
    },
  },
  plugins: [],
}

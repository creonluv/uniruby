/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
    "./public/**/*.html",
    "./**/*.{html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color variables - you'll need to define these in your CSS
        'color-background': 'var(--color-background)',
        'color-text': 'var(--color-text)',
        'color-text-reverse': 'var(--color-text-reverse)',
        'color-text-accent': 'var(--color-text-accent)',
        'color-text-muted': 'var(--color-text-muted)',
        'color-primary': 'var(--color-primary)',
        'color-accent': 'var(--color-accent)',
        'color-background-reverse': 'var(--color-background-reverse)',
        'color-border': 'var(--color-border)',
        'color-system-grey': 'var(--color-system-grey)',
      },
      fontFamily: {
        'gilroy': ['Gilroy', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['56px', { lineHeight: '56px', letterSpacing: '-1.5px' }],
        'heading-1-lg': ['92px', { lineHeight: '88px', letterSpacing: '-3.6px' }],
        'heading-2': ['32px', { lineHeight: '38px', letterSpacing: '-0.5px' }],
        'heading-2-lg': ['52px', { lineHeight: '58px', letterSpacing: '-1.2px' }],
        'heading-3': ['24px', { lineHeight: '26px', letterSpacing: '-0.8px' }],
        'heading-3-lg': ['40px', { lineHeight: '44px', letterSpacing: '-0.8px' }],
        'heading-4': ['18px', { lineHeight: '24px', letterSpacing: '-0.3px' }],
        'price': ['24px', { lineHeight: '26px', letterSpacing: '-0.8px' }],
        'price-lg': ['32px', { lineHeight: '44px', letterSpacing: '-0.8px' }],
        'text-light': ['16px', { lineHeight: '24px', letterSpacing: '-0.2px' }],
        'text-bold': ['18px', { lineHeight: '24px', letterSpacing: '-0.2px' }],
        'text-muted': ['12px', { lineHeight: '24px', letterSpacing: '-0.2px' }],
      },
      spacing: {
        'container': '1200px',
        'page-top': '102px',
        'page-top-tablet': '120px',
        'section-gap': '64px',
        'section-gap-mobile': '48px',
        'title-block-gap': '36px',
      },
      borderRadius: {
        'button': '12px',
        'input': '12px',
      },
      gap: {
        'checkbox': '10px',
        'title-block': '8px',
        'group': '16px',
      },
      scale: {
        'checkbox': '1.38',
      },
      maxWidth: {
        'container': '1200px',
      },
      screens: {
        'mobile-landscape': '768px',
        'tablet': '1024px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', visibility: 'hidden' },
          '100%': { opacity: '1', visibility: 'visible' },
        },
        'fade-out': {
          '0%': { opacity: '1', visibility: 'visible' },
          '100%': { opacity: '0', visibility: 'hidden' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-in-out',
        'fade-out': 'fade-out 0.3s ease-in-out',
      },
    },
  },
  plugins: [
    // Plugin for custom utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.adaptive-value': {
          marginTop: 'clamp(48px, 4vw, 64px)',
          marginBottom: 'clamp(48px, 4vw, 64px)',
        },
        '.button-padding-lg': {
          padding: 'clamp(14px, 2vw, 16px) clamp(20px, 3vw, 32px)',
        },
        '.button-padding-md': {
          padding: 'clamp(8px, 1.5vw, 16px) clamp(18px, 2.5vw, 36px)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
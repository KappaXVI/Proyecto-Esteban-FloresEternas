/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        crema: '#FFFCF6',
        blanco: '#FFFFFF',
        'rosa-suave': '#FFDADE',
        ciruela: '#5E0048',
        'cafe-medio': '#83572E',
        'cafe-oscuro': '#572A00',
        'gris-claro': '#E5E5E5',
        vino: '#6E0107',
        'vino-hover': '#5A0106',
        'vino-light': '#8B0109',
      },
      fontFamily: {
        radley: ['Radley', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
        jost: ['Jost', 'sans-serif'],
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'warm': '0 10px 30px -10px rgba(87, 42, 0, 0.15), 0 4px 12px -4px rgba(87, 42, 0, 0.1)',
        'warm-lg': '0 20px 50px -15px rgba(87, 42, 0, 0.2), 0 8px 20px -8px rgba(87, 42, 0, 0.12)',
        'warm-xl': '0 30px 80px -20px rgba(87, 42, 0, 0.25), 0 12px 30px -10px rgba(87, 42, 0, 0.15)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
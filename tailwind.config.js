/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Soft Luxury Palette
        cream: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F5F1EA',
          300: '#EBE4D8',
          400: '#E0D5C5',
        },
        rose: {
          50: '#FFF5F5',
          100: '#FFE8E8',
          200: '#FFCFCF',
          300: '#FFB0B0',
          400: '#FF8585',
          500: '#E85D5D',
        },
        charcoal: {
          50: '#F7F7F7',
          100: '#E3E3E3',
          200: '#C8C8C8',
          300: '#A4A4A4',
          400: '#717171',
          500: '#4A4A4A',
          600: '#2D2D2D',
          700: '#1A1A1A',
        },
        gold: {
          50: '#FFFBF0',
          100: '#FFF4D6',
          200: '#FFE7A8',
          300: '#FFD670',
          400: '#D4AF37',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 40px rgba(0, 0, 0, 0.12)',
        'inner-soft': 'inset 0 2px 8px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}

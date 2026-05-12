import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warna Utama: Navy (Deep & Professional)
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#0f172a', // Slate Navy
          950: '#020617', // Midnight
        },
        // Warna Aksen: Merah dari Logo (Energy & Action)
        accent: {
          logo: '#6366f1', // Electric Indigo
          light: '#06b6d4', // Soft Cyan untuk gradient
        },
        // Warna Pendukung: Abu-abu dari teks logo
        muted: {
          logo: '#444444',
          light: '#F5F5F5',
        },
      },
      fontFamily: {
        // Menggunakan Inter (Sans-serif modern) yang sangat clean
        // Pastikan Anda sudah mengimpor Google Font ini di layout.tsx
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        display: ['var(--font-lexend)', 'Lexend', 'sans-serif'], // Bagus untuk Headline besar
      },
      backgroundImage: {
        'neuro-gradient':
          'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #06b6d4 100%)',
        'dark-gradient': 'linear-gradient(to bottom, #0f172a, #020617)',
      },
      // Penambahan bayangan kustom untuk kartu program/testimoni
      boxShadow: {
        premium: '0 20px 50px rgba(0, 0, 0, 0.1)',
        'accent-glow': '0 0 20px rgba(231, 47, 49, 0.3)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;

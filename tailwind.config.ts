import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna Utama: Navy (Deep & Professional)
        navy: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          800: "#1E1B4B", // Navy Standar
          900: "#0F0D2E", // Navy Lebih Gelap (untuk background utama)
          950: "#07071B",
        },
        // Warna Aksen: Merah dari Logo (Energy & Action)
        accent: {
          logo: "#E72F31", // Merah murni dari logo Anda
          hover: "#C62829", // Merah sedikit lebih gelap untuk hover state
        },
        // Warna Pendukung: Abu-abu dari teks logo
        muted: {
          logo: "#444444",
          light: "#F5F5F5",
        },
      },
      fontFamily: {
        // Menggunakan Inter (Sans-serif modern) yang sangat clean
        // Pastikan Anda sudah mengimpor Google Font ini di layout.tsx
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        display: ['var(--font-lexend)', 'Lexend', 'sans-serif'], // Bagus untuk Headline besar
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Penambahan bayangan kustom untuk kartu program/testimoni
      boxShadow: {
        'premium': '0 20px 50px rgba(0, 0, 0, 0.1)',
        'accent-glow': '0 0 20px rgba(231, 47, 49, 0.3)',
      },
    },
  },
    plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Font untuk teks isi (body)
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

// Font untuk judul (display) agar terlihat lebih bold dan modern
const lexend = Lexend({ 
  subsets: ["latin"], 
  variable: "--font-lexend",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Kampus NLP | Indonesia Training Center",
    template: "%s | Kampus NLP"
  },
  description: "Pusat pelatihan NLP & Hipnoterapi Internasional di Indonesia. Transformasi diri, leadership, dan produktivitas bersama Coach Frans.",
  icons: {
    icon: "/favicon.ico", // Pastikan file ini ada di folder public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${lexend.variable} scroll-smooth`}>
      <body className="font-sans bg-white text-[#900 antialiased">
        {/* Navbar akan selalu ada di bagian atas setiap halaman */}
        <Navbar />
        
        {/* Konten Utama halaman (Home, Blog, dll) */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer akan selalu ada di bagian bawah setiap halaman */}
        <Footer />
      </body>
    </html>
  );
}
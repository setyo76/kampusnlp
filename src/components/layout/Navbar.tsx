"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react"; // Import ikon Hamburger
import MobileMenu from "./MobileMenu"; // Import MobileMenu yang baru dibuat
import Button from "../ui/Button"; // Import Button custom agar efeknya seragam

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Tutup menu jika di klik dari mobile
  };

  return (
    <>
      <nav className="fixed w-full z-9997 bg-navy-900/80 backdrop-blur-md border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO ITC */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <motion.div
              whileHover={{ 
                scale: 1.1,
                filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))" 
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative w-10 h-10 md:w-12 md:h-12"
            >
              <Image 
                src="/images/logo.png" 
                alt="Logo ITC"
                fill
                sizes="(max-width: 768px) 40px, 50px"
                className="object-contain"
              />
            </motion.div>
            <span className="font-display font-bold text-sm md:text-lg leading-tight uppercase tracking-tight">
              KAMPUS<span className="text-accent-logo">NLP</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 font-bold text-m text-gray-300">
            <Link href="/" className="hover:text-accent-logo transition-colors">Home</Link>
            <a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="hover:text-accent-logo transition-colors cursor-pointer text-m">
              Programs
            </a>
            <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="hover:text-accent-logo transition-colors cursor-pointer text-m">
              Testimonials
            </a>
            <Link href="/blog" className="hover:text-accent-logo transition-colors">Blog</Link>
          </div>

          {/* DESKTOP CTA & MOBILE HAMBURGER */}
          <div className="flex items-center gap-4">
            {/* CTA Desktop - Menggunakan komponen Button agar konsisten */}
            <div className="hidden md:block">
              <Button 
                onClick={(e: any) => scrollToSection(e, 'footer')}
                className="bg-accent-logo px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-accent-logo/20"
              >
                Hubungi Kami
              </Button>
            </div>

            {/* Hamburger Button (Hanya muncul di Mobile) */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Render MobileMenu Component */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
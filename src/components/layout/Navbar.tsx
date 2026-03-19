"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  // Fungsi untuk handle smooth scroll secara manual jika diperlukan, 
  // tapi Link href="#id" biasanya sudah cukup di Next.js modern
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full z-[100] bg-navy-900/80 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO ITC dengan Animasi Zoom & Shadow */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <motion.div
            whileHover={{ 
              scale: 1.1,
              filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))" 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative w-[50px] h-[50px]"
          >
            <Image 
              src="/images/logo.png" 
              alt="Logo ITC"
              fill
              sizes="50px"
              className="object-contain"
            />
          </motion.div>
          <span className="font-display font-bold text-lg leading-tight hidden lg:block uppercase tracking-tight">
            Indonesia Training <span className="text-[#E72F31]">Center</span>
          </span>
        </Link>

        {/* MENU - Menggunakan ID yang sesuai dengan section di Page Anda */}
        <div className="hidden md:flex items-center gap-8 font-bold text-m text-gray-300">
          <Link href="/" className="hover:text-[#E72F31] transition-colors">Home</Link>
          
          {/* Pastikan di file page.tsx, section terkait memiliki id="programs" */}
          <a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="hover:text-[#E72F31] transition-colors cursor-pointer">
            Programs
          </a>
          
          <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="hover:text-[#E72F31] transition-colors cursor-pointer">
            Testimonials
          </a>

          {/* Menu Blog untuk melihat semua artikel */}
          <Link href="/blog" className="hover:text-[#E72F31] transition-colors">Blog</Link>
        </div>

        {/* CTA Hubungi Kami - Diarahkan ke Footer (Contact Section) */}
        <motion.a
          href="#footer"
          onClick={(e) => scrollToSection(e, 'footer')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#E72F31] px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-[#E72F31]/20 hover:bg-[#c4282a] transition-all cursor-pointer"
        >
          Hubungi Kami
        </motion.a>
      </div>
    </nav>
  );
}
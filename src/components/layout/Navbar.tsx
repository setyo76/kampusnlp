"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-navy-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO ITC */}
        <div className="flex items-center gap-2">
          <Image 
            src="/images/logo.png" // Pastikan file logo ada di public/logo.png
            alt="Logo ITC"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="font-display font-bold text-xl hidden md:block">
            INDONESIA TRAINING <span className="text-accent-logo">CENTER</span>
          </span>
        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-300">
          <Link href="/" className="hover:text-accent-logo transition-colors">Home</Link>
          <Link href="#programs" className="hover:text-accent-logo transition-colors">Programs</Link>
          <Link href="#testimonials" className="hover:text-accent-logo transition-colors">Testimonials</Link>
        </div>

        {/* CTA */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent-logo px-6 py-2.5 rounded-full font-bold text-sm"
        >
          Hubungi Kami
        </motion.button>
      </div>
    </nav>
  );
}
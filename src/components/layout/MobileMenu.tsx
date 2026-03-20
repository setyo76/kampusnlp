"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Instagram, Facebook, Youtube, ShieldCheck } from "lucide-react";
import Button from "../ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "#about-section" },
  { name: "Program NLP", href: "#programs" },
  { name: "FAQ", href: "#faq" },
  { name: "Kontak", href: "#footer" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-900/60 backdrop-blur-md z-9998"
          />

          {/* Menu Content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-80 bg-white z-9999 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* --- DECORATIVE BACKGROUND ELEMENTS --- */}
            {/* 1. Subtle Wave (Gray) */}
            <svg 
              className="absolute bottom-0 right-0 w-full opacity-[0.05] pointer-events-none" 
              viewBox="0 0 1440 320" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fill="#1a2e44" 
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>

            {/* 2. Grid Pattern (Very Faint) */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ 
                backgroundImage: `radial-gradient(circle at 1px 1px, #1a2e44 1px, transparent 0)`,
                backgroundSize: '30px 30px' 
              }}
            />

            {/* Header Menu */}
            <div className="relative p-6 flex justify-between items-center border-b border-gray-100 bg-white/80 backdrop-blur-md z-10">
              <span className="font-display font-black text-navy-900 text-xl tracking-tighter">
                KAMPUS<span className="text-accent-logo">NLP</span>
              </span>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="text-navy-900" size={24} />
              </button>
            </div>

            {/* Links */}
            <nav className="relative flex-1 px-8 py-10 overflow-y-auto z-10">
              <ul className="space-y-8">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-3xl font-bold text-navy-900 hover:text-accent-logo transition-all block group"
                    >
                      {link.name}
                      <span className="block h-1 w-0 bg-accent-logo transition-all group-hover:w-8 mt-1 rounded-full"></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12">
                <Button 
                  onClick={() => {
                    window.open("https://wa.link/r7ddp7", "_blank");
                    onClose();
                  }}
                  className="w-full bg-navy-900 text-white py-4 rounded-2xl font-bold shadow-lg shadow-navy-900/20 active:scale-95 transition-transform"
                >
                  Konsultasi Gratis
                </Button>
              </div>

              {/* --- CERTIFIED NAVY BOX --- */}
              <div className="mt-10 p-5 bg-navy-900 rounded-2xl border border-navy-800 shadow-xl relative overflow-hidden group">
                {/* Minimalist decoration inside box */}
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:bg-accent-logo/10 transition-colors" />
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className="bg-white/10 p-2 rounded-xl border border-white/10">
                    <ShieldCheck className="text-accent-logo" size={28} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">Certified Center</p>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">International Standard</p>
                  </div>
                </div>
              </div>
            </nav>

            {/* Footer Menu: Socials */}
            <div className="relative p-8 border-t border-gray-100 bg-gray-50/50 z-10">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Social Media</p>
              <div className="flex gap-5">
                {[
                  { Icon: Instagram, href: "#" },
                  { Icon: Facebook, href: "#" },
                  { Icon: Youtube, href: "#" }
                ].map((social, idx) => (
                  <Link 
                    key={idx} 
                    href={social.href} 
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-navy-900 hover:text-white hover:bg-accent-logo hover:border-accent-logo transition-all shadow-sm"
                  >
                    <social.Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
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
            className="fixed inset-0 bg-navy-900/60 backdrop-blur-sm z-[9998]"
          />

          {/* Menu Content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-[300px] bg-white z-[9999] shadow-2xl flex flex-col"
          >
            {/* Header Menu */}
            <div className="p-6 flex justify-between items-center border-b border-gray-100">
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
            <nav className="flex-1 px-6 py-10 overflow-y-auto">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-2xl font-bold text-navy-900 hover:text-accent-logo transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <Button 
                  onClick={() => {
                    window.open("https://wa.link/r7ddp7", "_blank");
                    onClose();
                  }}
                  className="w-full bg-navy-900 text-white py-4 rounded-xl font-bold"
                >
                  Konsultasi Gratis
                </Button>
              </div>
            </nav>

            {/* Footer Menu: Socials */}
            <div className="p-8 border-t border-gray-100 bg-gray-50/50">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-6">
                <Link href="#" className="text-navy-900 hover:text-accent-logo transition-colors">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-navy-900 hover:text-accent-logo transition-colors">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-navy-900 hover:text-accent-logo transition-colors">
                  <Youtube size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
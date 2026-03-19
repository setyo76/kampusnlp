"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Youtube, Send, Facebook, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../../constants/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulasi proses API (Bisa diganti dengan integrasi Mailchimp/Database nanti)
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      // Reset status setelah 3 detik
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="lg:col-span-5">
            <h2 className="text-accent-logo font-bold uppercase tracking-[0.3em] text-xs mb-4">
              Contact
            </h2>
            <h3 className="font-display text-4xl font-extrabold mb-6">
              Get in <span className="text-[#A39674]">Touch</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-sm">
              Kami siap membantu Anda bertransformasi. Berlangganan newsletter untuk update jadwal pelatihan terbaru dari {siteConfig.name}.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col gap-4 max-w-md">
              <div className="relative">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email" 
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-accent-logo transition-colors text-sm disabled:opacity-50"
                  disabled={status === "success"}
                />
                {status === "success" && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400 flex items-center gap-2 text-xs font-bold animate-in fade-in zoom-in">
                    <CheckCircle2 className="w-4 h-4" /> Tersimpan!
                  </div>
                )}
              </div>
              <button 
                type="submit"
                disabled={status !== "idle"}
                className={`bg-accent-logo hover:bg-[#c42527] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 uppercase tracking-widest text-xs disabled:bg-gray-600 disabled:cursor-not-allowed`}
              >
                {status === "loading" ? (
                  "Processing..."
                ) : status === "success" ? (
                  "Thank You!"
                ) : (
                  <>Stay Updated <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-8 border-l-4 border-[#A39674] pl-4">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#programs" className="hover:text-accent-logo transition-colors">Programs NLP</Link></li>
              <li><Link href="/blog" className="hover:text-accent-logo transition-colors">Artikel & Wawasan</Link></li>
              <li><Link href="/about" className="hover:text-accent-logo transition-colors">Tentang Coach Frans</Link></li>
              <li><Link href="#testimonials" className="hover:text-accent-logo transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div id="footer" className="lg:col-span-4 space-y-8 scroll-mt-24">
            <h4 className="font-bold text-lg mb-8 border-l-4 border-[#A39674] pl-4">Office Info</h4>
            
            {/* Address */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent-logo transition-colors">
                <MapPin className="w-5 h-5 text-[#A39674] group-hover:text-white" />
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                {siteConfig.contact.address} <br />
                <span className="text-white font-semibold">{siteConfig.name}</span>
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent-logo transition-colors">
                <Phone className="w-5 h-5 text-[#A39674] group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">Call Us</p>
                <a 
                  href={`https://wa.me/${siteConfig.contact.phoneFull}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-bold hover:text-accent-logo transition-colors tracking-wider"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent-logo transition-colors">
                <Mail className="w-5 h-5 text-[#A39674] group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">Mail Us</p>
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="text-white font-bold hover:text-accent-logo transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm italic">
            © {new Date().getFullYear()} <span className="text-white font-bold tracking-tight uppercase">{siteConfig.name}</span>. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-logo transition-all hover:-translate-y-1">
              <Facebook className="w-6 h-6" />
            </a>
            <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-logo transition-all hover:-translate-y-1">
              <Instagram className="w-6 h-6" />
            </a>
            <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-logo transition-all hover:-translate-y-1">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
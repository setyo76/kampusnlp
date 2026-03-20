"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Youtube, Send, Facebook, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../../constants/site";
import Button from "../../components/ui/Button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Gagal berlangganan");
        setStatus("idle");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Terjadi kesalahan koneksi");
      setStatus("idle");
    }
  };

  return (
    <footer className="relative bg-navy-900 text-white pt-24 pb-10 overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS (Harmonisasi dengan Hero) --- */}
      {/* 1. Efek Glow di sudut (Subtle Focus) */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent-logo/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* 2. Neuro-Grid Pattern (NLP/Mind Connection) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px' 
        }}
      />

      {/* 3. Wave Graphic (Transformation Flow) */}
      <div className="absolute top-0 left-0 w-full rotate-180 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="#A39674" 
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,181.3L1440,128L1440,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="lg:col-span-5">
            <h2 className="text-accent-logo font-bold uppercase tracking-[0.3em] text-xs mb-4">
              Connect With Us
            </h2>
            <h3 className="font-display text-4xl font-extrabold mb-6">
              Start Your <span className="text-[#A39674]">Journey</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Dapatkan update jadwal pelatihan NLP dan tips transformasi diri langsung di inbox Anda. Bergabunglah dengan komunitas {siteConfig.name}.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col gap-4 max-w-md">
              <div className="relative group">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email" 
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-accent-logo focus:bg-white/10 transition-all text-sm disabled:opacity-50"
                  disabled={status === "success"}
                />
                {status === "success" && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400 flex items-center gap-2 text-xs font-bold animate-in fade-in zoom-in">
                    <CheckCircle2 className="w-4 h-4" /> Tersimpan!
                  </div>
                )}
              </div>

              <Button 
                type="submit"
                disabled={status !== "idle"}
                className={`
                  bg-accent-logo text-white font-bold py-4 rounded-2xl 
                  flex items-center justify-center gap-2 uppercase tracking-widest text-xs
                  shadow-[0_10px_20px_-10px_rgba(153,0,0,0.3)]
                  disabled:bg-gray-700 disabled:cursor-not-allowed
                `}
              >
                {status === "loading" ? "Processing..." : status === "success" ? "Thank You!" : <>Stay Updated <Send className="w-3 h-3" /></>}
              </Button>
            </form>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-8 border-l-4 border-[#A39674] pl-4">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="#programs" className="text-gray-400 hover:text-accent-logo hover:translate-x-1 inline-block transition-all">Programs NLP</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-accent-logo hover:translate-x-1 inline-block transition-all">Artikel & Wawasan</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-accent-logo hover:translate-x-1 inline-block transition-all">Tentang Coach Frans</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-accent-logo hover:translate-x-1 inline-block transition-all">Testimonials</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div id="footer" className="lg:col-span-4 space-y-8 scroll-mt-24">
            <h4 className="font-bold text-lg mb-8 border-l-4 border-[#A39674] pl-4">Office Info</h4>
            
            <div className="flex items-start gap-4 group cursor-default">
              <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent-logo transition-all duration-300">
                <MapPin className="w-5 h-5 text-[#A39674] group-hover:text-white" />
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                {siteConfig.contact.address} <br />
                <span className="text-white font-semibold">{siteConfig.name}</span>
              </p>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent-logo transition-all duration-300">
                <Phone className="w-5 h-5 text-[#A39674] group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold mb-1 tracking-wider">Customer Support</p>
                <a 
                  href={`https://wa.me/${siteConfig.contact.phoneFull}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-bold hover:text-accent-logo transition-all flex items-center gap-2 group/link"
                >
                  Hubungi via WhatsApp
                  <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent-logo transition-all duration-300">
                <Mail className="w-5 h-5 text-[#A39674] group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold mb-1 tracking-wider">Mail Us</p>
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
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm italic">
            © {new Date().getFullYear()} <span className="text-white font-bold tracking-tight uppercase">{siteConfig.name}</span>. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {[
              { icon: Facebook, href: siteConfig.socials.facebook },
              { icon: Instagram, href: siteConfig.socials.instagram },
              { icon: Youtube, href: siteConfig.socials.youtube }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-accent-logo transition-all hover:-translate-y-1 shadow-lg"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
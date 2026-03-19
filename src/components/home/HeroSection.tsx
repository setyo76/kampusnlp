"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../../components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-navy-900">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Kolom Kiri: Teks */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white leading-[1.1]">
            Transformational <br />
            <span className="text-accent-logo">Life Coach</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed font-sans">
            Ubah pola pikir dan kuasai masa depan dengan pendekatan NLP yang praktis bersama Indonesia Training Center.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <Button className="bg-accent-logo text-white px-8 py-4 rounded-full font-bold hover:bg-accent-hover transition-all">
              Browse Workshops
            </Button>
            <Button variant="outline" className="border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Learn More
            </Button>
          </div>

          {/* Section: Trusted by Alumni (Social Proof) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {/* Gunakan gambar alumni asli atau placeholder yang konsisten */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative w-12 h-12 rounded-full border-2 border-navy-900 overflow-hidden bg-gray-700">
                   <Image 
                    src={`/images/alumni-${i}.png`} 
                    alt="Alumni" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <p className="text-white font-bold leading-none">Trusted by 12340 Alumni</p>
              <p className="text-gray-400 text-xs mt-1">+ 124 Business Companies</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Kolom Kanan: Gambar dengan Dekorasi Kotak */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Kotak Dekorasi Orange */}
          <div className="absolute top-0 right-10 w-64 h-64 bg-accent-logo/20 rounded-2xl -rotate-12 z-0 hidden md:block" />
          
          {/* Kotak Dekorasi Navy */}
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-navy-800 rounded-2xl rotate-12 z-0 border border-white/10 hidden md:block " />

          {/* Frame Gambar Utama */}
          <div className="relative z-10 w-full max-w-125 aspect-4/5 rounded-3xl overflow-hidden shadow-2xl bg-navy-800">
          <Image
            src="/images/coach-frans1.png"
            alt="Professional Coach NLP"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority // Memberitahu Next.js untuk memuat gambar ini lebih dulu
          />
        </div>
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 w-125 h-125 bg-accent-logo/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
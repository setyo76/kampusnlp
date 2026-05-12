"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const posters = [
  {
    id: 1,
    title: "TOT NLP Practitioner",
    image: "/images/poster-nlp.png", // Pastikan file gambar ada di folder public/images
    waLink: "https://wa.link/r7ddp7"
  },
  {
    id: 2,
    title: "Hypnotherapy Workshop",
    image: "/images/poster-hipno.png",
    waLink: "https://wa.link/r7ddp7"
  }
];

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-navy-950 pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-4">
            Poster <span className="text-transparent bg-clip-text bg-neuro-gradient">Training Terdekat</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Klik pada poster untuk mendaftar atau tanya informasi lebih lanjut melalui WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {posters.map((poster) => (
            <motion.div
              key={poster.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/10">
                <Image
                  src={poster.image}
                  alt={poster.title}
                  width={800}
                  height={1100}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay saat Hover */}
                <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <a 
                    href={poster.waLink}
                    target="_blank"
                    className="bg-navy-900 text-white px-8 py-3 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    Daftar Sekarang
                  </a>
                </div>
              </div>
              <h3 className="text-white text-center mt-6 text-xl font-bold">{poster.title}</h3>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Link href="/" className="text-gray-600 hover:text-navy-900 transition-colors">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
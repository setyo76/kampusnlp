"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { trainings } from "@/lib/trainings";

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-navy-950 pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-4">
            Poster <span className="text-transparent bg-clip-text bg-neuro-gradient">Training Terdekat</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Klik pada poster untuk melihat jadwal lengkap, harga earlybird, dan cara mendaftar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {trainings.map((training) => (
            <motion.div
              key={training.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer"
            >
              <Link href={`/training/${training.slug}`}>
                <div className="relative overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10">
                  <Image
                    src={training.poster}
                    alt={training.title}
                    width={800}
                    height={1100}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay saat Hover */}
                  <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="bg-navy-900 text-white px-8 py-3 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      Lihat Detail & Daftar
                    </span>
                  </div>
                </div>
                <h3 className="text-white text-center mt-6 text-xl font-bold">{training.title}</h3>
                <p className="text-gray-400 text-center mt-1 text-sm">{training.date}</p>
              </Link>
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
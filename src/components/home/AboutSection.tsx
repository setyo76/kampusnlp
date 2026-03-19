"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Sisi Kiri: Visual Coach */}
          <div className="lg:w-1/2 flex flex-col items-center">
            {/* KUNCI PERBAIKAN: 
               whileHover diletakkan di container paling luar agar border ikut membesar.
               layout: "fixed" atau overflow-visible (opsional) pastikan shadow tidak terpotong.
            */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.4, ease: "easeOut" } 
              }} 
              className="relative z-10 rounded-4xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-14 border-gray-50 bg-gray-50 cursor-pointer"
            >
              <Image 
                src="/images/Coach-Frans.png" 
                alt="Coach Frans - Founder Kampus NLP"
                width={700}
                height={850}
                className="object-cover w-full h-auto display-block"
                priority
              />
              
              {/* Overlay halus saat hover tetap dipertahankan */}
              <motion.div 
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className="absolute inset-0 bg-navy-900/5 pointer-events-none transition-opacity duration-500" 
              />
            </motion.div>

            {/* Trusted Text: 2 Baris Proposional */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 text-center space-y-1"
            >
              <p className="text-navy-900 text-2xl md:text-3xl font-black tracking-tight">
                Trusted by <span className="text-accent-logo">12,340+</span> Alumni
              </p>
              <p className="text-[#A39674] text-lg md:text-xl font-bold uppercase tracking-[0.15em]">
                124 Business Companies
              </p>
              <div className="h-1.5 w-20 bg-accent-logo/20 mx-auto mt-4 rounded-full" />
            </motion.div>
          </div>

          {/* Sisi Kanan: Konten Teks */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-accent-logo font-bold uppercase tracking-[0.2em] text-xs mb-4">
                Tentang Kami
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-navy-900 mb-8 leading-[1.15]">
                Membangun Performa Puncak Lewat <span className="text-accent-logo">Neuro-Linguistic Programming</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 font-sans text-lg leading-relaxed">
                <p>
                  Indonesia Training Center (ITC) melalui <span className="font-bold text-navy-900">Kampus NLP</span> hadir sebagai kawah candradimuka bagi mereka yang ingin menguasai seni komunikasi dan teknologi berpikir tingkat tinggi.
                </p>
                <p>
                  Dipandu langsung oleh <span className="text-navy-900 font-bold underline decoration-accent-logo decoration-4 underline-offset-4">Coach Frans</span>, kami telah membimbing ribuan profesional untuk mentransformasi hambatan mental menjadi batu loncatan kesuksesan yang nyata.
                </p>
              </div>

              {/* Action & Signature */}
              <div className="mt-14 flex flex-col sm:flex-row items-center gap-10">
                <Button className="w-full sm:w-auto bg-navy-900 text-white px-10 py-5 rounded-2xl hover:bg-accent-logo transition-all duration-300 shadow-xl hover:-translate-y-1">
                  Kenali Kami Lebih Dekat
                </Button>
                
                <div className="flex flex-col border-l-4 pl-8 border-[#A39674]/20">
                  <span className="font-display font-black text-navy-900 text-3xl italic tracking-tighter leading-none">
                    Coach Frans
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-bold mt-2">
                    Founder Indonesia Training Center
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
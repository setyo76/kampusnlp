"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, CheckCircle2, Building2, UserCheck } from "lucide-react";
import Button from "../../components/ui/Button"; // Import komponen Button custom

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#open-profile") {
      setIsOpen(true);
    }
  }, []);

  return (
    <section id="about-section" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Sisi Kiri: Visual Coach */}
          <div className="lg:w-1/2 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
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
            </motion.div>

            {/* Trusted Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-center space-y-1"
            >
              <p className="text-navy-900 text-2xl md:text-3xl font-black tracking-tight">
                Trusted by <span className="text-accent-logo">12,340+</span> Alumni
              </p>
              <p className="text-[#A39674] text-lg md:text-xl font-bold uppercase tracking-[0.15em]">
                124 Business Companies
              </p>
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
                  Dipandu langsung oleh <span className="text-navy-900 font-bold underline decoration-accent-logo decoration-4 underline-offset-4">Coach Frans</span>, kami telah membimbing ribuan profesional untuk mentransformasi hambatan mental menjadi batu loncatan kesuksesan.
                </p>
              </div>

              {/* Action Button - Diupdate menggunakan Komponen Button */}
              <div className="mt-14 flex flex-col sm:flex-row items-center gap-10">
                <Button 
                  onClick={() => setIsOpen(true)}
                  className="w-full sm:w-auto bg-navy-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-accent-logo shadow-xl"
                >
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

      {/* POPUP MODAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-navy-900/90 backdrop-blur-md"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-linear-to-br from-navy-900 via-[#1a174d] to-navy-900 rounded-[2.5rem] shadow-2xl border border-white/10 flex flex-col"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-accent-logo text-white rounded-full transition-all z-10000 cursor-pointer"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto p-8 md:p-12 custom-scrollbar">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-accent-logo/20 rounded-2xl">
                    <Award className="text-accent-logo w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white">Profil Profesional ITC & Coach Frans</h3>
                </div>

                <div className="grid gap-10">
                  <div className="bg-white/5 p-8 rounded-4xl border border-white/5">
                    <div className="flex items-center gap-3 mb-4 text-accent-logo">
                      <Building2 size={20} />
                      <span className="font-bold uppercase tracking-widest text-sm">Indonesia Training Center (ITC)</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Kampus NLP adalah pusat training NLP dan Hipnoterapi bersertifikat dengan ribuan alumni dan puluhan instruktur. Kampus NLP merupakan situs yang berada dalam naungan <span className="text-white font-bold">Indonesia Training Center</span>, sebuah perusahaan Pengembangan SDM perorangan maupun korporasi. Sejak berdiri tahun 2011, kami bersyukur telah meluluskan ribuan alumni berkualitas.
                    </p>
                  </div>

                  <div className="bg-white/5 p-8 rounded-4xl border border-white/5">
                    <div className="flex items-center gap-3 mb-4 text-accent-logo">
                      <UserCheck size={20} />
                      <span className="font-bold uppercase tracking-widest text-sm">Profil Coach Frans</span>
                    </div>
                    <div className="text-gray-300 space-y-4 leading-relaxed">
                      <p>
                        <span className="text-white font-bold">Fx. Praptoharsoyo (Coach Frans)</span> adalah CEO ITC dan Terapis berpengalaman 20+ tahun. Beliau telah menangani ribuan klien mulai dari masalah Pendidikan hingga Psikosomatis.
                      </p>
                      <p>
                        Memperdalam ilmu dari guru-guru terbaik dunia seperti Anthony Robbins dan Adi Gunawan. Saat ini beliau dipercaya sebagai Master Trainer NeoNLP Society Indonesia dan mengelola &quot;Institute Mind Technology Bandung&quot;.
                      </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Alumni Psikologi Pendidikan UNY",
                        "Pasca Sarjana Magister Manajemen",
                        "Certified Master Trainer NeoNLP Indonesia",
                        "IACT USA Member & Certified",
                        "Instructor Hypnotherapy IBH Indonesia",
                        "Ahli Cognitive Behavior Therapy (CBT)",
                        "Spesialis Ego State Therapy",
                        "Praktisi Q-RAK Level 3"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-gray-400 bg-navy-900/50 p-3 rounded-xl border border-white/5">
                          <CheckCircle2 size={16} className="text-accent-logo shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
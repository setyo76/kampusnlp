"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, Users, Briefcase, Zap, Brain, ShieldCheck } from "lucide-react";
import Button from "../../components/ui/Button";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const trainingData = [
    {
      title: "Training NLP Corporate",
      desc: "Training Neuro-Linguistic Programming yang didesain khusus dan disesuaikan dengan kebutuhan corporate / perusahaan untuk meningkatkan performa tim.",
      icon: <Briefcase className="text-blue-400" />,
      color: "from-blue-600/20 to-blue-900/40"
    },
    {
      title: "NNLP Master Practitioner",
      desc: "Diperuntukkan bagi mereka yang telah mengikuti training NNLP Practitioner untuk mencapai level penguasaan NLP yang lebih mendalam dan komprehensif.",
      icon: <Zap className="text-yellow-400" />,
      color: "from-yellow-600/20 to-yellow-900/40"
    },
    {
      title: "Training NLP Komprehensif",
      desc: "Meliputi Training NLP Practitioner Program, Training NLP Master Program, dan Training NLP Trainer Program dalam satu jalur pembelajaran terpadu.",
      icon: <GraduationCap className="text-emerald-400" />,
      color: "from-emerald-600/20 to-emerald-900/40"
    },
    {
      title: "Training Basic Hypnotherapy",
      desc: "Ilmu yang sangat baik diterapkan dalam berbagai bidang: Penjualan, Pendidikan, Terapi, Kepemimpinan, Pengasuhan, hingga Pemberdayaan diri.",
      icon: <Brain className="text-purple-400" />,
      color: "from-purple-600/20 to-purple-900/40"
    },
    {
      title: "Training Hipnotis Two In One",
      desc: "Output training ini diharapkan peserta dapat mantap memiliki profesi baru sebagai: Psikoterapis, Motivator, Trainer, atau Konsultan SDM.",
      icon: <Users className="text-orange-400" />,
      color: "from-orange-600/20 to-orange-900/40"
    },
    {
      title: "Training Advance Hypnotherapy",
      desc: "Menjadi Hypnotherapist profesional yang siap membuka praktik mandiri dengan penguasaan tiga level ilmu sekaligus dalam satu paket hemat.",
      icon: <ShieldCheck className="text-rose-400" />,
      color: "from-rose-600/20 to-rose-900/40"
    }
  ];

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
            <a href="https://wa.link/r7ddp7" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="w-full bg-accent-logo text-white px-8 py-4 rounded-full font-bold hover:bg-accent-hover transition-all">
                Browse Workshops
              </Button>
            </a>

            <Button 
              onClick={() => setIsModalOpen(true)}
              variant="outline" 
              className="border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* Kolom Kanan: Gambar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative z-10 w-full max-w-125 aspect-4/5 rounded-3xl overflow-hidden shadow-2xl bg-navy-800 border border-white/5">
            <Image src="/images/coach-frans1.png" alt="Coach Frans" fill className="object-cover" priority />
          </div>
        </motion.div>
      </div>

      {/* POPUP MATERI PELATIHAN */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-navy-900/95 backdrop-blur-xl"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden flex flex-col shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-rose-500 text-white rounded-full transition-all z-50"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto p-8 md:p-16 custom-scrollbar">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Program Pelatihan Unggulan</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">Investasi terbaik adalah investasi pada pengembangan diri. Pilih program yang sesuai dengan tujuan karir dan hidup Anda.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {trainingData.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className={`p-8 rounded-4xl bg-linear-to-br ${item.color} border border-white/5 flex flex-col h-full`}
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                        {item.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4 leading-tight">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">{item.desc}</p>
                      <a href="https://wa.link/r7ddp7" target="_blank" className="text-white font-bold text-sm hover:underline flex items-center gap-2">
                        Daftar Sekarang →
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
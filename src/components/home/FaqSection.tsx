"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronDown } from "lucide-react";
import Button from "../../components/ui/Button"; // Import komponen Button custom

const faqs = [
  {
    question: "Bagaimana teknis pelaksanaan pelatihannya?",
    answer: "Kami menawarkan fleksibilitas penuh. Pelatihan dapat diikuti secara Offline (tatap muka) di Bandung dan Jakarta untuk pengalaman yang lebih intens, atau secara Online melalui Zoom Cloud Meeting bagi Anda yang berada di luar kota atau luar negeri.",
  },
  {
    question: "Siapa saja yang bisa mengikuti pelatihan ini?",
    answer: "Program kami terbuka untuk siapa saja yang ingin meningkatkan kualitas hidup. Alumni kami berasal dari berbagai latar belakang, mulai dari pebisnis, pejabat publik, akademisi, tenaga kesehatan (dokter & perawat), tim profesional perusahaan, hingga mahasiswa.",
  },
  {
    question: "Apa saja jenis training yang tersedia di Kampus NLP?",
    answer: "Kami berfokus pada dua pilar utama pengembangan teknologi pikiran, yaitu Neuro-Linguistic Programming (NLP) dan Hipnoterapi. Kedua metode ini dirancang untuk transformasi mental, pola komunikasi, dan penyembuhan diri.",
  },
  {
    question: "Apakah sertifikat yang diberikan diakui secara internasional?",
    answer: "Ya, Kampus NLP bernaung di bawah Indonesia Training Center yang memiliki lisensi resmi. Kami menyediakan jalur sertifikasi yang diakui oleh lembaga internasional terkemuka di bidang NLP dan Hipnoterapi.",
  },
  {
    question: "Berapa lama durasi pelatihan untuk tingkat Practitioner?",
    answer: "Durasi bervariasi tergantung program yang dipilih, namun umumnya intensif selama beberapa hari dengan pendampingan pasca-pelatihan untuk memastikan peserta benar-benar menguasai materi.",
  },
  {
    question: "Apakah ada bimbingan setelah pelatihan selesai?",
    answer: "Tentu. Kami memiliki komunitas alumni di mana Anda bisa terus berdiskusi, mengikuti update materi, dan mendapatkan bimbingan langsung dari Coach Frans agar implementasi ilmu tetap terjaga.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [displayLimit, setDisplayLimit] = useState(3);

  const showMore = () => {
    setDisplayLimit(faqs.length);
  };

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Header FAQ */}
          <div className="lg:w-1/3">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent-logo font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
            >
              FAQ
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6"
            >
              Pertanyaan yang <span className="text-accent-logo">Sering Diajukan</span>
            </motion.h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Belum menemukan jawaban yang Anda cari? Kami siap membantu melalui konsultasi gratis.
            </p>
            
            <a 
              href="https://wa.link/r7ddp7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto"
            >
              {/* Tombol WhatsApp Menggunakan Komponen Button */}
              <Button className="bg-navy-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-accent-logo shadow-lg w-full sm:w-auto">
                WhatsApp Kami
              </Button>
            </a>
          </div>

          {/* Accordion List */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {faqs.slice(0, displayLimit).map((faq, index) => {
                  const isOpen = activeIndex === index;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className={`rounded-3xl border transition-all duration-300 ${
                        isOpen ? "bg-white border-accent-logo/30 shadow-xl" : "bg-white/40 border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {/* Untuk item accordion, kita tetap pakai button biasa agar tidak kena efek zoom scale global */}
                      <button
                        onClick={() => setActiveIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none cursor-pointer"
                      >
                        <span className={`font-bold text-lg md:text-xl pr-4 transition-colors ${
                          isOpen ? "text-accent-logo" : "text-navy-900"
                        }`}>
                          {faq.question}
                        </span>
                        <div className={`shrink-0 p-2 rounded-full transition-transform duration-300 ${
                          isOpen ? "bg-accent-logo text-white rotate-180" : "bg-gray-800 text-white"
                        }`}>
                          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8 text-gray-500 leading-relaxed text-base md:text-lg border-t border-gray-50 pt-4">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Load More Button Menggunakan Komponen Button */}
            {displayLimit < faqs.length && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-10 text-center"
              >
                <Button 
                  onClick={showMore}
                  className="bg-accent-logo inline-flex items-center gap-2 text-white font-bold py-4 px-10 rounded-full shadow-lg group"
                >
                  Lihat Pertanyaan Lainnya
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
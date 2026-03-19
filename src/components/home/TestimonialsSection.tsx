"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Pastikan ini digunakan!
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "CEO TECH INDONESIA",
    content: "Pelatihan NLP dengan Coach Frans benar-benar mengubah cara saya memimpin tim. Komunikasi menjadi lebih persuasif dan efektif.",
    image: "/images/alumni-1.png", // Pastikan file public/images/alumni-1.png ADA
  },
  {
    name: "Sari Wijaya",
    role: "HR DIRECTOR",
    content: "Program Corporate Training-nya sangat aplikatif. Kami melihat peningkatan produktivitas yang signifikan dalam 3 bulan pertama.",
    image: "/images/alumni-2.png",
  },
  {
    name: "dr. Andi Pratama",
    role: "PROFESSIONAL COACH",
    content: "Sertifikasi Internasional di Kampus NLP adalah investasi terbaik saya. Kurikulumnya sangat standar dunia dan mendalam.",
    image: "/images/alumni-3.png",
  },
  {
    name: "Rina Kartika",
    role: "ENTREPRENEUR",
    content: "Teknik mental block release-nya luar biasa. Saya merasa jauh lebih percaya diri dalam mengembangkan bisnis baru saya.",
    image: "/images/alumni-4.png",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div id="testimonials" className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-[#E72F31] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
              Testimoni Alumni
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#0F0D2E] leading-tight">
              Cerita Sukses dari <br />
              <span className="text-[#E72F31]">Mereka yang Bertransformasi</span>
            </h2>
          </div>
          
<div className="hidden md:block text-right">
  {/* Stacked Avatars */}
      <div className="flex justify-end -space-x-4 mb-3">
        {[1, 2, 3, 4].map((i) => (
          <div 
            key={i} 
            className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 relative overflow-hidden shadow-sm"
          >
            <Image
              src={`/images/alumni-${i}.png`}
              alt="Alumni Kampus NLP"
              fill
              sizes="48px" // Karena ukurannya tetap kecil
              className="object-cover"
            />
          </div>
        ))}
      </div>
  <p className="text-xs text-gray-400 font-medium tracking-wide">
    Bergabung dengan <span className="text-[#0F0D2E] font-bold">12,000+</span> lainnya
  </p>
</div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col group hover:shadow-xl transition-all duration-500"
            >
              <Quote className="w-10 h-10 text-[#A39674] opacity-20 mb-6" />
              
              {/* Teks dengan entitas kutipan agar tidak error */}
              <p className="text-gray-600 leading-relaxed italic mb-8 flex-grow text-sm">
                &quot;{item.content}&quot;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className="w-12 h-12 rounded-full bg-[#0F0D2E] relative overflow-hidden flex-shrink-0">
                  {/* PENGGUNAAN IMAGE YANG BENAR */}
                  <Image 
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                  {/* Fallback Inisial jika image tidak load */}
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold -z-10">
                    {item.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#0F0D2E] text-sm leading-none mb-1">{item.name}</h4>
                  <p className="text-[9px] text-[#A39674] font-bold uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
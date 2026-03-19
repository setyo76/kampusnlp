"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

// Dummy data sebelum nanti kita ganti dengan fetch dari Sanity
const dummyBlogs = [
  {
    title: "Cara Mengatasi Anxiety dengan Teknik NLP",
    excerpt: "Kenali pola pikir yang memicu kecemasan dan bagaimana cara mematahkannya dalam hitungan menit.",
    date: "12 Mar 2026",
    image: "/images/blog-1.png",
    slug: "mengatasi-anxiety-nlp"
  },
  {
    title: "Leadership: Memimpin dengan Bahasa Persuasif",
    excerpt: "Bagaimana para pemimpin dunia menggunakan pola bahasa khusus untuk menginspirasi tim mereka.",
    date: "10 Mar 2026",
    image: "/images/blog-2.png",
    slug: "leadership-bahasa-persuasif"
  },
  {
    title: "Sertifikasi NLP: Mengapa Itu Penting?",
    excerpt: "Panduan lengkap mengenai jalur karir sebagai trainer NLP internasional yang diakui dunia.",
    date: "05 Mar 2026",
    image: "/images/blog-3.png",
    slug: "pentingnya-sertifikasi-nlp"
  }
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <p className="text-[#E72F31] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Update Terbaru</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#0F0D2E]">Wawasan & <span className="text-[#E72F31]">Artikel</span></h2>
          </div>
          <Link href="/blog" className="mt-6 md:mt-0 flex items-center gap-2 text-[#0F0D2E] font-bold hover:text-[#E72F31] transition-colors group">
            Lihat Semua Artikel <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {dummyBlogs.map((blog, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 w-full rounded-[2rem] overflow-hidden mb-6 shadow-lg">
                <div className="absolute inset-0 bg-[#0F0D2E]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="flex items-center gap-2 text-gray-400 text-xs mb-3 font-semibold uppercase tracking-widest">
                <Calendar className="w-3 h-3" />
                {blog.date}
              </div>

              <h3 className="text-xl font-bold text-[#0F0D2E] mb-3 group-hover:text-[#E72F31] transition-colors leading-snug">
                {blog.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                {blog.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
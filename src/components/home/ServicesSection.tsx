"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Building2, Award, ArrowRight, X, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Personal Growth",
    shortDesc: "Program transformasi diri untuk menghapus mental block dan meningkatkan kepercayaan diri.",
    fullDesc: "Program ini dirancang khusus untuk individu yang ingin melakukan lompatan kuantum dalam hidupnya. Menggunakan teknik NLP terbaru, kami membantu Anda mengidentifikasi limitasi diri dan mengubahnya menjadi kekuatan pendorong kesuksesan.",
    features: ["Mental Block Release", "Communication Mastery", "Emotional Intelligence", "Peak Performance State"],
    icon: <User className="w-8 h-8" />,
    badge: "Populer",
  },
  {
    title: "Corporate Training",
    shortDesc: "Solusi NLP untuk meningkatkan produktivitas tim dan leadership yang persuasif.",
    fullDesc: "Kami membantu organisasi membangun budaya kerja yang ekselen. Melalui pendekatan NLP Business, tim Anda akan belajar cara berkomunikasi yang lebih efektif, manajemen konflik, dan kepemimpinan yang menginspirasi.",
    features: ["Persuasive Leadership", "Team Dynamics", "Strategic Communication", "Culture Transformation"],
    icon: <Building2 className="w-8 h-8" />,
    badge: "Customizable",
  },
  {
    title: "International Certification",
    shortDesc: "Sertifikasi resmi berstandar internasional bagi Anda yang ingin menjadi praktisi NLP berlisensi.",
    fullDesc: "Jalur resmi bagi Anda yang ingin berkarir sebagai praktisi NLP profesional. Kurikulum kami diakui secara internasional, memastikan Anda mendapatkan standar pembelajaran tertinggi di dunia NLP.",
    features: ["Licensed Practitioner", "Master Practitioner", "Trainer Training", "Global Networking"],
    icon: <Award className="w-8 h-8" />,
    badge: "Official",
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="programs" className="py-24 bg-white overflow-hidden">
      <div  className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#E72F31] font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4"
          >
            Layanan Unggulan
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-extrabold text-[#0F0D2E] leading-tight"
          >
            Investasi Terbaik untuk <span className="text-[#E72F31]">Pertumbuhan Anda</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-[#A39674]/20 mx-auto mt-8 rounded-full" />
        </div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative bg-white p-10 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-[#A39674]/30 transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="absolute top-8 right-10 text-[10px] font-black uppercase tracking-widest text-[#A39674] opacity-40 group-hover:opacity-100 transition-opacity">
                {service.badge}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-[#0F0D2E] text-white flex items-center justify-center mb-10 shadow-lg shadow-navy-900/20 group-hover:scale-110 group-hover:bg-[#E72F31] transition-all duration-500">
                {service.icon}
              </div>

              <h3 className="font-display text-2xl font-black text-[#0F0D2E] mb-5 leading-snug">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-relaxed mb-10 italic">
                "{service.shortDesc}"
              </p>

              <div className="flex items-center gap-3 text-[#0F0D2E] font-bold text-sm group-hover:text-[#E72F31] transition-colors">
                <span>Lihat Detail</span>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#E72F31] group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pop Up Detail (Modal) */}
        <AnimatePresence>
          {selectedService && (
            <>
              {/* Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 bg-[#0F0D2E]/80 backdrop-blur-md z-[99]"
              />

              {/* Modal Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl bg-white z-[100] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-8 right-8 p-2 rounded-full bg-gray-100 hover:bg-[#E72F31] hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="p-8 md:p-12">
                  <div className="w-16 h-16 rounded-2xl bg-[#E72F31] text-white flex items-center justify-center mb-8">
                    {selectedService.icon}
                  </div>
                  
                  <h3 className="font-display text-3xl font-black text-[#0F0D2E] mb-4">
                    {selectedService.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {selectedService.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {selectedService.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#A39674]" />
                        <span className="font-semibold text-[#0F0D2E] text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-[#0F0D2E] text-white py-5 rounded-2xl font-bold hover:bg-[#E72F31] transition-all shadow-xl">
                    Konsultasi Program Ini
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
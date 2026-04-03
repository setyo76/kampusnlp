"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronRight, Clock, CalendarDays } from "lucide-react";

const scheduleData = [
  // === JADWAL TRAINING HIPNOTERAPI 2026 ===
  { id: 1, date: "11-12", month: "Apr", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 2, date: "25-26", month: "Apr", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 3, date: "09-10", month: "Mei", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 4, date: "23-24", month: "Mei", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 5, date: "06-07", month: "Jun", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 6, date: "20-21", month: "Jun", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 7, date: "11-12", month: "Jul", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 8, date: "25-26", month: "Jul", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 9, date: "08-09", month: "Agu", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 10, date: "22-23", month: "Agu", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 11, date: "12-13", month: "Sep", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 12, date: "26-27", month: "Sep", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 13, date: "10-11", month: "Okt", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 14, date: "24-25", month: "Okt", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 15, date: "07-08", month: "Nov", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 16, date: "21-22", month: "Nov", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 17, date: "28-29", month: "Nov", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 18, date: "12-13", month: "Des", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },
  { id: 19, date: "26-27", month: "Des", title: "Basic + Advance Hipnoterapi", location: "Bandung", category: "Hipnoterapi" },

  // === JADWAL TRAINING NLP 2026 ===
  { id: 101, date: "04-05", month: "Apr", title: "NLP Practitioner", location: "Bandung / Online", category: "NLP" },
  { id: 102, date: "11-12", month: "Apr", title: "NLP Practitioner", location: "Bandung / Online", category: "NLP" },
  { id: 103, date: "18-19", month: "Apr", title: "NLP Practitioner", location: "Bandung / Online", category: "NLP" },
  { id: 104, date: "25-26", month: "Apr", title: "NLP Master + Trainer", location: "Bandung", category: "NLP" },
  { id: 105, date: "02-03", month: "Mei", title: "NLP Practitioner", location: "Bandung / Online", category: "NLP" },
  { id: 106, date: "09-10", month: "Mei", title: "NLP Practitioner", location: "Bandung / Online", category: "NLP" },
  { id: 107, date: "23-24", month: "Mei", title: "NLP Master + Trainer", location: "Bandung", category: "NLP" },
  { id: 108, date: "06-07", month: "Jun", title: "NLP Practitioner", location: "Bandung / Online", category: "NLP" },
  { id: 109, date: "13-14", month: "Jun", title: "NLP Practitioner", location: "Bandung / Online", category: "NLP" },
  { id: 110, date: "28-29", month: "Jun", title: "NLP Practitioner", location: "Bandung / Online", category: "NLP" },
];

const categories = ["Semua", "NLP", "Hipnoterapi"];

export default function ScheduleSection() {
  const [activeTab, setActiveTab] = useState("Semua");

  const filteredSchedules = activeTab === "Semua" 
    ? scheduleData 
    : scheduleData.filter(item => item.category === activeTab);

  return (
    <section id="schedules" className="py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-navy-900 text-4xl md:text-5xl font-black leading-tight">
              Agenda Training <span className="text-accent-logo">2026</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              Temukan jadwal kelas yang tepat untuk pengembangan diri Anda di Bandung atau secara Online.
            </p>
          </div>

          {/* Filter Tab */}
          <div className="flex bg-navy-50 p-1.5 rounded-2xl border border-navy-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === cat 
                    ? "bg-navy-900 text-white shadow-lg" 
                    : "text-navy-900/50 hover:text-navy-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-h-200 overflow-y-auto pr-2 custom-scrollbar">
          <AnimatePresence mode="popLayout">
            {filteredSchedules.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group flex items-center gap-6 p-5 bg-gray-50 border border-gray-100 rounded-4xl hover:bg-white hover:border-accent-logo/30 hover:shadow-xl transition-all"
              >
                {/* Date Box */}
                <div className={`shrink-0 w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-white transition-colors duration-300 ${
                  item.category === 'NLP' ? 'bg-navy-900 group-hover:bg-blue-600' : 'bg-navy-900 group-hover:bg-accent-logo'
                }`}>
                  <span className="text-2xl font-black leading-none">{item.date}</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold mt-1 opacity-80">{item.month}</span>
                </div>

                {/* Content Side */}
                <div className="grow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[9px] uppercase font-bold px-2 py-0.5 rounded-md ${
                      item.category === 'NLP' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 leading-tight">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-400 text-xs">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-accent-logo" /> {item.location}
                    </span>
                  </div>
                </div>

                {/* Action CTA */}
                <a 
                  href="https://wa.link/r7ddp7" 
                  target="_blank"
                  className="hidden sm:flex w-10 h-10 items-center justify-center bg-white rounded-full text-navy-900 group-hover:bg-navy-900 group-hover:text-white shadow-sm transition-all"
                >
                  <ChevronRight size={18} />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action Footer */}
        <div className="mt-12 p-10 bg-navy-900 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h4 className="text-white text-2xl font-bold mb-2">Ingin Konsultasi Jadwal atau In-House Training?</h4>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">Tersedia harga khusus untuk pendaftaran berkelompok atau pelatihan khusus instansi/perusahaan.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a 
                href="https://wa.link/r7ddp7" 
                target="_blank"
                className="bg-accent-logo text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                Hubungi Admin (WhatsApp)
              </a>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent-logo/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Komponen Counter Kecil
const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += Math.ceil(end / 100); // percepat hitungan
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime > 10 ? incrementTime : 10);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default function StatsSection() {
  const stats = [
    { label: "Alumni Terlatih", value: 12340, suffix: "+" },
    { label: "Corporate Partners", value: 124, suffix: "" },
    { label: "Tahun Pengalaman", value: 20, suffix: "+" },
    { label: "International Certs", value: 8, suffix: "" },
  ];

  return (
    <section className="py-20 bg-[#0F0D2E] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Garis Aksen Emas di atas angka */}
              <div className="w-10 h-1 bg-[#A39674] mx-auto mb-6 rounded-full opacity-50" />
              
              <div className="text-4xl md:text-6xl font-black font-display mb-2 flex items-center justify-center">
                <Counter value={stat.value} />
                <span className="text-accent-logo">{stat.suffix}</span>
              </div>
              
              <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold">
                {stat.label}
              </p>

              {/* Garis pemisah antar kolom (hanya di desktop) */}
              {index !== stats.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-px h-12 bg-white/10 -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
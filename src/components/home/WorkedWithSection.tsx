"use client";

import Image from "next/image";
import { useRef } from "react";

const logos = Array.from({ length: 15 }, (_, i) => `partner-${i + 1}.png`);
const repeated = [...logos, ...logos, ...logos];

export default function WorkedWithSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-10 bg-white overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-6 mb-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#E72F31] font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
            Kredibilitas
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#0F0D2E] mt-2">
            Berkolaborasi dengan Institusi Terkemuka
          </h2>
          <div className="h-1 w-12 bg-[#E72F31] mx-auto mt-3 rounded-full" />
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden py-6 group"
        onMouseEnter={() => {
          if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
        }}
        onMouseLeave={() => {
          if (trackRef.current) trackRef.current.style.animationPlayState = "running";
        }}
      >
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-white via-white/80 to-transparent" />

        <div
          ref={trackRef}
          className="flex items-center gap-[40px] w-max"
          style={{
            animation: "carousel-scroll 35s linear infinite",
          }}
        >
          {repeated.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center min-w-[140px] transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Image
                src={`/images/${logo}`}
                alt={`Partner ${(index % logos.length) + 1}`}
                width={140} // Sesuaikan dengan minWidth container
                height={70}
                className="object-contain h-14 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                // Jangan tambahkan quality di sini agar tidak error
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes carousel-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </section>
  );
}
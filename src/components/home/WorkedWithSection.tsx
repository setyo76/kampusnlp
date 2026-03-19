"use client";

import Image from "next/image";
import { useRef } from "react";

const logos = Array.from({ length: 15 }, (_, i) => `partner-${i + 1}.png`);
const repeated = [...logos, ...logos, ...logos];

export default function WorkedWithSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-10 bg-white overflow-hidden border-y border-gray-100">
      {/* Header */}
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

      {/* Carousel wrapper */}
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
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
          style={{ background: "linear-gradient(to right, white 0%, rgba(255,255,255,0.8) 60%, transparent 100%)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
          style={{ background: "linear-gradient(to left, white 0%, rgba(255,255,255,0.8) 60%, transparent 100%)" }} />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "40px",
            width: "max-content",
            alignItems: "center",
            animation: "carousel-scroll 35s linear infinite",
          }}
        >
          {repeated.map((logo, index) => (
            <div
              key={index}
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "140px",
                transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.25)";
                (e.currentTarget as HTMLElement).style.zIndex = "20";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLElement).style.zIndex = "1";
              }}
            >
              <Image
                src={`/images/${logo}`}
                alt={`Partner ${(index % logos.length) + 1}`}
                width={180}
                height={90}
                quality={100}
                style={{
                  objectFit: "contain",
                  height: "56px",
                  width: "auto",
                  filter: "grayscale(100%)",
                  opacity: 0.5,
                  transition: "filter 0.3s ease, opacity 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)";
                  (e.currentTarget as HTMLImageElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%)";
                  (e.currentTarget as HTMLImageElement).style.opacity = "0.5";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes carousel-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </section>
  );
}
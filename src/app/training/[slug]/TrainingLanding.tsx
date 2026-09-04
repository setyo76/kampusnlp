"use client";

// Sesuaikan tiga import di bawah dengan path asli di project Anda.
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Video,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Users,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/constants/site";
import type { Training } from "@/lib/trainings";

interface Props {
  training: Training;
}

function useCountdown(isoDate: string) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  } | null>(null);

  useEffect(() => {
    const target = new Date(isoDate).getTime();

    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        isPast: false,
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [isoDate]);

  return timeLeft;
}

function waLink(message: string) {
  return `https://wa.me/${siteConfig.contact.phoneFull}?text=${encodeURIComponent(message)}`;
}

export default function TrainingLanding({ training }: Props) {
  const countdown = useCountdown(training.isoDate);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const seatsLeft = Math.max(training.seatsTotal - training.seatsTaken, 0);
  const seatsPct = Math.min((training.seatsTaken / training.seatsTotal) * 100, 100);

  const registerHref = waLink(training.waMessage);

  return (
    <main className="bg-white text-navy-900">
      {/* HERO */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-sm font-semibold text-accent-logo">
              {training.category} · Sertifikasi Resmi ITC
            </span>

            <h1 className="mt-6 font-display font-bold text-4xl md:text-5xl leading-tight">
              {training.title}
            </h1>

            <p className="mt-4 text-gray-300 text-lg max-w-xl">{training.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <Calendar size={18} className="text-accent-logo" />
                {training.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} className="text-accent-logo" />
                {training.time}
              </span>
              <span className="flex items-center gap-2">
                <Video size={18} className="text-accent-logo" />
                {training.location}
              </span>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                onClick={() => window.open(registerHref, "_blank")}
                className="bg-accent-logo px-8 py-3.5 rounded-full font-bold text-navy-900 shadow-lg shadow-accent-logo/20"
              >
                Daftar Sekarang — {training.priceEarlybird}
              </Button>
              {training.priceNormal && (
                <span className="text-sm text-gray-400">
                  Harga normal <span className="line-through">{training.priceNormal}</span>
                </span>
              )}
            </div>

            {countdown && !countdown.isPast && (
              <div className="mt-10 flex gap-3">
                {[
                  { label: "Hari", value: countdown.days },
                  { label: "Jam", value: countdown.hours },
                  { label: "Menit", value: countdown.minutes },
                  { label: "Detik", value: countdown.seconds },
                ].map((unit) => (
                  <div
                    key={unit.label}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center min-w-16"
                  >
                    <div className="text-2xl font-bold tabular-nums">
                      {String(unit.value).padStart(2, "0")}
                    </div>
                    <div className="text-[11px] text-gray-400 mt-0.5">{unit.label}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative aspect-2/3 w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={training.poster}
              alt={training.title}
              fill
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* MANFAAT */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-center">
          Apa yang Anda dapatkan
        </h2>
        <ul className="mt-10 grid sm:grid-cols-2 gap-5">
          {training.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <CheckCircle2 size={22} className="text-accent-logo shrink-0 mt-0.5" />
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>

        {training.suitableFor.length > 0 && (
          <div className="mt-14 text-center">
            <p className="text-sm font-semibold text-gray-500 mb-4">Cocok untuk</p>
            <div className="flex flex-wrap justify-center gap-2">
              {training.suitableFor.map((role) => (
                <span
                  key={role}
                  className="px-4 py-1.5 rounded-full bg-navy-900/5 text-navy-900 text-sm font-medium"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {training.quote && (
        <section className="bg-navy-900/3 py-14">
          <p className="max-w-2xl mx-auto px-6 text-center text-xl md:text-2xl font-display text-navy-900">
            “{training.quote}”
          </p>
        </section>
      )}

      {/* TRAINER */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-center">
          Dipandu langsung oleh
        </h2>
        <div
          className={`mt-10 grid gap-6 ${
            training.trainers.length > 1 ? "sm:grid-cols-2" : "max-w-md mx-auto"
          }`}
        >
          {training.trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="border border-gray-100 rounded-2xl p-6 flex items-center gap-4 shadow-sm"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-navy-900/10 shrink-0">
                {trainer.photo && (
                  <Image src={trainer.photo} alt={trainer.name} fill className="object-cover" />
                )}
              </div>
              <div>
                <p className="font-bold text-navy-900">{trainer.name}</p>
                <p className="text-sm text-gray-500">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HARGA & KUOTA */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl">Investasi</h2>

          <div className="mt-8 inline-flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl px-10 py-8">
            {training.priceNormal && (
              <span className="text-gray-400 line-through">{training.priceNormal}</span>
            )}
            <span className="mt-1 font-display font-bold text-4xl md:text-5xl text-accent-logo">
              {training.priceEarlybird}
            </span>
            {training.discountLabel && (
              <span className="mt-2 text-sm font-semibold text-white/80">
                {training.discountLabel} · harga earlybird
              </span>
            )}
          </div>

          <div className="mt-8 max-w-sm mx-auto">
            <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
              <span className="flex items-center gap-1.5">
                <Users size={16} /> Kuota peserta
              </span>
              <span>
                {training.seatsTaken}/{training.seatsTotal} terisi
              </span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-accent-logo rounded-full"
                style={{ width: `${seatsPct}%` }}
              />
            </div>
            {seatsLeft <= 20 && (
              <p className="mt-2 text-xs text-accent-logo font-semibold">
                Sisa {seatsLeft} kursi
              </p>
            )}
          </div>

          <div className="mt-10">
            <Button
              onClick={() => window.open(registerHref, "_blank")}
              className="bg-accent-logo px-10 py-4 rounded-full font-bold text-navy-900 shadow-lg shadow-accent-logo/20"
            >
              Amankan Kursi Saya
            </Button>
          </div>

          <p className="mt-4 text-xs text-gray-400 flex items-center justify-center gap-1.5">
            <ShieldCheck size={14} /> Sertifikasi resmi Indonesia Training Center
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-center">
          Pertanyaan yang sering diajukan
        </h2>
        <div className="mt-8 divide-y divide-gray-100 border-t border-b border-gray-100">
          {training.faq.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left font-semibold text-navy-900"
                >
                  {item.question}
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && <p className="pb-5 text-gray-600 leading-relaxed">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 inset-x-0 md:hidden bg-white border-t border-gray-200 p-4 flex items-center justify-between gap-4 z-50">
        <div>
          <p className="text-[11px] text-gray-500 -mb-0.5">Earlybird</p>
          <p className="font-bold text-navy-900">{training.priceEarlybird}</p>
        </div>
        <Button
          onClick={() => window.open(registerHref, "_blank")}
          className="bg-accent-logo px-6 py-3 rounded-full font-bold text-navy-900 flex-1"
        >
          Daftar Sekarang
        </Button>
      </div>

      {/* spacer supaya sticky bar tidak menutupi konten terakhir di mobile */}
      <div className="h-20 md:hidden" />
    </main>
  );
}
// lib/trainings.ts
//
// Satu sumber data untuk semua training yang diiklankan.
// Tambah training baru = tambah satu object ke array `trainings`,
// tidak perlu bikin halaman baru — route [slug] akan otomatis meng-generate-nya.

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Trainer {
  name: string;
  role: string;
  photo?: string; // path relatif ke /public, mis. "/images/trainer-fx.jpg"
}

export interface Training {
  slug: string; // dipakai di URL: /training/[slug]
  category: "Hipnoterapi" | "NLP";
  title: string;
  tagline: string;
  poster: string; // path ke gambar poster di /public/images
  date: string; // tanggal untuk ditampilkan, mis. "27 September 2026"
  isoDate: string; // dipakai untuk hitung mundur, format ISO + offset WIB
  time: string;
  location: string;
  priceNormal: string;
  priceEarlybird: string;
  discountLabel?: string;
  suitableFor: string[];
  benefits: string[];
  trainers: Trainer[];
  quote?: string;
  faq: FaqItem[];
  seatsTotal: number;
  seatsTaken: number; // update manual sesuai pendaftar asli — jangan diisi angka palsu
  waMessage: string; // pesan pre-filled saat CTA WhatsApp diklik
}

export const trainings: Training[] = [
  {
    slug: "basic-hypnosis",
    category: "Hipnoterapi",
    title: "Pelatihan Basic Hypnosis",
    tagline:
      "Kuasai teknik dasar hipnosis secara aman, etis, dan aplikatif untuk membantu diri sendiri dan orang lain mencapai perubahan positif.",
    poster: "/images/poster-hipno-basic.png",
    date: "27 September 2026",
    isoDate: "2026-09-27T09:00:00+07:00",
    time: "09.00 – 16.00 WIB",
    location: "Online via Zoom",
    priceNormal: "Rp 2.000.000",
    priceEarlybird: "Rp 250.000",
    discountLabel: "Hemat 87%",
    suitableFor: [
      "Guru",
      "Orang Tua",
      "Karyawan",
      "Psikolog",
      "Dosen",
      "Mahasiswa",
      "Trainer",
    ],
    benefits: [
      "Memahami prinsip dasar dan tahapan hipnosis",
      "Mampu melakukan induksi dan sugesti sederhana",
      "Mengelola pikiran, emosi, dan stres dengan lebih baik",
      "Meningkatkan komunikasi dan pengaruh positif",
      "Membantu diri sendiri maupun orang lain secara etis dan bertanggung jawab",
    ],
    trainers: [
      {
        name: "FX Praptoharsoyo, CI, MT.NLP",
        role: "Instructor Hypnotherapy & Master Trainer NLP",
      },
    ],
    faq: [
      {
        question: "Apakah saya perlu pengalaman sebelumnya?",
        answer:
          "Tidak. Materi disusun dari dasar, cocok untuk pemula yang belum pernah mempelajari hipnosis sama sekali.",
      },
      {
        question: "Bagaimana teknis pelaksanaannya?",
        answer:
          "Pelatihan berlangsung satu hari penuh secara online melalui Zoom, pukul 09.00–16.00 WIB, dengan sesi praktik langsung yang dipandu instruktur.",
      },
      {
        question: "Apakah saya mendapat sertifikat?",
        answer:
          "Ya, peserta yang menyelesaikan pelatihan mendapat sertifikat resmi dari Indonesia Training Center.",
      },
      {
        question: "Sampai kapan harga earlybird berlaku?",
        answer:
          "Harga earlybird berlaku selama kuota masih tersedia atau sampai mendekati tanggal pelaksanaan, mana yang lebih dulu tercapai.",
      },
    ],
    seatsTotal: 100,
    seatsTaken: 0,
    waMessage: "Halo, saya ingin daftar Pelatihan Basic Hypnosis (27 September 2026)",
  },
  {
    slug: "nlp-for-mental-health",
    category: "NLP",
    title: "NLP for Mental Health",
    tagline:
      "Pahami pikiran, kelola emosi, tingkatkan komunikasi, dan bantu diri sendiri serta orang lain menuju hidup yang lebih sehat dan bahagia.",
    poster: "/images/poster-nlp-mental-health.png",
    date: "18 Oktober 2026",
    isoDate: "2026-10-18T09:00:00+07:00",
    time: "09.00 – 16.00 WIB",
    location: "Online via Zoom",
    priceNormal: "Rp 1.500.000",
    priceEarlybird: "Rp 250.000",
    discountLabel: "Hemat 83%",
    suitableFor: [
      "Perawat",
      "Bidan",
      "Dokter",
      "Guru",
      "Dosen",
      "Karyawan",
      "Trainer",
      "Orang Tua",
      "Mahasiswa",
    ],
    benefits: [
      "Meningkatkan kesehatan mental dan emosional",
      "Mengelola stres, cemas, dan tekanan hidup",
      "Membangun komunikasi yang lebih efektif",
      "Membantu diri sendiri dan orang lain",
      "Meningkatkan percaya diri dan motivasi",
      "Teknik praktis yang mudah dipahami dan diterapkan",
    ],
    trainers: [
      {
        name: "FX Praptoharsoyo, MT.NLP",
        role: "Master Trainer NLP, Trainer & Konsultan SDM",
      },
      {
        name: "Coach Ginanjar, MT.NLP",
        role: "Master Trainer NLP, Coach & Motivator",
      },
    ],
    quote: "Dengan ilmu ini, Anda bisa membantu diri Anda dan membantu orang lain.",
    faq: [
      {
        question: "Apakah training ini termasuk terapi untuk kondisi klinis?",
        answer:
          "Tidak. Training ini mengajarkan teknik NLP untuk pengelolaan diri sehari-hari, bukan pengganti terapi atau penanganan medis/psikologis profesional.",
      },
      {
        question: "Siapa saja yang cocok mengikuti?",
        answer:
          "Terbuka untuk siapa pun yang ingin memahami cara kerja pikiran dan emosi, termasuk tenaga kesehatan, pendidik, karyawan, dan orang tua.",
      },
      {
        question: "Apakah ada sertifikat?",
        answer:
          "Ya, peserta yang menyelesaikan pelatihan mendapat sertifikat resmi dari Indonesia Training Center.",
      },
      {
        question: "Bagaimana jika saya berhalangan di tanggal pelaksanaan?",
        answer:
          "Hubungi tim kami melalui WhatsApp untuk opsi pemindahan jadwal ke sesi berikutnya.",
      },
    ],
    seatsTotal: 100,
    seatsTaken: 0,
    waMessage: "Halo, saya ingin daftar NLP for Mental Health (18 Oktober 2026)",
  },
];

export function getTrainingBySlug(slug: string): Training | undefined {
  return trainings.find((t) => t.slug === slug);
}
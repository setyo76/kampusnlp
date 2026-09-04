// app/training/[slug]/page.tsx
//
// Sesuaikan dua import di bawah dengan alias/path asli di project Anda:
// - "@/lib/trainings"   -> lokasi file trainings.ts yang baru dibuat
// - "@/config/site"     -> lokasi site.ts yang sudah ada (siteConfig)

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { trainings, getTrainingBySlug } from "@/lib/trainings";
import { siteConfig } from "@/constants/site";
import TrainingLanding from "./TrainingLanding";

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-render satu halaman statis per training saat build.
export function generateStaticParams() {
  return trainings.map((t) => ({ slug: t.slug }));
}

// Title, description, dan OG image per training —
// penting supaya link iklan/preview di WhatsApp/Instagram menampilkan poster yang benar.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const training = getTrainingBySlug(slug);
  if (!training) return {};

  const title = `${training.title} | Kampus NLP`;
  const description = training.tagline;
  const url = `${siteConfig.url}/training/${training.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: training.poster, width: 1024, height: 1536, alt: training.title }],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [training.poster],
    },
  };
}

export default async function TrainingPage({ params }: Props) {
  const { slug } = await params;
  const training = getTrainingBySlug(slug);
  if (!training) notFound();

  return <TrainingLanding training={training} />;
}
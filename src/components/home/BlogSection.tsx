"use client";
import { useEffect, useState } from "react";
import { client, urlFor } from "../../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        // Menambahkan tag v2021-10-21 untuk versi API yang lebih stabil
        const query = `*[_type == "post"] | order(publishedAt desc) [0..2] {
          title,
          "currentSlug": slug.current,
          mainImage,
          publishedAt,
          "authorName": author->name
        }`;
        
        const data = await client.fetch(query);
console.log("Posts data:", JSON.stringify(data, null, 2)); // ← Tambahkan ini
if (data) {
  setPosts(data);
}
        
        if (data) {
          setPosts(data);
        }
      } catch (err: any) {
        console.error("Sanity Fetch Error:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) return (
    <div className="py-20 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-logo mx-auto"></div>
      <p className="mt-4 text-gray-400">Memuat artikel...</p>
    </div>
  );

  if (error) return (
    <div className="py-20 text-center text-red-500">
      <p>Gagal memuat artikel: {error}</p>
      <button onClick={() => window.location.reload()} className="mt-4 text-navy-900 underline">Coba Lagi</button>
    </div>
  );

  if (posts.length === 0) return null; // Jangan tampilkan section jika tidak ada post

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-black text-navy-900 leading-tight">
            Artikel <span className="text-accent-logo">Terbaru</span>
          </h2>
          <div className="w-20 h-1.5 bg-accent-logo mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post: any) => (
            <motion.div 
              key={post.currentSlug} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/blog/${post.currentSlug}`} className="block">
                {/* Image Wrapper dengan Aspect Ratio Tetap */}
                <div className="relative w-full aspect-16/10 mb-6 overflow-hidden rounded-3xl bg-gray-100 shadow-sm ring-1 ring-gray-100">
                  {post.mainImage ? (
                    <Image 
                      src={urlFor(post.mainImage).width(600).height(400).url()} 
                      alt={post.title} 
                      fill 
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <p className="text-xs text-accent-logo font-black uppercase tracking-widest flex items-center gap-2">
                    <span className="w-8 h-px bg-accent-logo"></span>
                    {post.authorName || "Indonesia Training Center"}
                  </p>
                  
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-accent-logo transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <div className="pt-2">
                    <span className="text-navy-900 font-bold text-sm border-b-2 border-accent-logo/30 group-hover:border-accent-logo transition-all">
                      Baca Selengkapnya
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";
import { useEffect, useState } from "react";
import { client, urlFor } from "../../lib/sanity";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State loading

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(`*[_type == "post"] | order(publishedAt desc) [0..2] {
          title,
          "currentSlug": slug.current,
          mainImage,
          publishedAt,
          "authorName": author->name
        }`);
        setPosts(data);
      } catch (error) {
        console.error("Sanity fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) return <div className="py-20 text-center text-gray-400">Memuat artikel...</div>;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold mb-10 text-center text-[#0F0D2E]">Artikel Terbaru</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <div key={post.currentSlug} className="group">
              <Link href={`/blog/${post.currentSlug}`}>
                <div className="relative h-64 mb-4 overflow-hidden rounded-2xl bg-gray-100">
                  {post.mainImage && (
                    <Image 
                      src={urlFor(post.mainImage).width(800).url()} // Optimasi ukuran gambar dari Sanity
                      alt={post.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <p className="text-sm text-[#E72F31] font-bold mb-2 uppercase">{post.authorName}</p>
                <h3 className="text-xl font-bold text-[#0F0D2E] group-hover:text-[#E72F31] transition-colors leading-tight">
                  {post.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
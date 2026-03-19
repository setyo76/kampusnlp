import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

// 1. Fungsi Fetch dengan No-Cache agar teks yang baru di-publish langsung muncul
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    body,
    mainImage,
    publishedAt,
    "authorName": author->name,
    "authorImage": author->image
  }`;
  
  // Menggunakan { next: { revalidate: 0 } } untuk mematikan cache selama tahap development
  return await client.fetch(query, { slug }, { next: { revalidate: 0 } });
}

// 2. Custom Components untuk PortableText (PENTING agar teks/gambar muncul benar)
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative w-full h-[300px] md:h-[500px] my-10 rounded-2xl overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Gambar Konten"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-10 mb-4 text-navy-900">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-8 mb-4 text-navy-900">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold mt-6 mb-3 text-navy-900">{children}</h3>,
    normal: ({ children }: any) => <p className="mb-6 text-gray-600 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#E72F31] pl-4 italic my-8 text-gray-700 bg-gray-50 py-2">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-600">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal ml-6 mb-6 space-y-2 text-gray-600">{children}</ol>,
  },
};

export default async function PostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="py-40 text-center">
        <h2 className="text-2xl font-bold mb-4 text-navy-900">Artikel tidak ditemukan</h2>
        <Link href="/blog" className="text-[#E72F31] hover:underline flex items-center justify-center gap-2 font-bold">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Header */}
      <div className="bg-[#0F0D2E] text-white pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#E72F31] mb-8 transition-colors group font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            Kembali ke Blog
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#E72F31]" /> 
              {post.authorName || "Admin ITC"}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#E72F31]" /> 
              {post.publishedAt 
                ? new Date(post.publishedAt).toLocaleDateString('id-ID', { dateStyle: 'long' })
                : "Baru saja"}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-6 -mt-10">
        {/* Main Image */}
        <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-12 bg-gray-200">
          <Image 
            src={urlFor(post.mainImage).url()} 
            alt={post.title} 
            fill 
            className="object-cover" 
            priority 
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        {/* Content Body */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm prose prose-lg max-w-none 
          prose-headings:font-display prose-headings:text-[#0F0D2E]
          prose-p:text-gray-600 prose-strong:text-[#0F0D2E]
          prose-a:text-[#E72F31] hover:prose-a:text-[#c4282a] transition-colors
          prose-img:rounded-2xl shadow-xl shadow-gray-200/50">
          
          {/* Menggunakan value={post.body} dengan components yang sudah kita buat */}
          {post.body ? (
            <PortableText value={post.body} components={ptComponents} />
          ) : (
            <p className="text-gray-400 italic">Artikel ini belum memiliki konten teks.</p>
          )}
        </div>
      </div>
    </article>
  );
}
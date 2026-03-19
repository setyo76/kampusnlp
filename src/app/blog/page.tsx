import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getAllPosts() {
  return await client.fetch(`*[_type == "post"] | order(publishedAt desc)`);
}

export default async function BlogListPage() {
  const posts = await getAllPosts();

  return (
    <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-navy-900 mb-4">Wawasan <span className="text-[#A39674]">NLP</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Pelajari teknik komunikasi, psikologi, dan pengembangan diri terbaru langsung dari Coach Frans.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post: any) => (
            <Link href={`/blog/${post.slug.current}`} key={post._id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-60 overflow-hidden">
                <Image src={urlFor(post.mainImage).url()} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h2 className="text-xl font-bold text-navy-900 mb-4 group-hover:text-accent-logo transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{new Date(post.publishedAt).toLocaleDateString('id-ID')}</span>
                  <span className="text-[#A39674] font-bold">Baca Selengkapnya →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
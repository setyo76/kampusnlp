export const allBlogsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  excerpt,
  "author": author->{name, image}
}[0...3]`; // Kita ambil 3 terbaru untuk BlogSection
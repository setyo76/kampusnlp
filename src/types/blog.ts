export interface Blog {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  mainImage: any;
  excerpt: string;
  body: any; // Untuk isi artikel yang kaya (Portable Text)
  author: {
    name: string;
    image: any;
  };
}
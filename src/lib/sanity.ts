import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-19",
  useCdn: true, // Set ke false jika ingin data paling fresh setiap saat (tapi lebih lambat)
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
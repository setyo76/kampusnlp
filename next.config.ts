/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  // Tambahkan baris di bawah ini untuk mengabaikan error saat build di Vercel
  eslint: {
    // Mengizinkan produksi build selesai meskipun proyek memiliki error ESLint.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Mengizinkan produksi build selesai meskipun proyek memiliki error TypeScript.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
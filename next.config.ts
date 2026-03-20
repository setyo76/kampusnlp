import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Untuk Next.js 15+, gunakan penulisan seperti ini:
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // PERHATIKAN: kuncinya adalah 'ignoreBuildErrors', bukan 'ignoreDuringBuilds' untuk TS
  },
};

export default nextConfig;
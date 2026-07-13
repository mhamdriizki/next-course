import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. TAMBAHKAN BLOK EXPERIMENTAL INI
  experimental: {
    // Wajib diaktifkan untuk Next 16
    cacheComponents: true, 
    // (Opsional) Bikin profil custom 'blog' sesuai slide PDF
    cacheLife: {
      blog: {
        stale: 3600,     // 1 jam
        revalidate: 900, // 15 menit
        expire: 86400,   // 1 hari
      }
    }
  }
};

export default nextConfig;

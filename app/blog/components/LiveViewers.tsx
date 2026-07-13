"use client"; // WAJIB! Karena kita pakai hooks dan butuh browser API

import useSWR from "swr";

// Fetcher standar untuk SWR (mengubah response HTTP jadi JSON)
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function LiveViewers() {
  // Gunakan SWR: Panggil API setiap 3000ms (3 detik)
  const { data, error, isLoading } = useSWR("/api/views", fetcher, {
    refreshInterval: 3000,
  });

  if (error) return <span className="text-red-500 text-sm">Gagal memuat live data</span>;
  if (isLoading) return <span className="text-gray-400 text-sm animate-pulse">Menghitung pembaca...</span>;

  return (
    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      {data.activeViewers} orang sedang membaca (Update: {data.timestamp})
    </div>
  );
}

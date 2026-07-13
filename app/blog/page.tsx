import { Suspense } from "react";
import { getCategories, getPublishedPosts, getTrendingTags } from "@/lib/data/blog";
import { PostList } from "./components/PostList";
import { CategorySidebar } from "./components/CategorySidebar";
import { LiveViewers } from "./components/LiveViewers";

export default async function BlogPage() {
  // 1. MENGUKUR WAKTU (Untuk Pembuktian di Terminal)
  console.time("⏱️ Waktu Fetch Halaman Blog");

  // 2. PARALLEL FETCH DENGAN ERROR HANDLING
  // Kita nge-fetch posts dan trending secara bersamaan.
  // getTrendingTags akan error, tapi kita tangkap pakai .catch() biar halaman nggak hancur!
  const [posts, trendingTags] = await Promise.all([
    getPublishedPosts(),
    getCategories(),
    getTrendingTags().catch(() => ["#NextJS", "#React"]), // Fallback data kalau error
  ]);

  console.timeEnd("⏱️ Waktu Fetch Halaman Blog");

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Artikel Blog 📝</h1>
      {/* Jangan lupa bun add swr */}
      <LiveViewers/>
      <p className="text-slate-500 mb-8">
        Trending saat ini: {trendingTags.join(", ")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom Kiri: Post List (Makan 2 kolom) */}
        <div className="md:col-span-2">
          {/* Komponen Client dari Modul 6.3 */}
          <PostList posts={posts} />
        </div>

        {/* Kolom Kanan: Sidebar Kategori */}
        <div>
          {/* COLOCATION: Sidebar ini punya fetch sendiri, 
              jadi kita bungkus Suspense biar dia nggak nahan render komponen lain! */}
          <Suspense fallback={<div className="p-6 bg-slate-100 rounded-xl animate-pulse h-40">Loading Kategori...</div>}>
            <CategorySidebar />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

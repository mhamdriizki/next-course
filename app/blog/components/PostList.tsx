"use client";

import { PostPreview } from "@/app/types";
import { useState } from "react";

// 1. Mendefinisikan Tipe Props dengan ketat
interface PostListProps {
  posts: PostPreview[];
}

export function PostList({ posts }: PostListProps) {
  // 2. Mengetik useState pakai Union Type (Cuma boleh diisi "all" atau "published")
  const [filter, setFilter] = useState<"all" | "published">("all");

  // Filter array berdasarkan state
  const filteredPosts = filter === "all" 
    ? posts 
    : posts.filter((p) => p.published === true); // TS tahu 'p.published' itu boolean!

  return (
    <div className="mt-4">
      {/* Kontrol Filter */}
      <div className="mb-6 flex gap-2">
        <button 
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Semua Artikel
        </button>
        <button 
          onClick={() => setFilter("published")}
          className={`px-4 py-2 rounded ${filter === "published" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Sudah Terbit
        </button>
      </div>

      {/* Menampilkan Data */}
      <div className="grid gap-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg bg-white shadow-sm">
            <div className="flex justify-between items-center">
              {/* Coba pancing student: hapus 'post.title' lalu ketik 'post.' dan pencet Ctrl+Space */}
              <h3 className="text-lg font-bold text-slate-800">{post.title}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${post.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {post.published ? "Published" : "Draft"}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Slug: /{post.slug}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

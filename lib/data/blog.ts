import { PostPreview } from "@/app/types";


// Fungsi helper untuk bikin delay (Simulasi loading network/database)
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// 1. Fetch Posts (Simulasi butuh 1.5 detik)
export async function getPublishedPosts(): Promise<PostPreview[]> {
  await delay(1500); 
  
  return [
    { id: "1", title: "Belajar Next.js 16", slug: "belajar-nextjs", published: true },
    { id: "2", title: "Memahami App Router", slug: "app-router", published: true },
  ];
}

// 2. Fetch Kategori (Simulasi butuh 1 detik)
export async function getCategories(): Promise<string[]> {
  await delay(1000);
  return ["Tutorial", "Tips & Trick", "Berita"];
}

// 3. Fetch Trending (Simulasi error untuk demo .catch)
export async function getTrendingTags(): Promise<string[]> {
  await delay(500);
  throw new Error("Database trending lagi down!"); 
}

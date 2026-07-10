import { PostPreview } from "../types";
import { PostList } from "./components/PostList";

export default async function BlogPage() {
  // SIMULASI FETCH DARI DATABASE
  // Kita paksa array ini agar mematuhi aturan tipe PostPreview[]
  const dataDariDB: PostPreview[] = [
    { id: "1", title: "Belajar Next.js 16", slug: "belajar-nextjs", published: true },
    { id: "2", title: "Memahami App Router", slug: "app-router", published: true },
    { id: "3", title: "Rahasia Server Components", slug: "server-components", published: false },
    // ERROR CHECKING: Coba tambahkan object tanpa 'published', TS pasti bakal langsung teriak merah!
  ];

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-slate-900">Artikel Blog 📝</h1>
      <p className="text-slate-500">Daftar artikel yang Type-Safe dari Server ke Client.</p>
      
      {/* Menyuntikkan data statis ke Client Component */}
      <PostList posts={dataDariDB} />
    </div>
  );
}

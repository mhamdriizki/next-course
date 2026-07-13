import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import CommentsSection from "./components/CommentsSection";

// Halaman utama (Cepat di-render)
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Jangan lupa install bun add react-error-boundary
  return (
    <article className="max-w-3xl mx-auto p-8">
      {/* BAGIAN 1: KONTEN UTAMA (RENDER INSTAN) */}
      <div className="mb-12">
        <p className="text-blue-500 font-semibold mb-2">Artikel Blog / {slug}</p>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Rahasia Streaming di Next.js 16
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed">
          Teks artikel ini di-render super cepat oleh server. User bisa langsung membaca teks ini tanpa harus menunggu kolom komentar yang ada di bawah selesai di-load. Ini adalah keajaiban dari arsitektur App Router!
        </p>
      </div>

      {/* BAGIAN 2: KOLOM KOMENTAR (LAMBAT & RAWAN ERROR) */}
      <hr className="my-8" />
      
      {/* ErrorBoundary: Kalau komentar gagal, halaman artikel TETAP AMAN! */}
      <ErrorBoundary 
        fallback={
          <div className="mt-8 p-4 bg-red-50 text-red-600 border border-red-200 rounded-lg">
            ⚠️ Gagal memuat komentar. Silakan refresh halaman.
          </div>
        }
      >
        {/* Suspense: Tampilkan Skeleton/Teks Loading selama 3 detik! */}
        <Suspense 
          fallback={
            <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200 animate-pulse">
              <div className="h-6 bg-slate-200 rounded w-1/3 mb-4"></div>
              <div className="h-20 bg-slate-200 rounded w-full"></div>
            </div>
          }
        >
          <CommentsSection slug={slug} />
        </Suspense>
      </ErrorBoundary>

    </article>
  );
}

// SERVER COMPONENT
export default async function CommentsSection({ slug }: { slug: string }) {
  // 1. Simulasi API Komentar yang Lelet (Delay 3 detik)
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // 2. Simulasi Error Random (50% kemungkinan gagal)
  // Untuk live coding, lo bisa ganti Math.random() > 0.5 jadi `true` biar pasti error saat didemoin!
  const isError = false; 
  
  if (isError) {
    throw new Error("Koneksi ke server komentar terputus!");
  }

  // 3. Jika sukses
  return (
    <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
      <h3 className="text-xl font-bold mb-4">💬 Komentar untuk: {slug}</h3>
      <div className="space-y-3">
        <div className="p-3 bg-white rounded shadow-sm border border-slate-100">
          <p className="font-semibold text-blue-600">Budi Santoso</p>
          <p className="text-gray-600">Artikel yang sangat daging, min! Lanjutkan!</p>
        </div>
        <div className="p-3 bg-white rounded shadow-sm border border-slate-100">
          <p className="font-semibold text-blue-600">Tono Gym</p>
          <p className="text-gray-600">Wah baru tau gue Next.js bisa secepat ini.</p>
        </div>
      </div>
    </div>
  );
}

export default function HomeTailwindV4() {
  return (
    <main className="min-h-screen p-8 lg:p-24">
      {/* Menggunakan Tipografi standar Tailwind */}
      <h1 className="text-4xl font-extrabold tracking-tight mb-8">
        Next JS Course 💪
      </h1>

      {/* Mendemokan Responsive Grid (Mobile 1 kolom, Desktop 2 kolom) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* KARTU 1 (Pakai warna default Tailwind) */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-lg">
          <h2 className="text-xl font-bold text-brand-gelap mb-2">Shadcn/ui</h2>
          <p className="text-brand-gelap/80">Komponen library</p>
        </div>

        {/* KARTU 2 (Membuktikan CUSTOM THEME v4 kita bekerja!) */}
        <div className="bg-brand-terang p-6 rounded-super shadow-md border border-brand-utama transition-transform hover:-translate-y-1 hover:shadow-lg">
          {/* text-brand-gelap otomatis ada karena CSS @theme tadi */}

          <h2 className="text-xl font-bold mb-2">Tailwind</h2>
          <p className="text-gray-500">Framework CSS</p>
        </div>
      </div>
    </main>
  );
}

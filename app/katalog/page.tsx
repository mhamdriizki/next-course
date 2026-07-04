import { cookies } from "next/headers";
import Link from "next/link";

export default async function KatalogPage({
  searchParams,
}: {
  // Tipe manual: WAJIB Promise di Next 16
  searchParams: Promise<{ q?: string; page?: string }>; 
}) {
  // BREAKING CHANGE: Wajib di-await!
  // Kita beri nilai default: jika q kosong = "", jika page kosong = "1"
  const { q = "", page = "1" } = await searchParams;

  const currentPage = parseInt(page);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <CekTemaPengguna />
      <h1>🛒 Katalog Produk</h1>
      
      {/* Form pencarian sederhana HTML bawaan */}
      <form method="GET" style={{ marginBottom: "2rem" }}>
        <input 
          type="text" 
          name="q" 
          defaultValue={q} 
          placeholder="Cari barang..." 
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem" }}>Cari</button>
      </form>

      <div style={{ padding: "1rem", borderRadius: "8px" }}>
        <p>Menampilkan hasil pencarian untuk: <strong>"{q || "Semua Barang"}"</strong></p>
        <p>Halaman aktif: <strong>{currentPage}</strong></p>
      </div>

      {/* Navigasi Paginasi Manual */}
      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <Link href={`/katalog?q=${q}&page=${currentPage - 1}`}>⬅️ Sebelumnya</Link>
        <Link href={`/katalog?q=${q}&page=${currentPage + 1}`}>Selanjutnya ➡️</Link>
      </div>
    </div>
  );
}

async function CekTemaPengguna() {
  // BREAKING CHANGE: cookies() sekarang wajib di-await!
  const cookieStore = await cookies();
  const tema = cookieStore.get("theme")?.value || "light";
  console.log(cookieStore);

  return (
    <div style={{ 
      marginTop: "2rem", 
      padding: "1rem", 
      background: tema === "dark" ? "#333" : "#eee",
      color: tema === "dark" ? "#fff" : "#000"
    }}>
      <p>Tema saat ini dari Cookie: {tema}</p>
    </div>
  );
}

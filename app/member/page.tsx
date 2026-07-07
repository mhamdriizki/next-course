import Link from "next/link";
import SearchForm from "../components/SearchForm";

export default async function MemberPage({
  searchParams,
}: {
  searchParams: Promise<{ crash?: string; q?: string }>;
}) {
  const { crash, q } = await searchParams;

  // 1. SIMULASI DELAY (Biar loading.tsx kelihatan)
  // Ibaratnya lagi angkat beban berat nunggu database
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // 2. SIMULASI ERROR (Jika dikasih ?crash=true di URL)
  if (crash === "true") {
    throw new Error("Waduh, koneksi ke Database terputus!");
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Daftar Absensi Course Next.js</h1>
      <p>Data ini berhasil ditarik setelah loading 2 detik.</p>

      <SearchForm/>
      
      <ul style={{ marginTop: "1rem", lineHeight: "2" }}>
        <li><Link href="/member/budi">Member 1: Budi</Link></li>
        <li><Link href="/member/tono">Member 2: Tono</Link></li>
        <li><Link href="/member/999">Member 999: (ID Ngawur)</Link></li>
      </ul>

      {/* Tombol buat ngetest error */}
      <Link 
        href="/member?crash=true" 
        style={{ 
          display: "inline-block", marginTop: "2rem", padding: "10px", 
          background: "red", color: "white", textDecoration: "none" 
        }}
      >
        Picu Error
      </Link>
    </div>
  );
}
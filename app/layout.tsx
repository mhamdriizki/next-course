import Link from "next/link";
import "./globals.css"; // Sesuaikan jika ada

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {/* Ini Navbar Global - Akan muncul di SEMUA halaman */}
        <nav style={{ padding: "1rem", background: "#111", color: "white", display: "flex", gap: "1rem" }}>
          <strong>NextBlog</strong>
          <Link href="/" style={{ color: "white" }}>Home</Link>
          <Link href="/blog" style={{ color: "white" }}>Blog</Link>
          <Link href="/dashboard" style={{ color: "white" }}>Dashboard</Link>
          <Link href="/katalog" style={{ color: "white" }}>Katalog</Link>
        </nav>

        {/* 'children' adalah tempat halaman (page.tsx) di-inject */}
        <main style={{ padding: "2rem", minHeight: "80vh" }}>
          {children}
        </main>

        <footer style={{ padding: "1rem", background: "#eee", textAlign: "center" }}>
          &copy; 2026 Belajar Next.js
        </footer>
      </body>
    </html>
  );
}

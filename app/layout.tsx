import Link from "next/link";
import "./globals.css"; // Sesuaikan jika ada
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {/* Ini Navbar Global - Akan muncul di SEMUA halaman */}
        <Navbar/>

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

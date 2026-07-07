import Link from "next/link";
import "./globals.css"; // Sesuaikan jika ada
import Navbar from "./components/Navbar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={cn("font-sans", geist.variable)}>
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

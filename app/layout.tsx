import Link from "next/link";
import "./globals.css"; // Sesuaikan jika ada
import Navbar from "./components/Navbar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./components/ThemeProvider";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // WAJIB TAMBAHKAN suppressHydrationWarning di <html> !!!
    // Ini mencegah React panik kalau tema server (default) beda sama tema browser user    
    <html lang="id" className={cn("font-sans", geist.variable)} suppressHydrationWarning>
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {/* Bungkus semua di dalam ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Ini Navbar Global - Akan muncul di SEMUA halaman */}
          <Navbar/>
    
          {/* 'children' adalah tempat halaman (page.tsx) di-inject */}
          <main style={{ padding: "2rem", minHeight: "80vh" }}>
            {children}
          </main>
    
          <footer style={{ padding: "1rem", background: "#eee", textAlign: "center" }}>
            &copy; 2026 Belajar Next.js
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

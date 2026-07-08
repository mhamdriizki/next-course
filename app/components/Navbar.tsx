"use client"; // Wajib buat usePathname!

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname(); // Nangkep URL saat ini

  return (
    <nav style={{ background: "#1f2937", padding: "1rem", display: "flex", gap: "1rem" }}>
      {/* Kita pakai <Link>, bukan <a href="..."> biar pindah halaman instan! */}
      <Link 
        href="/" 
        style={{ 
          color: pathname === "/" ? "#34d399" : "white", // Nyala hijau kalau aktif
          fontWeight: pathname === "/" ? "bold" : "normal",
          textDecoration: "none" 
        }}
      >
        Home
      </Link>
      
      <Link 
        href="/blog" 
        style={{ 
          color: pathname.startsWith("/blog") ? "#34d399" : "white", 
          fontWeight: pathname.startsWith("/blog") ? "bold" : "normal",
          textDecoration: "none" 
        }}
      >
        Blog
      </Link>

      <Link 
        href="/dashboard" 
        style={{ 
          color: pathname.startsWith("/dashboard") ? "#34d399" : "white", 
          fontWeight: pathname.startsWith("/dashboard") ? "bold" : "normal",
          textDecoration: "none" 
        }}
      >
        Dashboard
      </Link>

      <Link 
        href="/katalog" 
        style={{ 
          color: pathname.startsWith("/katalog") ? "#34d399" : "white", 
          fontWeight: pathname.startsWith("/katalog") ? "bold" : "normal",
          textDecoration: "none" 
        }}
      >
        Katalog
      </Link>  

      <Link 
        href="/galeri" 
        style={{ 
          color: pathname.startsWith("/galeri") ? "#34d399" : "white", 
          fontWeight: pathname.startsWith("/galeri") ? "bold" : "normal",
          textDecoration: "none" 
        }}
      >
        Galeri
      </Link>

      <Link 
        href="/member" 
        style={{ 
          color: pathname.startsWith("/member") ? "#34d399" : "white", 
          fontWeight: pathname.startsWith("/member") ? "bold" : "normal",
          textDecoration: "none" 
        }}
      >
        Member
      </Link> 

      <ThemeToggle/>
    </nav>
  );
}

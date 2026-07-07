"use client"; // Karena butuh interaktivitas form dan router

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const router = useRouter(); // Alat sakti navigasi dari event

  const handleCari = (e: React.FormEvent) => {
    e.preventDefault(); // Cegah full reload bawaan HTML form
    
    if (query) {
      // Dorong user ke URL baru tanpa me-reload halaman
      router.push(`/member/${query}`);
    }
  };

  return (
    <form onSubmit={handleCari} style={{ margin: "1.5rem 0", padding: "1rem", borderRadius: "8px" }}>
      <h3>Cari Member Khusus</h3>
      <input 
        type="text" 
        placeholder="Ketik nama member..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "200px" }}
      />
      <button type="submit" style={{ padding: "8px 16px", marginLeft: "8px", background: "#3b82f6", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
        🔍 Cari pakai useRouter
      </button>
    </form>
  );
}
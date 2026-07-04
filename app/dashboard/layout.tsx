import { ReactNode } from "react";

export default function DashboardLayout({
  children, // Slot default (app/dashboard/page.tsx)
  stats,    // Otomatis dari folder @stats
  recent,   // Otomatis dari folder @recent
}: {
  children: ReactNode;
  stats: ReactNode;
  recent: ReactNode;
}) {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Panel Admin</h1>
      <hr />
      
      {/* Konten Utama (page.tsx) */}
      {children} 

      {/* Parallel Routes Grid */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ flex: 1 }}>{stats}</div>
        <div style={{ flex: 1 }}>{recent}</div>
      </div>
    </main>
  );
}

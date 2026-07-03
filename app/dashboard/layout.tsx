import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      {/* Sidebar Khusus Dashboard */}
      <aside style={{ width: "200px", background: "#f4f4f5", padding: "1rem", borderRadius: "8px" }}>
        <h3>⚙️ Menu Admin</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <Link href="/dashboard">Overview</Link>
          </li>
          <li>
            <Link href="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </aside>

      {/* Konten Halaman Dashboard */}
      <section style={{ flex: 1 }}>
        {children}
      </section>
    </div>
  );
}
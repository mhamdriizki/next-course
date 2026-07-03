import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <h2>Welcome to Dashboard 📈</h2>
      <p>Ini adalah halaman Overview.</p>
      <Link href="/dashboard/settings">
        <button style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}>
          Pergi ke Pengaturan
        </button>
      </Link>
    </div>
  );
}
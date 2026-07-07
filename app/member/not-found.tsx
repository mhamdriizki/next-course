import Link from "next/link";

export default function NotFoundMember() {
  return (
    <div style={{ padding: "4rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", color: "#6b7280" }}>404</h1>
      <h2>Member Tidak Ditemukan</h2>
      <p>Mungkin member ini udah berhenti berlangganan.</p>
      <Link href="/member" style={{ display: "inline-block", marginTop: "1rem", color: "blue" }}>
        Kembali ke Daftar Member
      </Link>
    </div>
  );
}

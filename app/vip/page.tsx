"use client"

import { redirect } from "next/navigation";

export default function VIPPage() {
  // Cek "tiket masuk" dari cookies (Harus await di Next 16!)
  const cookieStore = localStorage.getItem('vip');
  console.log(cookieStore);

  // Kalau nggak punya tiket, TENDANG LANGSUNG ke halaman Home!
  if (cookieStore !== 'yes') {
    console.log("🚨 Ada yang nyusup! Tendang ke Home.");
    redirect("/"); // Fungsi ini menghentikan eksekusi kode di bawahnya
  }

  return (
    <div style={{ padding: "3rem", background: "gold", minHeight: "100vh" }}>
      <h1>👑 Selamat Datang di Ruang VIP Gym!</h1>
      <p>Hanya member elit yang bisa melihat halaman ini.</p>
    </div>
  );
}

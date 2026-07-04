export default async function StatsSlot() {
  // Simulasi ambil data (delay 1 detik)
  await new Promise((res) => setTimeout(res, 1000));
  
  return (
    <div style={{ padding: "1rem", borderRadius: "8px", border: "1px solid #10b981" }}>
      <h3>📊 Statistik</h3>
      <p>Pendapatan: Rp 5.000.000</p>
    </div>
  );
}

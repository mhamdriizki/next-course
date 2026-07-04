export default async function RecentSlot() {
  await new Promise((res) => setTimeout(res, 1500));
  
  return (
    <div style={{ padding: "1rem", borderRadius: "8px", border: "1px solid #3b82f6" }}>
      <h3>👥 Aktivitas Terbaru</h3>
      <p>User Budi baru saja mendaftar.</p>
    </div>
  );
}

export default function MemberLoading() {
  // Komponen ini OTOMATIS dibungkus <Suspense> sama Next.js
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Sedang Memuat Data Member...</h1>
      
      {/* Simulasi efek Skeleton UI sederhana pakai CSS */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "2rem" }}>
        <div style={{ height: "20px", background: "#e5e7eb", width: "50%", borderRadius: "4px" }}></div>
        <div style={{ height: "20px", background: "#e5e7eb", width: "40%", borderRadius: "4px" }}></div>
        <div style={{ height: "20px", background: "#e5e7eb", width: "60%", borderRadius: "4px" }}></div>
      </div>
    </div>
  );
}
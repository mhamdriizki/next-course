export default async function HalamanFotoAsli({
  params,
}: {
  params: Promise<{ id: string }>; // Wajib Promise di Next 16
}) {
  const { id } = await params;

  return (
    <div style={{ padding: "4rem", background: "#f87171", color: "white", minHeight: "100vh" }}>
      <h1>📸 HALAMAN FOTO FULL SCREEN</h1>
      <p>Menampilkan Foto ID: <strong>{id}</strong></p>
      <p>Kamu melihat halaman ini karena kamu mengakses URL secara langsung (atau menekan Refresh/F5).</p>
    </div>
  );
}
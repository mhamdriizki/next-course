export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>; // Perhatikan: Tipe datanya sekarang ARRAY of string
}) {
  const { slug } = await params;

  // Gabungkan array menjadi string path menggunakan .join()
  const fullPath = slug.join("/");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Halaman Dokumentasi 📚</h1>
      <div style={{ padding: "1rem", marginTop: "1rem" }}>
        <p><strong>Path Lengkap:</strong> /docs/{fullPath}</p>
        <p><strong>Total Segmen:</strong> {slug.length} bagian</p>
        <p><strong>Isi Array Slug:</strong> {JSON.stringify(slug)}</p>
      </div>
    </div>
  );
}
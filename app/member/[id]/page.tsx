import { notFound } from "next/navigation";

export default async function DetailMember({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Simulasi validasi database
  if (id === "999") {
    // Kalau ID-nya 999, paksa lempar ke halaman not-found.tsx!
    notFound(); 
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Detail Member #{id}</h2>
      <p>Data profil lengkap ada di sini.</p>
    </div>
  );
}

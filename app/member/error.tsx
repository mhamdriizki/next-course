"use client"; // WAJIB ADA! Error Boundary itu fitur spesifik React Client.

import { useEffect } from "react";

export default function MemberError({
  error
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Opsional: Kirim log error ini ke layanan tracking seperti Sentry
    console.error("Error tertangkap di UI:", error);
  }, [error]);

  return (
    <div style={{ padding: "3rem", background: "#fee2e2", border: "2px solid #ef4444", margin: "2rem" }}>
      <h2 style={{ color: "#b91c1c" }}>Terjadi Kesalahan!</h2>
      <p style={{ color: "#991b1b" }}>Pesan Error: {error.message}</p>
    </div>
  );
}

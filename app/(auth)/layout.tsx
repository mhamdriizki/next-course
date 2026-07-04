export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", }}>
      <div style={{padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", textAlign: "center" }}>
        <h2>🔐 Area Autentikasi</h2>
        {children}
      </div>
    </div>
  );
}
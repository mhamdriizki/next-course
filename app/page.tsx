"use client";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to NextBlog! 🚀</h1>
      <p>Ini adalah halaman utama (Homepage).</p>
      <p>Coba klik menu di navigasi atas untuk berpindah halaman.</p>
      <hr />
      <div>
        <h2>Inject localstorage VIP</h2>
        <button onClick={injectLocalStorage}>Inject</button>
      </div>
    </div>
  );
}

async function injectLocalStorage() {
  localStorage.setItem('vip', 'yes');
}

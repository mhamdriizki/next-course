export default function BlogPage() {
  // Hardcoded array seperti instruksi di Slide 7
  const posts = [
    { id: 1, title: "Belajar Next.js 16" },
    { id: 2, title: "Memahami App Router" },
    { id: 3, title: "Rahasia Server Components" },
  ];

  return (
    <div>
      <h2>Daftar Artikel Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

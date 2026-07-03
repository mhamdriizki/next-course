import { notFound } from "next/navigation";

// Hardcoded data (Langkah 02 di PPT)
const POSTS = [
  { slug: "hello-world", title: "Hello World di Next.js", content: "Ini post pertama saya." },
  { slug: "belajar-routing", title: "Belajar App Router", content: "Routing di Next.js itu gampang." },
  { slug: "rahasia-server", title: "Rahasia Server Components", content: "Server components bikin web ngebut." },
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>; // BREAKING CHANGE NEXT 16: WAJIB PROMISE
}) {
  // Langkah 01: WAJIB di-await sebelum dipakai!
  const { slug } = await params;

  // Cari data berdasarkan slug
  const post = POSTS.find((p) => p.slug === slug);

  // Jika slug tidak ada di array POSTS, lempar ke halaman 404
  if (!post) {
    notFound(); 
  }

  return (
    <article style={{ padding: "2rem" }}>
      <p style={{ color: "gray" }}>URL Slug saat ini: <strong>{slug}</strong></p>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}

export async function generateStaticParams() {
  // Return array of objects yang berisi param 'slug'
  return POSTS.map((post) => ({
    slug: post.slug,
  }));
}
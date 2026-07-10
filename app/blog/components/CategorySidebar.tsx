import { getCategories } from "@/lib/data/blog";

// SERVER COMPONENT: Boleh langsung pakai async!
export async function CategorySidebar() {
  // Fetch data miliknya sendiri
  const categories = await getCategories();

  return (
    <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
      <h3 className="text-lg font-bold mb-4">Kategori Top 📂</h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat} className="text-blue-600 hover:underline cursor-pointer">
            # {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

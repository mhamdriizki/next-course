// 1. Tipe Domain Utama (Biasanya mencerminkan tabel di Database Prisma)
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  viewCount: number;
  createdAt: Date;
}

// 2. Utility Type (Momen Aha!)
// Kita cuma butuh beberapa field untuk ditampilin di daftar (Card), 
// jadi kita 'Pick' (ambil) sebagian aja dari BlogPost.
export type PostPreview = Pick<BlogPost, "id" | "title" | "slug" | "published">;

// (Opsional) Standar Response API
export type ActionResult<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

// jangan lupa run `bunx shadcn@latest add badge input label` dulu
// 1. Tambahkan import untuk Badge, Input, dan Label
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // 👈 BARU
import { Input } from "@/components/ui/input"; // 👈 BARU
import { Label } from "@/components/ui/label"; // 👈 BARU

export default function Home() {
  return (
    <main className="min-h-screen p-8 lg:p-24 bg-gray-50">
      <h1 className="text-4xl font-extrabold tracking-tight mb-8 text-slate-900">
        Next.js Masterclass 🚀
      </h1>
      <p className="text-lg text-slate-600 mb-8 max-w-2xl">
        Pilih modul pembelajaranmu dan mulai bangun aplikasi web modern skala industri.
      </p>

      {/* --- AREA KATALOG COURSE --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-12">
        
        {/* KARTU 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 transition-transform hover:-translate-y-1 hover:shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl">
              📘
            </div>
            {/* 👈 PENGGUNAAN BADGE (Variant Secondary) */}
            <Badge variant="secondary">Dasar</Badge>
          </div>
          <h2 className="text-xl font-bold mb-2 text-slate-800">Modul 1: Fondasi App Router</h2>
          <p className="text-slate-500 mb-6 text-sm">
            Pelajari konsep Server Components, Layouting, dan Data Fetching tingkat dasar.
          </p>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-colors w-full font-medium">
            Mulai Belajar
          </button>
        </div>

        {/* KARTU 2 */}
        <Card className="transition-transform hover:-translate-y-1 hover:shadow-md border-blue-600 relative overflow-hidden">
          <CardHeader>
            <div className="flex justify-between items-start mb-4">
              <div className="h-12 w-12 bg-blue-600 text-white rounded-lg flex items-center justify-center text-2xl">
                🎨
              </div>
              {/* 👈 PENGGUNAAN BADGE (Variant Destructive untuk menarik perhatian) */}
              <Badge variant="destructive" className="animate-pulse">Populer</Badge>
            </div>
            <CardTitle className="text-slate-900">Modul 2: UI & Styling (shadcn/ui)</CardTitle>
            <CardDescription className="text-slate-500">
              Membangun antarmuka premium dengan komponen yang rapi dan dapat dikustomisasi.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-600 font-medium bg-blue-50 inline-block px-2 py-1 rounded">
              ⭐ Rilis Minggu Ini
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="default" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
              Ambil Modul
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* --- AREA BARU: FORM WAITLIST --- */}
      <div className="max-w-md">
        {/* 👈 PENGGUNAAN CARD UNTUK FORM */}
        <Card>
          <CardHeader>
            <CardTitle>Belum Siap Belajar?</CardTitle>
            <CardDescription>
              Masuk ke daftar tunggu untuk mendapatkan diskon 50% saat Modul 3 rilis.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* 👈 PENGGUNAAN LABEL DAN INPUT */}
            <div className="space-y-2">
              {/* Penting: htmlFor di Label harus sama dengan id di Input */}
              <Label htmlFor="email-waitlist">Alamat Email</Label>
              <Input 
                id="email-waitlist" 
                type="email" 
                placeholder="nama@contoh.com" 
              />
            </div>
          </CardContent>
          
          <CardFooter>
            {/* 👈 PENGGUNAAN BUTTON DENGAN VARIANT BERBEDA */}
            <Button variant="outline" className="w-full">
              Gabung Waitlist
            </Button>
          </CardFooter>
        </Card>
      </div>

    </main>
  );
}
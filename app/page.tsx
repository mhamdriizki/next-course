// jangan lupa run `bunx shadcn@latest add dialog table` dulu
// jangan lupa run `bunx shadcn@latest add badge input label` dulu
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RequestModulDialog from "./components/RequestModulDialog";

export default function Home() {
  return (
    <main className="min-h-screen p-8 lg:p-24 bg-gray-50 dark:bg-slate-950">
      <h1 className="text-4xl font-extrabold tracking-tight mb-8 text-slate-900 dark:text-white">
        Next.js Masterclass 🚀
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
        Pilih modul pembelajaranmu dan mulai bangun aplikasi web modern skala industri.
      </p>

      {/* =========================================
          AREA 1: KATALOG COURSE (MODUL 5.1 & 5.2) 
          ========================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-12">
        
        {/* KARTU 1 (Pakai HTML & Tailwind murni) */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 transition-transform hover:-translate-y-1 hover:shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl">
              📘
            </div>
            <Badge variant="secondary">Dasar</Badge>
          </div>
          <h2 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100">Modul 1: Fondasi App Router</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">
            Pelajari konsep Server Components, Layouting, dan Data Fetching tingkat dasar menggunakan Tailwind CSS murni.
          </p>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-colors w-full font-medium">
            Mulai Belajar
          </button>
        </div>

        {/* KARTU 2 (Telah di-refactor pakai shadcn/ui) */}
        <Card className="transition-transform hover:-translate-y-1 hover:shadow-md border-blue-600 relative overflow-hidden">
          <CardHeader>
            <div className="flex justify-between items-start mb-4">
              <div className="h-12 w-12 bg-blue-600 text-white rounded-lg flex items-center justify-center text-2xl">
                🎨
              </div>
              <Badge variant="destructive" className="animate-pulse">Populer</Badge>
            </div>
            <CardTitle className="text-slate-900">Modul 2: UI & Styling</CardTitle>
            <CardDescription className="text-slate-500">
              Membangun antarmuka premium dengan komponen yang rapi, *accessible*, dan dapat dikustomisasi.
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

      {/* =========================================
          AREA 2: FORM WAITLIST (MODUL 5.3) 
          ========================================= */}
      <div className="max-w-md mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Belum Siap Belajar?</CardTitle>
            <CardDescription>
              Masuk ke daftar tunggu untuk mendapatkan diskon 50% saat Modul 3 rilis.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email-waitlist">Alamat Email</Label>
              <Input 
                id="email-waitlist" 
                type="email" 
                placeholder="nama@contoh.com" 
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Gabung Waitlist
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* =========================================
          AREA 3: TABLE & DIALOG (MODUL 5.4) 
          ========================================= */}
      <div className="max-w-4xl border-t pt-12">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Jadwal Rilis Modul</h2>
            <p className="text-slate-500">Pantau terus update materi terbaru dari kami.</p>
          </div>
          
          {/* MANGGIL KOMPONEN DIALOG KITA DI SINI */}
          <RequestModulDialog />
        </div>

        {/* PENGGUNAAN TABLE SHADCN */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <Table>
            <TableCaption className="pb-4">Daftar silabus materi Next.js Masterclass.</TableCaption>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Topik Pembahasan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Estimasi Rilis</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">MOD-01</TableCell>
                <TableCell>Fondasi App Router</TableCell>
                <TableCell><Badge variant="default" className="bg-green-600">Tersedia</Badge></TableCell>
                <TableCell className="text-right">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">MOD-02</TableCell>
                <TableCell>UI & Styling (shadcn)</TableCell>
                <TableCell><Badge variant="default" className="bg-green-600">Tersedia</Badge></TableCell>
                <TableCell className="text-right">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">MOD-03</TableCell>
                <TableCell>Database Prisma & PostgreSQL</TableCell>
                <TableCell><Badge variant="outline">On Progress</Badge></TableCell>
                <TableCell className="text-right">Minggu Depan</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      
    </main>
  );
}

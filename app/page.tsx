import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomeTailwindV4() {
  return (
    <main className="min-h-screen p-8 lg:p-24">
      <h1 className="text-4xl font-extrabold tracking-tight mb-8">
        Next JS Course
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <Card className="transition-transform hover:-translate-y-1 hover:shadow-lg border-brand-utama">
          <CardHeader>
            {/* Class warna brand kita dari globals.css tetep bisa dipakai! */}
            <CardTitle className="text-brand-gelap">Shadcn/ui</CardTitle>
            <CardDescription>
              Mengaplikasikan Card dan Button
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">Ini adalah contoh nya</p>
          </CardContent>
          <CardFooter>
            {/* Pakai komponen Button bawaan shadcn */}
            <Button variant="default" className="w-full">
              Ambil Kelas Ini
            </Button>
          </CardFooter>
        </Card>

      </div>
    </main>
  );
}

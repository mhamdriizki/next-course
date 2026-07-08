"use client";

import { useState } from "react";
// 1. IMPORT buttonVariants di sini
import { Button, buttonVariants } from "@/components/ui/button"; 
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RequestModulDialog() {
  const [open, setOpen] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); 
    const formData = new FormData(e.currentTarget);
    const judul = formData.get("judul");
    
    alert(`Request modul "${judul}" berhasil dikirim!`);
    setOpen(false); 
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      
      {/* 2. SOLUSI ERROR: Buang asChild, langsung tembak className pakai buttonVariants! */}
      <DialogTrigger className={buttonVariants({ variant: "outline" })}>
        💡 Request Modul Baru
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px]">
        {/* ... (kode header dan form di bawahnya biarkan sama seperti sebelumnya) ... */}
        <DialogHeader>
          <DialogTitle>Request Modul Impianmu</DialogTitle>
          <DialogDescription>
            Kasih tau kita materi Next.js apa yang pengen banget kamu pelajarin selanjutnya.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="judul">Topik Modul</Label>
            <Input id="judul" name="judul" placeholder="Contoh: Belajar Middleware..." required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Kamu</Label>
            <Input id="email" name="email" type="email" placeholder="nama@email.com" required />
          </div>
          <Button type="submit" className="w-full">Kirim Request</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

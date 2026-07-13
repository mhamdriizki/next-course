import { NextResponse } from "next/server";

export async function GET() {
  // Simulasi angka pembaca acak antara 100 sampai 500
  const randomViews = Math.floor(Math.random() * 400) + 100;
  
  return NextResponse.json({ 
    activeViewers: randomViews,
    timestamp: new Date().toLocaleTimeString() 
  });
}

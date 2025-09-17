import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  
  const imagesDir = path.join(process.cwd(), "public/images");
  const files = fs.readdirSync(imagesDir)
  return NextResponse.json(files);
}
export async function POST(request: Request) {
  try {
    const body = await request.json(); 
    const { selectedImages } = body; // expecting { selectedImages: [...] }

    const isValid = selectedImages.every((img: string) => img.includes("dog"));

    return NextResponse.json({
      success: isValid,
      message: isValid ? "Captcha passed " : "Captcha failed ",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
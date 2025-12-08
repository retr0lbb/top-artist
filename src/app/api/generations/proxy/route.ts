import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const src = searchParams.get("src");

  if (!src) {
    return new Response("Missing src", { status: 400 });
  }

  try {
    const audio = await fetch(src);
    const buffer = await audio.arrayBuffer();

    return new Response(buffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    return new Response("Proxy error", { status: 500 });
  }
}
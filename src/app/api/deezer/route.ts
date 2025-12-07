// app/api/deezer/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const artist = searchParams.get("artist");

  if (!artist) {
    return NextResponse.json({ error: "Missing artist" }, { status: 400 });
  }

  try {
    // 1. Buscar artista
    const artistRes = await fetch(
      `https://api.deezer.com/search/artist?q=${encodeURIComponent(artist)}`
    );

    const artistData = await artistRes.json();
    const firstArtist = artistData.data?.[0];

    if (!firstArtist) {
      return NextResponse.json({ error: "Artist not found" }, { status: 404 });
    }

    // 2. Buscar músicas do artista
    const tracksRes = await fetch(
      `https://api.deezer.com/artist/${firstArtist.id}/top?limit=50`
    );

    const tracksData = await tracksRes.json();

    // 3. Filtrar apenas músicas com preview
    const tracksWithPreview = tracksData.data?.filter(
      (t: any) => t.preview
    );

    if (!tracksWithPreview?.length) {
      return NextResponse.json(
        { error: "No tracks with preview" },
        { status: 404 }
      );
    }

    // 4. Escolher música aleatória
    const randomTrack =
      tracksWithPreview[Math.floor(Math.random() * tracksWithPreview.length)];

    return NextResponse.json({
      artist: firstArtist.name,
      track: randomTrack.title,
      preview: randomTrack.preview,
      cover: randomTrack.album.cover_medium,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", details: error },
      { status: 500 }
    );
  }
}

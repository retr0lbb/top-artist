// app/api/generations/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const gen = searchParams.get("gen");

  if (!gen) {
    return NextResponse.json({ error: "Missing generation" }, { status: 400 });
  }

  // IDs das playlists do usuário
  const PLAYLISTS: Record<string, string> = {
    genz: "14673970721",
    genalpha: "14673988941",
    genx: "14673978381",
  };

  const playlistId = PLAYLISTS[gen.toLowerCase()];

  if (!playlistId) {
    return NextResponse.json(
      { error: "Invalid generation value" },
      { status: 400 }
    );
  }

  try {
    // Buscar playlist no Deezer
    const playlistRes = await fetch(
      `https://api.deezer.com/playlist/${playlistId}`
    );

    const playlistData = await playlistRes.json();

    if (!playlistData.tracks?.data) {
      return NextResponse.json(
        { error: "Could not load playlist tracks" },
        { status: 500 }
      );
    }

    // Filtrar faixas com preview
    const tracksWithPreview = playlistData.tracks.data.filter(
      (t: any) => t.preview
    );

    if (!tracksWithPreview.length) {
      return NextResponse.json(
        { error: "No tracks with preview available" },
        { status: 404 }
      );
    }

    // Música aleatória
    const random =
      tracksWithPreview[Math.floor(Math.random() * tracksWithPreview.length)];

    const response = {
      artist: random.artist.name,
      track: random.title,
      preview: random.preview,
      cover: random.album.cover_medium,
    };

    return NextResponse.json(response);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal error", details: err },
      { status: 500 }
    );
  }
}

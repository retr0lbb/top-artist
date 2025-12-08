// app/api/generations/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const gen = searchParams.get("gen");

  if (!gen) {
    return NextResponse.json({ error: "Missing generation" }, { status: 400 });
  }

  // 🔥 LISTAS DE MÚSICAS FIXAS (com title → será convertido para track)
  const GEN_Z = [
    {
      title: "FE!N",
      artist: "Travis Scott",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/0/2/7/0/02700631951a33db90a0024531e2378d.mp3?hdnea=exp=1765157988~acl=/api/1/1/0/2/7/0/02700631951a33db90a0024531e2378d.mp3*~data=user_id=0,application_id=42~hmac=b0b9d892835e6addf3cbb6cb244fe931dab26a6f68c1eb13b79d4205f2f3c6ea",
      cover: "https://e-cdns-images.dzcdn.net/images/cover/xxxx/250x250.jpg",
    },
    {
      title: "Rich Baby Daddy",
      artist: "Drake",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/c/7/f/0/c7f452be42181a050a57540cfd317f5e.mp3?hdnea=exp=1765158054~acl=/api/1/1/c/7/f/0/c7f452be42181a050a57540cfd317f5e.mp3*~data=user_id=0,application_id=42~hmac=c05c684c07f78574731fea86f897744ac43c7cd93e70274df01c03cb11a03c2d",
      cover: "https://e-cdns-images.dzcdn.net/images/cover/xxxx/250x250.jpg",
    },
  ];

  const GEN_ALPHA = [
    {
      title: "Let’s Go 4",
      artist: "Oruam",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/c/5/6/0/c56c19c8c5692e670eece0d2b9def697.mp3?hdnea=exp=1765158106~acl=/api/1/1/c/5/6/0/c56c19c8c5692e670eece0d2b9def697.mp3*~data=user_id=0,application_id=42~hmac=4c3908e06e6d718e2e80631d355a6f89e217bbf5b73c8f10d3d9d09956331cab",
      cover: "https://e-cdns-images.dzcdn.net/images/cover/xxxx/250x250.jpg",
    },
    {
      title: "Coração Gelado 2",
      artist: "DJ Boy",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/1/0/5/0/1053c50041fe543ef8512c7a75ee8a75.mp3?hdnea=exp=1765158143~acl=/api/1/1/1/0/5/0/1053c50041fe543ef8512c7a75ee8a75.mp3*~data=user_id=0,application_id=42~hmac=170b6331ee10021e474110e27b80ba7b7953e07aa823664874b39e470decc980",
      cover: "https://e-cdns-images.dzcdn.net/images/cover/xxxx/250x250.jpg",
    },
  ];

  const GEN_X = [
    {
      title: "Caneta Azul VII",
      artist: "Manoel Gomes",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/0/c/f/0/0cf6f8c11a69c0e30e8bcf9655b3d621.mp3?hdnea=exp=1765158287~acl=/api/1/1/0/c/f/0/0cf6f8c11a69c0e30e8bcf9655b3d621.mp3*~data=user_id=0,application_id=42~hmac=29383585e6b8c4759d15c5cac9b73788300ef4d46fe6a580ebc1f9a65625a809",
      cover: "https://e-cdns-images.dzcdn.net/images/cover/xxxx/250x250.jpg",
    },
  ];

  const GEN_MAP: Record<string, any[]> = {
    genz: GEN_Z,
    genalpha: GEN_ALPHA,
    genx: GEN_X,
  };

  const list = GEN_MAP[gen.toLowerCase()];

  if (!list) {
    return NextResponse.json(
      { error: "Invalid generation value" },
      { status: 400 }
    );
  }

  // 🎲 Música aleatória
  const random = list[Math.floor(Math.random() * list.length)];

  // 🔄 Converter para ResponseMusic
  const response = {
    artist: random.artist,
    track: random.title,
    preview: random.preview,
    cover: random.cover,
  };

  return NextResponse.json(response);
}

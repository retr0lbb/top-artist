// app/api/generations/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const gen = searchParams.get("gen");

  if (!gen) {
    return NextResponse.json({ error: "Missing generation" }, { status: 400 });
  }

  const GEN_Z = [
    {
      title: "FE!N",
      artist: "Travis Scott",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/0/2/7/0/02700631951a33db90a0024531e2378d.mp3?hdnea=exp=1765157988~acl=/api/1/1/0/2/7/0/02700631951a33db90a0024531e2378d.mp3*~data=user_id=0,application_id=42~hmac=b0b9d892835e6addf3cbb6cb244fe931dab26a6f68c1eb13b79d4205f2f3c6ea",
      cover: "https://e-cdns-images.dzcdn.net/images/cover/xxxx/250x250.jpg",
    },
    {
      title: "BIRDS OF A FEATHER",
      artist: "Billie Eilish",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/5/e/0/0/5e0fb99f6f1e0f18ab70a4c0d18efa5c.mp3?hdnea=exp=1765168124~acl=/api/1/1/5/e/0/0/5e0fb99f6f1e0f18ab70a4c0d18efa5c.mp3*~data=user_id=0,application_id=42~hmac=47db53e70e5692f456a8c1ffd6bd78424f9fb06d2e22ea7cfffa174a93c527a8",
      cover: "https://e-cdns-images.dzcdn.net/images/cover/xxxx/250x250.jpg",
    },
    {
      title: "How Sweet",
      artist: "NewJeans",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/8/d/9/0/8d91a96b1acc6781fc44726301ea7ed2.mp3?hdnea=exp=1765168061~acl=/api/1/1/8/d/9/0/8d91a96b1acc6781fc44726301ea7ed2.mp3*~data=user_id=0,application_id=42~hmac=c2d4d38651478bf2abe7b467be23b012916b6c916bfb1c8b055f32aaad1ca202",
      cover: "https://e-cdns-images.dzcdn.net/images/cover/xxxx/250x250.jpg",
    },
  ];

  const GEN_ALPHA = [
    {
      title: "Oh Garota Eu Quero Você Só Pra Mim.",
      artist: "Oruam",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/1/e/f/0/1ef1c8ec65110ce515c559fcc7bafe15.mp3?hdnea=exp=1765168421~acl=/api/1/1/1/e/f/0/1ef1c8ec65110ce515c559fcc7bafe15.mp3*~data=user_id=0,application_id=42~hmac=1f11610d7ffd5afbf4480c9965578c123ce0b9581bf3fdc1ccc519ca0f0b72ac",
      cover: "https://e-cdns-images.dzcdn.net/images/cover/xxxx/250x250.jpg",
    },
    {
      title: "PASSO BEM SOLTO",
      artist: "ATLXS",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/5/5/9/0/55900afd59d5c610926837fd8b031040.mp3?hdnea=exp=1765168339~acl=/api/1/1/5/5/9/0/55900afd59d5c610926837fd8b031040.mp3*~data=user_id=0,application_id=42~hmac=6d4a7f23a6bbbee039d236c20aa68e5a01af7f3a36c4f94d7efd5bd34c44fda0",
      cover: "https://e-cdns-images.dzcdn.net/images/cover/xxxx/250x250.jpg",
    },
    {
      title: "Young Black & Rich",
      artist: "Melly Mike",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/6/8/2/0/6822b9c2a39b1a1a19e683f4e6238469.mp3?hdnea=exp=1765167548~acl=/api/1/1/6/8/2/0/6822b9c2a39b1a1a19e683f4e6238469.mp3*~data=user_id=0,application_id=42~hmac=5de40b782b9a528aa35a67d1be4b3016a3ca2d91d9c46179f520e5f6c306bc42",
      cover: "https://e-cdns-images.dzcdn.net/images/cover/xxxx/250x250.jpg",
    },
  ];

  const GEN_X = [
    {
      title: "Smells Like Teen Spirit",
      artist: "Nirvana",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/3/4/b/0/34bad352aa1aa0f8eecbbc9c27a40eaf.mp3?hdnea=exp=1765167699~acl=/api/1/1/3/4/b/0/34bad352aa1aa0f8eecbbc9c27a40eaf.mp3*~data=user_id=0,application_id=42~hmac=97c9d9658aa8472a7d48a71ad56a846479ea546e2690dab5554dbfaa08054c4d",
      cover: "https://e-cdns-images.dzcdn.net/images/cover/xxxx/250x250.jpg",
    },
    {
      title: "Song 2",
      artist: "Blur",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/b/5/2/0/b52000f4b656776924aeecb6b45eef79.mp3?hdnea=exp=1765167788~acl=/api/1/1/b/5/2/0/b52000f4b656776924aeecb6b45eef79.mp3*~data=user_id=0,application_id=42~hmac=04adc363a9e1f6577dc68ce1a70cd7cb2d4eee7341988735731ae3cfbc1b1fa6",
      cover: "https://e-cdns-images.dzcdn.net/images/cover/xxxx/250x250.jpg",
    },
    {
      title: "Proibida Pra Mim",
      artist: "Charlie Brown Jr.",
      preview:
        "https://cdnt-preview.dzcdn.net/api/1/1/7/5/1/0/751a5c5cb9661aed45c5490c8f10a051.mp3?hdnea=exp=1765167846~acl=/api/1/1/7/5/1/0/751a5c5cb9661aed45c5490c8f10a051.mp3*~data=user_id=0,application_id=42~hmac=7272bdc759aff07db480f1c5b95806f2f7a17b15bd9ee095a7611afa4d2ed7bc",
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

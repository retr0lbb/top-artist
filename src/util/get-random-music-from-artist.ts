

async function getSpotifyToken(){
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID!;
    const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRETE!;

    console.log("Client id: " + clientId);
    console.log("Client Secrete: " + clientSecret);


    const token = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
    
    const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${token}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "grant_type=client_credentials"
    });

    const data = await res.json();
    return data.access_token;
}

const MARKETS = ["US", "ES", "GB", "DE", "SE", "FR"];

export async function getRandomMusic(artist: string): Promise<ResponseMusic> {
  const res = await fetch(`/api/deezer?artist=${artist}`);
  const data = await res.json();

  if (!res.ok) throw new Error(data.error);
  return data;
}


export interface ResponseMusic {
    artist: string
    track: string,
    preview: string,
    cover: string
}
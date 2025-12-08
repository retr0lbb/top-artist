export async function getGeracionalMusic(gen: string): Promise<ResponseMusic> {
  const res = await fetch(`/api/genzxalpha?gen=${gen}`);
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
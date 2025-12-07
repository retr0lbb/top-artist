import { GridController } from "@/components/grid-controller";
import { ArtistCard, LaGrid } from "@/components/la-grid";



export default function Home() {
  return (
    <div className="w-full min-h-dvh bg-zinc-950 flex">
      <GridController />
    </div>
  );
}

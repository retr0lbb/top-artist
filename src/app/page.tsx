import { GridController } from "@/components/grid-controller";

export default function Home() {
  return (
    <div className="w-full min-h-dvh bg-zinc-950 flex">
      <GridController mode="artist"/>
    </div>
  );
}

import { GridController } from "@/components/grid-controller";
import { ModalWithTemplate } from "@/components/modal";

export default function Home() {
  return (
    <div className="w-full min-h-dvh bg-zinc-950 flex relative">
      <GridController mode="generations"/>

    </div>
  );
}

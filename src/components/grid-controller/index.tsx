"use client"
import { ArtistCard, LaGrid } from "../la-grid";
import Travis from "@/assets/travis.jpg"
import Tailor from "@/assets/tailor.webp"
import Kanye from "@/assets/kanye2.jpg"
import { useState } from "react";

export function GridController(){
    const [selectedArtist, setSelectedArtist] = useState<null | string>(null)
    return(
        <LaGrid>
            <ArtistCard onCardClick={() => setSelectedArtist("Travis")} noneSelected={selectedArtist === null} isSelected={selectedArtist === "Travis"} artistColor="red" artistName="Travis Scott" image={Travis} />
            <ArtistCard onCardClick={() => setSelectedArtist("Taylor")} noneSelected={selectedArtist === null} isSelected={selectedArtist === "Taylor"} artistColor="red" artistName="Taylor Swift" image={Tailor} />
            <ArtistCard onCardClick={() => setSelectedArtist("Kanye")} noneSelected={selectedArtist === null} isSelected={selectedArtist === "Kanye"} artistColor="red" artistName="Kanye West" image={Kanye} />
        </LaGrid>
    )
}
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
            <ArtistCard 
                onCardClick={() => {
                    if(selectedArtist === "Travis"){
                        setSelectedArtist(null)
                    }else{
                        setSelectedArtist("Travis")
                    }
                }} 
                noneSelected={selectedArtist === null} 
                isSelected={selectedArtist === "Travis"} 
                artistColor="red" 
                artistName="Yung Lixo" 
                imageSrc={Travis.src} 
                />
            <ArtistCard 
                onCardClick={() => {
                    if(selectedArtist === "Taylor"){
                        setSelectedArtist(null)
                    }else{
                        setSelectedArtist("Taylor")
                    }
                }}  
                noneSelected={selectedArtist === null} isSelected={selectedArtist === "Taylor"} artistColor="red" artistName="Taylor Swift" imageSrc={Tailor.src} />
            <ArtistCard
                onCardClick={() => {
                    if(selectedArtist === "Kanye"){
                        setSelectedArtist(null)
                    }else{
                        setSelectedArtist("Kanye")
                    }
                }}
                noneSelected={selectedArtist === null} isSelected={selectedArtist === "Kanye"} artistColor="red" artistName="Kanye West" imageSrc={Kanye.src} />
        </LaGrid>
    )
}
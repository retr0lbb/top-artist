"use client"
import { ArtistCard, LaGrid } from "../la-grid";
import Travis from "@/assets/travis.jpg"
import Tailor from "@/assets/tailor.webp"
import Kanye from "@/assets/kanye2.jpg"

import Labubu from "@/assets/labubu.webp"
import Restart from "@/assets/restart.jpg"
import LilX from "@/assets/lilx.jpg"

import { useState } from "react";

interface GridControllerProps{
    mode: "artist" | "generations"
}

export function GridController(props: GridControllerProps){
    const [selectedArtist, setSelectedArtist] = useState<null | string>(null)

    const Artist = <>
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
                cardTitle="Yung Lixo"
                imageSrc={Travis.src}
                mode="artist"
                />
            <ArtistCard 
                onCardClick={() => {
                    if(selectedArtist === "Taylor"){
                        setSelectedArtist(null)
                    }else{
                        setSelectedArtist("Taylor")
                    }
                }}  
                noneSelected={selectedArtist === null} 
                isSelected={selectedArtist === "Taylor"} 
                artistColor="red" 
                artistName="Taylor Swift"
                cardTitle="Taylor Swift"
                mode="artist"
                imageSrc={Tailor.src} />
            <ArtistCard
                onCardClick={() => {
                    if(selectedArtist === "Kanye"){
                        setSelectedArtist(null)
                    }else{
                        setSelectedArtist("Kanye")
                    }
                }}
                noneSelected={selectedArtist === null} 
                isSelected={selectedArtist === "Kanye"} 
                artistColor="red" 
                artistName="Kanye West"
                cardTitle="Kanye West"
                mode="artist"
                imageSrc={Kanye.src} />
            </>

    const Generations = <>
            <ArtistCard 
                onCardClick={() => {
                    if(selectedArtist === "genx"){
                        setSelectedArtist(null)
                    }else{
                        setSelectedArtist("genx")
                    }
                }} 
                noneSelected={selectedArtist === null} 
                isSelected={selectedArtist === "genx"} 
                artistColor="red" 
                artistName="genx" 
                cardTitle="Geração X"
                imageSrc={Restart.src} 
                mode="gen"
            />
            <ArtistCard 
                onCardClick={() => {
                    if(selectedArtist === "genz"){
                        setSelectedArtist(null)
                    }else{
                        setSelectedArtist("genz")
                    }
                }} 
                noneSelected={selectedArtist === null} 
                isSelected={selectedArtist === "genz"} 
                artistColor="red" 
                artistName="genz"
                cardTitle="Geração Z"
                imageSrc={LilX.src}
                mode="gen"
            />
            <ArtistCard 
                onCardClick={() => {
                    if(selectedArtist === "genalpha"){
                        setSelectedArtist(null)
                    }else{
                        setSelectedArtist("genalpha")
                    }
                }} 
                noneSelected={selectedArtist === null} 
                isSelected={selectedArtist === "genalpha"} 
                artistColor="red" 
                artistName="genalpha"
                cardTitle="Geração Alpha"
                imageSrc={Labubu.src} 
                mode="gen"
            />
    </>
    
    return(
        <LaGrid>
            {props.mode === "artist" && Artist}
            {props.mode === "generations" && Generations}
        </LaGrid>
    )
}
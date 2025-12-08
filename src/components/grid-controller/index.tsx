"use client"
import { ArtistCard, LaGrid } from "../la-grid";
import Travis from "@/assets/travis.jpg"
import Tailor from "@/assets/tailor.webp"
import Kanye from "@/assets/kanye2.jpg"

import Labubu from "@/assets/labubu.webp"
import Restart from "@/assets/restart.jpg"
import LilX from "@/assets/lilx.jpg"

import { useState } from "react";
import Image from "next/image";
import { div } from "framer-motion/client";
import { ModalWithTemplate } from "../modal";
import { Button } from "../button";

interface GridControllerProps{
    mode: "artist" | "generations"
}

export function GridController(props: GridControllerProps){
    const [selectedArtist, setSelectedArtist] = useState<null | string>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

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
                artistName="Travis Scott" 
                cardTitle="Travis Scott"
                imageSrc={Travis.src}
                mode="artist"
                >
                    <div className="flex items-center justify-center gap-10">
                        <Image src={Travis} className="max-w-64 aspect-square object-cover" alt="greatest singer of 2020 travis scott"/>
                        <p className="w-[400px] text-zinc-300 text-center">
                            Travis Scott é um dos maiores cantores Trap de todos os tempos, ao lado de ídolos como Astro word, XXX tentation, ele desenvolveu musicas que inspiram as revolta nos adolecentes
                        </p>
                    </div>
                </ArtistCard>
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
            >
                <div className="flex items-center justify-center flex-col gap-6">
                    <p className="text-xl text-zinc-300 max-w-[520px] text-center">Você parece conhecer muito bem as musicas da sua geração. mas você sabe qual é o impacto delas e cada geração</p>
                    <Button onClick={()=> setIsModalOpen(true)}>Ver Impacto</Button>
                </div>
            </ArtistCard>
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
            >
                <div className="flex items-center justify-center flex-col gap-6">
                    <p className="text-xl text-zinc-300 max-w-[520px] text-center">Você parece conhecer muito bem as musicas da sua geração. mas você sabe qual é o impacto delas e cada geração</p>
                    <Button onClick={()=> setIsModalOpen(true)}>Ver Impacto</Button>
                </div>
            </ArtistCard>
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
            >
                <div className="flex items-center justify-center flex-col gap-6">
                    <p className="text-xl text-zinc-300 max-w-[520px] text-center">Você parece conhecer muito bem as musicas da sua geração. mas você sabe qual é o impacto delas e cada geração</p>
                    <Button onClick={()=> setIsModalOpen(true)}>Ver Impacto</Button>
                </div>
            </ArtistCard>
        </>
    
    return(
        <LaGrid>
            {props.mode === "artist" && Artist}
            {props.mode === "generations" && Generations}
            <ModalWithTemplate isOpen={isModalOpen} onCloseModal={() => setIsModalOpen(false)} />
        </LaGrid>
    )
}
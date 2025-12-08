"use client"
import {  motion } from "framer-motion"
import { MusicPuzzle } from "./grid-controller/music-puzzle"

export function LaGrid(props: { children: React.ReactNode }) {
    return (
        <div className="flex flex-1 items-center justify-center flex-col md:flex-row overflow-hidden">
            {props.children}
        </div>
    )
}

export function ArtistCard(
    props: {
        artistColor: string,
        imageSrc: string,
        alt?: string,
        artistName: string,
        cardTitle: string
        isSelected: boolean,
        noneSelected: boolean,
        children?: React.ReactNode
        mode: "artist" | "gen"
        onCardClick: () => void
    }
) {

    return (
        <motion.div
            animate={{
                width: props.noneSelected
                    ? "33.33333%"
                    : props.isSelected
                        ? "100%"
                        : "15rem",
                                    
            }}
            transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
            }}
            className="
                min-h-full  
                p-2
                relative
                flex
                items-center
                overflow-hidden
                justify-center
                z-0
                pointer-events-auto
            "
            style={{
              backgroundImage: `url(${props.imageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
        >
            <div onClick={props.onCardClick} className="absolute inset-0 w-auto grow h-full cursor-pointer"></div>
            
            <div
                className={`flex flex-col items-center justify-center gap-4 z-20
                    ${!props.isSelected && "hidden"}
                `}
                style={{ width: "auto", minWidth: "fit-content" }}
            >
                <MusicPuzzle artistName={props.artistName} mode={props.mode}>
                    {props.children}
                </MusicPuzzle>
            </div>

            <motion.div 
                className="px-4 py-8 z-10 absolute top-4 left-4 bg-zinc-950"
                animate={{
                    opacity: props.isSelected ? 1 : 0.95,
                }}
                transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                }}
            >
                <motion.p
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                    className="text-7xl font-bold text-zinc-300 whitespace-nowrap"
                    style={{
                        transformOrigin: "top left"
                    }}
                >
                    {props.cardTitle}
                </motion.p>
            </motion.div>
        </motion.div>
    )
}



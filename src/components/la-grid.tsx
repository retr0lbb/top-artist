"use client"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { convertOffsetToTimes, motion } from "framer-motion"
import Image from "next/image"
import { div } from "framer-motion/client"
import { MusicPuzzle } from "./grid-controller/music-puzzle"
import { useEffect } from "react"

export function LaGrid(props: { children: React.ReactNode }) {
    return (
        <div className="flex flex-1 items-center justify-center overflow-hidden">
            {props.children}
        </div>
    )
}

export function ArtistCard(
    props: {
        artistColor: string,
        image: StaticImport,
        alt?: string,
        artistName: string,
        isSelected: boolean,
        noneSelected: boolean,
        onCardClick: () => void
    }
) {

    const handleClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (
            target.tagName === 'INPUT' || 
            target.tagName === 'BUTTON' ||
            target.tagName === 'TEXTAREA' ||
            target.closest('input, button, textarea, select')
        ) {
            return;
        }
        props.onCardClick();
    };

    return (
        <motion.div
            onClick={handleClick}
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
                cursor-pointer
            "
        >
            <motion.div
                animate={{
                    scale: props.isSelected ? 1.03 : 1,
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1]
                }}
                className="absolute inset-0 w-full h-full"
            >
                <Image
                    className="object-cover w-full h-full"
                    src={props.image}
                    alt={props.alt ?? ""}
                />
            </motion.div>
            
            <ArtistInfo isSelected={props.isSelected} />

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
                    className="text-8xl font-bold text-zinc-300 whitespace-nowrap"
                    style={{
                        transformOrigin: "top left"
                    }}
                >
                    {props.artistName}
                </motion.p>
            </motion.div>
        </motion.div>
    )
}

export function BlockInfoResolvePuzzle(){
    return(
        <div className="p-5 bg-zinc-950 text-zinc-200 max-w-[500px]">
            <MusicPuzzle />
            Travis Scott (Jacques Berman Webster II, nascido em Houston, 1991) é um rapper, cantor, compositor e produtor musical que se tornou um ícone do hip-hop moderno, famoso por suas performances enérgicas, shows imersivos, e uma fusão de trap, hip-hop e R&B, com álbuns aclamados como Astroworld e singles de sucesso como "Sicko Mode", além de colaborações notáveis e um relacionamento com Kylie Jenner, com quem tem filhos, e uma marca pessoal forte na cultura pop. 
        </div>
    )
}

export function ArtistInfo(props: {isSelected: boolean}){
    return(
        <div className={`w-full h-full flex flex-col gap-4 z-20 ${!props.isSelected && "hidden"}`}>
            <BlockInfoResolvePuzzle/>
        </div>
    )
}



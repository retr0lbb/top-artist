"use client"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { motion } from "framer-motion"
import Image from "next/image"

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
    return (
        <motion.div
            onClick={props.onCardClick}
            animate={{
                width: props.noneSelected
                    ? "33.33333%"
                    : props.isSelected
                        ? "100%"
                        : "15rem",
            }}
            transition={{
                duration: 0.4,
                ease: "easeInOut"
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
            <Image
                className="object-cover absolute inset-0 w-full h-full"
                src={props.image}
                alt={props.alt ?? ""}
            />

            <div className="px-4 py-8 z-10 absolute top-4 left-4 bg-zinc-950">
                <motion.p
                    transition={{
                        duration: 0.6,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                    className="text-8xl font-bold text-zinc-300 whitespace-nowrap"
                    style={{
                        transformOrigin: "top left"
                    }}
                >
                    {props.artistName}
                </motion.p>
            </div>
        </motion.div>
    )
}
"use client"
import { X } from "lucide-react";
import {motion} from "framer-motion"
import Image from "next/image";
import Template from "@/assets/template.jpg"

interface ModalWithTemplateProps{
    isOpen?: boolean
    onCloseModal: () => void
    children: React.ReactNode
}

export function ModalWithTemplate(props: ModalWithTemplateProps){
    return(
        <motion.div 
            className={`absolute inset-0 w-full h-full bg-zinc-950/10 backdrop-blur-2xl flex items-center justify-center ${!props.isOpen && "hidden"}`}
            initial={{
                scale: 0
            }}

            animate={{
                scale: 1
            }}
        >
            <div className="bg-zinc-900 border border-zinc-200/10 px-6 py-4 flex flex-col min-w-[500px] relative max-w-[1500px]">
                <div className="flex w-full items-center justify-between px-6 z-50">
                    <div /> 
                    <button onClick={() => props.onCloseModal()}>
                        <X className="text-zinc-500 hover:text-zinc-300 transition-all size-8 cursor-pointer" />
                    </button>
                </div>
                {props.children}
            </div>
        </motion.div>
    )
}
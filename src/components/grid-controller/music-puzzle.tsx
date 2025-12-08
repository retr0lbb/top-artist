"use client";

import { useState, useRef, useEffect } from "react";
import { Lightbulb, Lock, Pause, Play, RefreshCw } from "lucide-react";
import { getRandomMusic, ResponseMusic } from "@/util/get-random-music-from-artist";
import { Button } from "../button";
import { similarity } from "@/util/sim";
import { getGeracionalMusic } from "@/util/get-gerecional-music";

interface MusicPuzzleProps{
    artistName: string,
    mode: "artist" | "gen"
}

export function MusicPuzzle(props: MusicPuzzleProps) {
    const [track, setTrack] = useState<ResponseMusic | null>(null);
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState<"correct" | "wrong" | null>(null);
    const [isPlaying, setIsPlaying] = useState(false)
    const [isPending, setIsPending] = useState(false)

    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleEnded = () => {
            setIsPlaying(false);
        };

        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("ended", handleEnded);
        };
    }, [track]);

    const loadTrack = async () => {
    try {
        setGuess("")
        setResult(null)
        setTrack(null)
        setIsPlaying(false)
        setIsPending(true)

        let data: ResponseMusic | null = null;

        switch (props.mode) {
        case "artist":
            data = await getRandomMusic(props.artistName);
            break;

        case "gen":
            data = await getGeracionalMusic(props.artistName);
            break;
        }

        if (!data || !data.preview) {
            console.error("Música inválida ou sem preview:", data);
            alert("Nenhuma música válida encontrada.");
            return;
        }

        setTrack(data);

        } catch (err) {
            console.error(err);
        } finally {
            setIsPending(false);
        }
    };


    function playPreview() {
        if(isPlaying === true){
            audioRef.current?.pause()
            setIsPlaying(false)
            return;
        }
        audioRef.current?.play()
        setIsPlaying(true)
    }

    function checkAnswer() {
        if (!track) return;

        const unfilterTrackName = track.track.toLowerCase();
        const cleaned = unfilterTrackName
            .replace(/\s*\((feat|ft|with|prod)[^)]*\)/gi, "")
            .trim();

        const g = guess.toLowerCase().trim();

        // Calcula similaridade
        const score = similarity(cleaned, g);

        console.log("similaridade:", score);

        if (score >= 0.7) {
            setResult("correct");
        } else {
            setResult("wrong");
        }
    }

    return (
        <div className="flex items-center flex-col bg-zinc-900 p-6 gap-4 rounded-xl w-full max-w-lg">

            <div className="space-y-2 text-center">
                <h1 className="text-zinc-200 text-2xl">Qual é a música?</h1>
                <p className="text-zinc-400 text-sm">
                    O quão voce conhece das musicas das gerações
                </p>
            </div>

            {!track && (
                <Button
                    onClick={loadTrack}
                    loading={isPending}
                >
                    Buscar música
                </Button>
            )}

            {track && (
                <>
                    {/* Player */}
                    <audio ref={audioRef} src={track.preview} />

                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={playPreview}
                            className="size-8 p-1.5 flex items-center justify-center bg-zinc-200/10 border border-zinc-200/20 rounded-lg cursor-pointer"
                        >
                            {!isPlaying? <Play />: <Pause />}
                        </button>

                        <button
                            onClick={() => alert(`Artista: ${track.artist}`)}
                            className="size-8 p-1.5 flex items-center justify-center bg-zinc-200/10 border border-zinc-200/20 rounded-lg cursor-pointer"
                        >
                            <Lightbulb />
                        </button>
                    </div>

                    {/* Input */}
                    <input
                        placeholder="Nome da música"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        className="w-full border border-zinc-200/20 px-3 py-2 rounded-lg bg-zinc-800 text-zinc-200"
                    />

                    {/* Confirmar */}
                    <Button onClick={checkAnswer}>
                        Enviar Resposta
                    </Button>

                    {result === "correct" && (
                        <p className="text-green-400 font-bold">
                            ✔ Você acertou! Era {track.track}
                        </p>
                    )}

                    {result === "wrong" && (
                        <p className="text-red-400 font-bold">
                            ✘ Errou! Era {track.track}
                        </p>
                    )}

                    <Button
                        onClick={loadTrack}
                        extraClassName="cursor-pointer flex items-center gap-2 mt-4 px-4 py-2 bg-zinc-200/10 border border-zinc-200/20 rounded-lg"
                    >
                        <RefreshCw size={16} />
                        Outra música
                    </Button>
                </>
            )}

            <div className="flex items-center justify-center p-5 relative">
                <p className={`text-xl text-zinc-200 ${result !== "correct" && "blur-3xl"}`}>Travis scott is the best rapper on the word i guess</p>

                <div className={`absolute z-40 ${result === "correct" && "hidden"}`}><Lock /></div>
            </div>
        </div>
    );
}

"use client";

import { useState, useRef } from "react";
import { Lightbulb, Play, RefreshCw } from "lucide-react";
import { getRandomMusic, ResponseMusic } from "@/util/get-random-music-from-artist";

export function MusicPuzzle() {
    const [track, setTrack] = useState<ResponseMusic | null>(null);
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState<"correct" | "wrong" | null>(null);
    const [isPlaying, setIsPlaing] = useState(false)

    const audioRef = useRef<HTMLAudioElement>(null);

    const loadTrack = async () => {
        try {
          const data = await getRandomMusic("Yung Lixo");
        
          setTrack(data);
        } catch (err) {
          console.error(err);
        }
};

    function playPreview() {
        console.log(track)
        audioRef.current?.play();
    }

    function checkAnswer() {
        if (!track) return;

        const a = track.track.toLowerCase().trim()
        const g = guess.toLowerCase().trim();

        if (a === g) setResult("correct");
        else setResult("wrong");
    }

    return (
        <div className="flex items-center flex-col bg-zinc-900 p-6 gap-4 rounded-xl w-full max-w-lg">

            <div className="space-y-2 text-center">
                <h1 className="text-zinc-200 text-2xl">Qual é a música?</h1>
                <p className="text-zinc-400 text-sm">
                    Ouça o preview e tente acertar o nome
                </p>
            </div>

            {!track && (
                <button
                    onClick={loadTrack}
                    className="px-4 py-2 bg-zinc-200/10 border border-zinc-200/20 rounded-lg"
                >
                    Buscar música
                </button>
            )}

            {track && (
                <>
                    {/* Player */}
                    <audio ref={audioRef} src={track.preview} />

                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={playPreview}
                            className="size-8 p-1.5 flex items-center justify-center bg-zinc-200/10 border border-zinc-200/20 rounded-lg"
                        >
                            <Play />
                        </button>

                        <button
                            onClick={() => alert(`Artista: ${track.artist}`)}
                            className="size-8 p-1.5 flex items-center justify-center bg-zinc-200/10 border border-zinc-200/20 rounded-lg"
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
                    <button
                        onClick={checkAnswer}
                        className="px-4 py-2 bg-zinc-200/10 border border-zinc-200/20 rounded-lg"
                    >
                        Enviar resposta
                    </button>

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

                    <button
                        onClick={loadTrack}
                        className="flex items-center gap-2 mt-4 px-4 py-2 bg-zinc-200/10 border border-zinc-200/20 rounded-lg"
                    >
                        <RefreshCw size={16} />
                        Outra música
                    </button>
                </>
            )}
        </div>
    );
}

import { LoaderCircle } from "lucide-react"

interface ExtremeFurryButtButtonProps {
    loading?: boolean
    disable?: boolean
    onClick: () => void
    extraClassName?: string
    children?: React.ReactNode
}

export function Button(props: ExtremeFurryButtButtonProps){
    return(
        <button
            onClick={props.onClick}
            className={`px-4 py-2 bg-zinc-200/10 border border-zinc-200/20 hover:bg-zinc-200/20 transition-all cursor-pointer rounded-lg ${props.extraClassName}`}
        >
            {props.loading ? (
                <LoaderCircle className="animate-spin"/>
            ) : props.children}
        </button>
    )
}
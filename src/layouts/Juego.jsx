import { Navigation } from "@/components/Navigation"
export function Juego({params}){
    const {id} = params
    return(
        <h1>Este es el juego {id}</h1>
    )
    
}
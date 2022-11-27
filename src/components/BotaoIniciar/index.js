import {BotaoIniciarS} from "./BotaoIniciarS"
import palavras from "../../palavras"

export default function BotaoIniciar({children, palavra, setPalavra, setPalavraOculta}){

    function random(arr){

        let i = Math.floor(arr.length*Math.random())
        return arr[i]
    }

    function escolherPalavra(){
        if(palavra){
            return
        }

        let palavraInicial = random(palavras)
        setPalavra(palavraInicial)
        setPalavraOculta(palavraInicial.split("").map(letra => "_").join(""))
    }

    return(
        <BotaoIniciarS onClick={escolherPalavra}>
            {children}
        </BotaoIniciarS>
    )
}
import {BotaoIniciarS} from "./BotaoIniciarS"
import palavras from "../../palavras"

export default function BotaoIniciar({children, palavra, setPalavra, setPalavraOculta, color, setColor, setImagemVisivel, imagesForca, setLetrasIncorretas, setLetrasSugeridas}){

    function random(arr){

        let i = Math.floor(arr.length*Math.random())
        return arr[i]
    }

    function escolherPalavra(){
        if(palavra && color === "black"){
            return
        }

        if(color === "green" || color === "red"){
            setColor("black")
            setLetrasIncorretas([])
            setLetrasSugeridas([])
            setImagemVisivel(imagesForca[0])
        }

        let palavraInicial = random(palavras)
        setPalavra(palavraInicial)
        setPalavraOculta(palavraInicial.split("").map(letra => "_").join(""))
    }

    return(
        <BotaoIniciarS onClick={escolherPalavra} data-test="choose-word">
            {children}
        </BotaoIniciarS>
    )
}
import Letra from "../Letra";
import { LetrasS } from "./LetrasS";

export default function Letras({ letrasSugeridas, setLetrasSugeridas, setImagemVisivel, imagesForca, palavra, setPalavra, setPalavraOculta, palavraOculta, letrasIncorretas, setLetrasIncorretas, setColor}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    function definirPalavraOculta(l){
        let position = []
        palavra.split("").forEach((letra, indice) => {
            if(letra === l){
                position.push(indice)
            }
        });

        if(position.length){
            let novaPalavraOculta = palavraOculta.split("")
            position.forEach(pos => novaPalavraOculta[pos] = l)
            setPalavraOculta(novaPalavraOculta.join(""))
            if(novaPalavraOculta.includes("_") && letrasIncorretas.length === 6){
                setColor("red")
                setPalavraOculta(palavra)
            }
            if(!novaPalavraOculta.includes("_")){
                setColor("green")
                setPalavraOculta(palavra)
                setPalavra("")
            }

            return
        }

        setImagemVisivel(imagesForca[letrasIncorretas.length + 1])
        let novasLetrasIncorretas = [...letrasIncorretas, l]
        if(novasLetrasIncorretas.length === 6 ){
            setPalavra("")
            setPalavraOculta(palavra)
            setColor("red")
        }
        setLetrasIncorretas(novasLetrasIncorretas)
        console.log(novasLetrasIncorretas)

    }
    
    function sugerirLetra(l){
        console.log(palavra)
        if(!palavra){
            return
        }

        if(letrasIncorretas.length > 6){
            console.log("aqui")
            return
        }

        if(!palavraOculta.includes("_")){
            return
        }

        if(letrasSugeridas.includes(l)){
            return
        }
        
        definirPalavraOculta(l)
        setLetrasSugeridas([...letrasSugeridas, l])
    }

    return (
        <LetrasS>
            {alfabeto.map(l => <Letra palavra={palavra} sugerirLetra={() => sugerirLetra(l)} letrasIncorretas={letrasIncorretas} palavraOculta={palavraOculta} key={l}>{l}</Letra>)}
        </LetrasS>
    )
}
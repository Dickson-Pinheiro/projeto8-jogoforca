import { useState } from "react"
import {LetraS} from "./LetraS"

export default function Letra({children, sugerirLetra, palavra, letrasIncorretas, palavraOculta}){
    const [ativo, setAtivo] = useState(false)
    const [noClick, setNoClick] = useState(true)

    return(
        <LetraS ativo={palavra && noClick ? true : ativo} onClick={
            () => {
                if(!palavra){
                    return
                }
                if(letrasIncorretas.length === 6){
                    return
                }
                if(!palavraOculta.includes("_")){
                    return
                }
                sugerirLetra()
                setNoClick(false)
                setAtivo(false)   
            }

        }>{children}</LetraS>
    )
    
}
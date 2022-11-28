import {PalavraJogoS} from "./PalavraJogoS";

export default function PalavraJogo({palavraOculta, letrasIncorretas, color, palavra}){
    return(
        
        <PalavraJogoS data-test="word" data-answer={palavra} palavra={palavraOculta} color={color} letrasIncorretas={letrasIncorretas}>
            {palavraOculta}
        </PalavraJogoS>
    )
}
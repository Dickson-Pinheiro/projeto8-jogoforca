import {PalavraJogoS} from "./PalavraJogoS";

export default function PalavraJogo({palavraOculta, letrasIncorretas, color}){
    return(
        
        <PalavraJogoS palavra={palavraOculta} color={color} letrasIncorretas={letrasIncorretas}>
            {palavraOculta}
        </PalavraJogoS>
    )
}
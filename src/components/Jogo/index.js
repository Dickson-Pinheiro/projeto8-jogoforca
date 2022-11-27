import BotaoIniciar from "../BotaoIniciar"
import ImagemForca from "../ImagemForca"
import PalavraJogo from "../PalavraJogo"
import {JogoS, ContainerButtonPalavra} from "./JogoS"

export default function Jogo({imageForca, palavra, setPalavra, palavraOculta, setPalavraOculta, letrasIncorretas, color}) {
    return (
        <JogoS>
            <ImagemForca imageForca={imageForca}/>
            <ContainerButtonPalavra>
            <BotaoIniciar palavra={palavra} setPalavra={setPalavra} setPalavraOculta={setPalavraOculta}>Escolher Palavra</BotaoIniciar>
            <PalavraJogo color={color} palavra={palavra} palavraOculta={palavraOculta} letrasIncorretas={letrasIncorretas}/>
            </ContainerButtonPalavra>
        </JogoS>
    )
}


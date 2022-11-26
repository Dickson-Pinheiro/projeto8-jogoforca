import BotaoIniciar from "../BotaoIniciar"
import ImagemForca from "../ImagemForca"
import PalavraJogo from "../PalavraJogo"
import {JogoS, ContainerButtonPalavra} from "./JogoS"

export default function Jogo({imageForca}) {
    return (
        <JogoS>
            <ImagemForca imageForca={imageForca}/>
            <ContainerButtonPalavra>
            <BotaoIniciar >Escolher Palavra</BotaoIniciar>
            <PalavraJogo />
            </ContainerButtonPalavra>
        </JogoS>
    )
}


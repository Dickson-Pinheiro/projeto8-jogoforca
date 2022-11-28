import BotaoIniciar from "../BotaoIniciar"
import ImagemForca from "../ImagemForca"
import PalavraJogo from "../PalavraJogo"
import {JogoS, ContainerButtonPalavra} from "./JogoS"

export default function Jogo({imageForca, imagesForca, palavra, setPalavra, palavraOculta, setPalavraOculta, letrasIncorretas, setLetrasIncorretas, color, setColor, setImagemVisivel, setLetrasSugeridas}) {
    return (
        <JogoS>
            <ImagemForca imageForca={imageForca}/>
            <ContainerButtonPalavra>
            <BotaoIniciar palavra={palavra} setPalavra={setPalavra} color={color} setColor={setColor} setPalavraOculta={setPalavraOculta} setImagemVisivel={setImagemVisivel} imagesForca={imagesForca} letrasIncorretas={letrasIncorretas} setLetrasSugeridas={setLetrasSugeridas} setLetrasIncorretas={setLetrasIncorretas}>Escolher Palavra</BotaoIniciar>
            <PalavraJogo color={color} palavra={palavra} palavraOculta={palavraOculta} />
            </ContainerButtonPalavra>
        </JogoS>
    )
}


import BotaoIniciar from "../BotaoIniciar"
import ImagemForca from "../ImagemForca"
import PalavraJogo from "../PalavraJogo"
import {JogoS} from "./JogoS"

export default function Jogo() {
    return (
        <JogoS>
            <ImagemForca/>
            <BotaoIniciar >Escolher Palavra</BotaoIniciar>
            <PalavraJogo />
        </JogoS>
    )
}
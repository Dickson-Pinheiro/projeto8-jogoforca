import styled from "styled-components";

import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute";
import GlobalStyle from "./global";

import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import { useState } from "react";


const imagesForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

function App() {
  const [chute, setChute] = useState("")
  const [letrasSugeridas, setLetrasSugeridas] = useState([])
  const [letrasIncorretas, setLetrasIncorretas] = useState([])
  const [palavra, setPalavra] = useState("")
  const [imagemVisivel, setImagemVisivel] = useState(imagesForca[0])
  const [palavraOculta, setPalavraOculta] = useState("")
  const [color, setColor] = useState("black")

  return (
    <AppContainer>
      <GlobalStyle />
      <Jogo color={color} setColor={setColor} imageForca={imagemVisivel} palavra={palavra} setPalavra={setPalavra} palavraOculta={palavraOculta} setPalavraOculta={setPalavraOculta} letrasIncorretas={letrasIncorretas}/>
      <Letras setColor={setColor} setLetrasSugeridas={setLetrasSugeridas} letrasSugeridas={letrasSugeridas} setImagemVisivel={setImagemVisivel} imagesForca={imagesForca} palavra={palavra} setPalavraOculta={setPalavraOculta} palavraOculta={palavraOculta} letrasIncorretas={letrasIncorretas} setLetrasIncorretas={setLetrasIncorretas} setPalavra={setPalavra}/>
      <Chute setImagemVisivel={setImagemVisivel} forca6={forca6} chute={chute} setChute={setChute} palavra={palavra} palavraOculta={palavraOculta} setPalavraOculta={setPalavraOculta} setColor={setColor}/>
    </AppContainer>
  );
}


const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center
`

export default App;
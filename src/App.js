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

  function digitarChute(e){
    setChute(e.target.value)
  }

  return (
    <AppContainer>
      <GlobalStyle />
      <Jogo imageForca={imagesForca[0]}/>
      <Letras />
      <Chute value={chute} digitarChute={digitarChute}/>
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
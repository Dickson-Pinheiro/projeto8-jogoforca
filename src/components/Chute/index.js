import {ChuteS} from "./ChuteS"

export default function Chute({chute, setChute, setColor, setPalavraOculta, palavra, setPalavra, setImagemVisivel, forca6}){

    function digitarChute(e){
        setChute(e.target.value)
    }

    function chutar(){
        setChute("")
        if(chute === palavra){
            setColor("green")
            setPalavraOculta(chute)
            setPalavra("")
            return
        }
        setColor("red")
        setPalavraOculta(palavra)
        setPalavra("")
        setImagemVisivel(forca6)
    }
    
    return(
        <ChuteS>
            <p>Já sei a palavra!</p>
            {palavra ? <input type="text" data-test="guess-input" value={chute} onChange={e => digitarChute(e)} /> : <input type="text" data-test="guess-input" disabled value={chute} onChange={e => digitarChute(e)} /> }
            <button onClick={chutar} data-test="guess-button">Chutar</button>
        </ChuteS>
    )
}
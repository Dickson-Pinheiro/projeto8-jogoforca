import {ChuteS} from "./ChuteS"

export default function Chute({chute, setChute, palavra, setColor, setPalavraOculta}){

    function digitarChute(e){
        setChute(e.target.value)
    }

    function chutar(e){
        if(chute === palavra){
            setColor("green")
            setPalavraOculta(chute)
        }
    }
    
    return(
        <ChuteS>
            <p>Já sei a palavra!</p>
            {palavra ? <input type="text" value={chute} onChange={e => digitarChute(e)} /> : <input type="text" disabled value={chute} onChange={e => digitarChute(e)} /> }
            <button onClick={chutar} >Chutar</button>
        </ChuteS>
    )
}
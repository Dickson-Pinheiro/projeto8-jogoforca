import {ChuteS} from "./ChuteS"

export default function Chute({chute, digitarChute}){
    return(
        <ChuteS>
            <p>Já sei a palavra</p>
            <input type="text" value={chute} onChange={e => digitarChute(e)} />
            <button>Chutar</button>
        </ChuteS>
    )
}
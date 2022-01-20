import { useState, useEffect } from "react"
import storage from "../../utils/localStorage"
export default function FilmePost(props) {
    const [btnStatus, setBtnStatus] = useState("")
    useEffect(() => {
        setBtnStatus(storage.verificaRepeticao(props.id))
    }, [])
    return (
        <div className="Post">
            <img src={props.capa} className="Post-img" />
            <div className="Post-texto">
                <h1>{props.nome}</h1>
                <h2>{props.sinopse}</h2>
            </div>
            <div className='Post-btnArea'>

                <a href={`https://www.youtube.com/results?search_query=${props.nome}`} className="Post-btn">
                    Trailer
                </a>
                { btnStatus === false? 
                    <a className='Post-btn' onClick={ev =>{
                        storage.saveItems(props.id)
                        setBtnStatus(1)
                        }}>
                    Salvar
                </a> : <a className='Post-btn' onClick={ev =>{
                    storage.removeItems(props.id) 
                    setBtnStatus(false)
                }}>
                    Remover
                </a>
                }
            </div>
        </div>
    )
}
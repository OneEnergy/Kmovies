import { useState} from "react"
import storage from "../../utils/localStorage"
export default function FavPost(props) {
    const [valido, setValido] = useState(true)
    if(valido){

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


                <a onClick={(e) => { 
                    setValido(false)
                    storage.removeItems(props.id) 
                }} className="Post-btn">
                    Remover
                </a>
            </div>
        </div>
    )
}else{
    return(
        <div></div>
    )
}
}
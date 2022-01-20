import { useState, useEffect } from "react"
import api from "../../services/api"
import storage from "../../utils/localStorage"
import FavPost from "../../Components/Post/favPost"
import Loader from "../../Components/Loader"
export default function Favoritos() {
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        function apiFilmes(){
            if(storage.jaSalvos.length !== 0 ){
                storage.jaSalvos.map(async item => {
                    let filme = await api.get(`r-api/?api=filmes/${item}`)
                    filmes.push(filme.data)
                    setLoading(false)
                })
            }else{
                setLoading(false)
            }
        }
        apiFilmes()
    },[filmes])


    if(loading){
        return(
            <Loader/>
        )
    }
    return (
        <div>
            {   filmes.length !== 0 ? filmes.map(item => (
                    <FavPost key={item.id} id={item.id} capa={item.foto} nome={item.nome} sinopse={item.sinopse}/> 
                )) : <div className='nenhumSelecionado'><h1>Nenhum Filme Selecionado</h1></div>
            }
        </div>
    )
}
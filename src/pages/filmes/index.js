import { useParams } from "react-router"
import { useEffect, useState } from "react"
import Loader from "../../Components/Loader"
import FilmePost from "../../Components/Post/filmePost"
import api from "../../services/api"

export default function Filme() {
    const [selectFilmes, selectSetFilmes] = useState('')
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        async function buscaFilmes() {
            const response = await api.get(`r-api/?api=filmes/${id}`)
            selectSetFilmes(response.data)

            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }
        buscaFilmes()
    }, [id])
    if (loading) {
        return (
            <div>
                <Loader />
            </div>
        )
    }
    return (
        <div>
            {
                selectFilmes !== '' ? <FilmePost nome={selectFilmes.nome} id={selectFilmes.id} capa={selectFilmes.foto} sinopse={selectFilmes.sinopse} /> : <h1></h1>
            }
        </div>
    )
}
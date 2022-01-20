import { useState, useEffect } from "react";
import Loader from "../../Components/Loader";
import Post from "../../Components/Post";
import api from '../../services/api'
function Home() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const response = async () => {
      let resp = await api.get("r-api/?api=filmes")
      setFilmes(resp.data)

      setTimeout(() => {

        setLoading(false)
      }, 2000)
    }
    response()
  }, [])

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <div>
      {
        filmes.map(itens => (
          <Post key={itens.id} nome={itens.nome} capa={itens.foto} id={itens.id} />
        ))
      }
    </div>
  )
}

export default Home;

import axios from "axios";

//base url https://sujeitoprogramador.com/
const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
})
//todos os filmes r-api/?api=filmes

//selecionar filmes especifico r-api/?api=filmes/:id


export default api
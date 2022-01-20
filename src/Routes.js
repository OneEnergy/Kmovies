import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Favoritos from "./pages/favoritos";
import Filme from "./pages/filmes";
import Home from "./pages/home";
const Rotas = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/filmes/:id" element={<Filme/>}/>
                <Route exact path="/favoritos" element={<Favoritos/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas
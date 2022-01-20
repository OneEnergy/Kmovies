import { Link } from "react-router-dom"
export default function Header() {
    return (
        <header className="header">
            <Link className="header-logo" to="/">KMovies</Link>
            <Link className="header-btnFavoritos" to="/favoritos">Favoritos</Link>
        </header>
    )
}
import { Link } from "react-router-dom";

export default function post(props) {

    return (
        <div className="Post">
            <img src={props.capa} className="Post-img" />
            <div className="Post-texto">
                <h1>{props.nome}</h1>
                <h2>{props.sinopse}</h2>
            </div>

            <Link to={`/filmes/${props.id}`} className="Post-btn">
                Acesse
            </Link>

        </div>
    )
}
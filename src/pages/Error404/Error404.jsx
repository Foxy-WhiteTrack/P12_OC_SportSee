import { Link } from 'react-router-dom';
import "./Error404.css";

export default function Error404() {
    return (
        <>
            <div className='error-content'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="link-error">Retourner sur la page d'accueil</Link>
            </div>

        </>
    )
}
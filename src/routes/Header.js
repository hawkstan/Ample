import { Link } from "react-router-dom";
//import mode from '../css/toggle'; //for a potential dark mode

export default function Header() {
    return(
        <header>
            <h1>Ample</h1>
            <nav>
                <ul>
                    <li><Link to="/home">Accueil</Link></li>
                    <li><Link to="/models">Modèles</Link></li>
                    <li><Link to="/testimonies">Témoignages écrits</Link></li>
                    <li><Link to="/infos">Posts info</Link></li>
                    <li><Link to="/project">Ce projet</Link></li>
                </ul>
            </nav>
            {/* <button 
                className="button" 
                aria-label="Toggle Light Mode" 
                onClick={mode()}>
                <span></span>
                <span></span>
            </button> */}
        </header>        
    )
};
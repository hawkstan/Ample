import { Link } from "react-router-dom";
import logoAmple from "../img/logoAmple.png";

export default function Header() {
    return(
        <header>
            <img src={logoAmple} alt="une personne grosse d'apparence féminine assise sur le mot Ample" />
            <nav>
                <ul>
                    <li><Link to="/home">Accueil</Link></li>
                    <li><Link to="/models">Modèles</Link></li>
                    <li><Link to="/testimonies">Témoignages écrits</Link></li>
                    <li><Link to="/infos">Posts info</Link></li>
                    <li><Link to="/project">Ce projet</Link></li>
                </ul>
            </nav>
        </header>        
    )
};
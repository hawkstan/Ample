import logoAmple from "../img/logoAmple.png";
import IHECS from "../img/IHECS.png";
import ixelles from "../img/ixelles.png";
import weartxl from "../img/weartxl.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return(
        <footer>
            <img src={logoAmple} alt="une personne grosse d'apparence féminine assise sur le mot Ample" className="logoAmple" />
            <address>
                <ul>
                    <li><a href="https://www.instagram.com/projet.ample/?hl=fr"><FontAwesomeIcon icon={faInstagram} className="icons"/></a></li>
                    <li><a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} className="icons"/></a></li>
                </ul>
                <span></span>
                <a href="mailto:ample.projet@gmail.com">ample.projet@gmail.com</a>
            </address>
            <section>
                <ul>
                    <li><img src={IHECS} alt="logo de l'IHECS" /></li>
                    <li><img src={weartxl} alt="logo de WeArtXL" /></li>
                    <li><img src={ixelles} alt="logo de la commune d'Ixelles Elsène" /></li>
                </ul>
            </section>
        </footer>
    )
};
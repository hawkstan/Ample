import logoAmple from "../img/logoAmple.png";
import IHECS from "../img/IHECS.png";
import ixelles from "../img/ixelles.png";
import weartxl from "../img/weartxl.png";

export default function Footer() {
    return(
        <footer>
            <img src={logoAmple} alt="une personne grosse d'apparence féminine assise sur le mot Ample" />
            <address>
                <ul>
                    <li>insta</li>
                    <li>fb</li>
                </ul>
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
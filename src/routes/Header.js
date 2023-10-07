import BurgerMenu from "./Burger.js";
import logoAmple from "../img/logoAmple.png";

export default function Header() {
    return(
        <header>
            <img src={logoAmple} alt="une personne grosse d'apparence féminine assise sur le mot Ample" />
            <BurgerMenu/>
        </header>        
    )
};
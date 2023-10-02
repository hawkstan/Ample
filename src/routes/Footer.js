import logoAmple from "../img/logoAmple.png";

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
                    <li>logo école</li>
                    <li>logo rouge vert</li>
                    <li>ixelles elsène</li>
                </ul>
            </section>
        </footer>
    )
};
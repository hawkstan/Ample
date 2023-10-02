import { Link } from "react-router-dom";

export default function Home(){
    return (
        <main>
            <section class="about">
                <h3>About us</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <Link to="/infos">+ d'infos</Link>
            </section>
            <section class="">
                <h3>Nos intervenant.es</h3>
                <ul>
                    <li>image</li>
                    <li>image</li>
                    <li>image</li>
                    <li>image</li>
                    <li>image</li>
                    <li>image</li>
                </ul>
            </section>
        </main>
    );
};
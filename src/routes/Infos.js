import { Link } from "react-router-dom";

export default function Infos(){
    return (
        <main className="infos">
            <section>
                <h3>Un peu d'informations...</h3>
                <p>Toutes ces informations proviennent de nombreuses recherches qui nous ont permis de produire nos actuels posts informatifs disponible sur notre
                    Instagram <a href="https://www.instagram.com/projet.ample/?hl=fr" target="_blank" rel="noreferrer">@projet.ample</a>
                </p>
            </section>
            <section>
                <p className="hash">#01</p>
                <p>La grossophobie</p>
            </section>
            <section>
                <p className="hash">#02</p>
                <p>La charge mentale</p>
            </section>
        </main>
    );
};
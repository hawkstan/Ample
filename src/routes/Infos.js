import rainbow from "../img/rainbow.svg"; //see if possible to have png instead
import star from "../img/star2.svg";

export default function Infos(){
    return (
        <main className="infos">
            <section className="title">
                <img src={rainbow} alt="une vague colorée en 4 bandes correspondant à la palette couleur du site" className="rainbow" />
                <h1>Un peu d'information</h1>
                <p>Toutes ces informations proviennent de nombreuses recherches qui nous ont permis de produire nos actuels posts informatifs disponible sur notre
                    Instagram <a href="https://www.instagram.com/projet.ample/?hl=fr" target="_blank" rel="noreferrer">@projet.ample</a>
                </p>
                <img src={star} alt="une étoile" className="star" />
            </section>
            <section className="instaPost1">
                <p className="hash">#01</p>
                <h4>La grossophobie</h4>
                <article>
                    <p>lien vers post insta ?</p>
                </article>
            </section>
            <section className="instaPost2">
                <p className="hash">#02</p>
                <h4>La charge mentale</h4>
                <article>
                    <p>lien vers post insta ?</p>
                </article>
            </section>
        </main>
    );
};
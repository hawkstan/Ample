import groupe from "../img/groupe.png";

export default function Project(){
    return (
        <main className="project">
            <section>
                <img src={groupe}></img>
                <h1>Le projet</h1>
            </section>
            <section className="blurb1">
                <p className="hash">#A</p>
                <h3>L'essence du projet</h3>
                <img></img>
                <p>
                    L'idée du projet Ample, c'est de donner un espace & des moyens aux personnes grosses pour qu'elles puissent s'exprimer sur ce qu'elles vivent dans l'espace public, en tant que personnes grosses (la grossophobie vécue, l'inconfort des infrastructures, la pression sociale, etc).
                    <br/>
                    En plus de vouloir offrir un espace aux concerné•e•s, il y a également une volonté d'informer et de sensibiliser le plus de personnes possible à la grossophobie et à leurs propres comportements grossophobes.
                    Dans un second temps, nous souhaitons conscientiser la société à la problématique de l'espace public qui peut être (et est) excluant et source de charge mentale.
                </p>
            </section>
            <section className="blurb2">
                <p className="hash">#B</p>
                <h3>Nos objectifs</h3>
            </section>
            <section className="blurb3">
                <p className="hash">#C</p>
                <h3>Notre équipe</h3>
            </section>
            <section className="blurb4">
                <p className="hash">#D</p>
                <h3>Nos remerciements</h3>
            </section>
            <section className="blurb5">
                <p className="hash">#E</p>
                <h3>Quelques backstage</h3>
            </section>
        </main>
    );
};
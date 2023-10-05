import { Link } from "react-router-dom";

export default function Home(){
    return (
        <main>
            <section className="about">
                <h1>About us</h1>
                <p>
                    Ample, c'est un projet qui parle de la charge mentale d'exister dans un corps gros dans l'espace public.
                    En effet, l'espace public, lieu de rencontre, de socialisation et de communication, n'est pas adapté aux corps gros.
                    Par « gros », on entend tous les corps dont l'accès au monde est réduit par leur grosseur.
                    <br/><br/>
                    Au travers du projet Ample, on souhaite non seulement donner la parole et de la visibilité aux personnes grosses, mettre en lumière la grossophobie de l'espace public, montrer la beauté des corps gros, mais aussi sensibiliser les personnes non concernées à leurs propres comportements et biais grossophobes.
                    <br/><br/>
                    <div className="button"><Link to="/infos">+ d'infos</Link></div>
                </p>
            </section>
            <section className="">
                <h1>Nos intervenant.es</h1>
                <ul>
                    <li><Link to="/models"><img src="" alt="" /><h3>Rabi</h3></Link></li>
                    <li><Link to=""><img src="" alt="" /><h3>Melissa</h3></Link></li>
                    <li><Link to=""><img src="" alt="" /><h3>Loïc</h3></Link></li>
                    <li><Link to=""><img src="" alt="" /><h3>Cassandra</h3></Link></li>
                    <li><Link to=""><img src="" alt="" /><h3>Adeline</h3></Link></li>
                    <li><Link to=""><img src="" alt="" /><h3>Emma</h3></Link></li>
                </ul>
            </section>
        </main>
    );
};
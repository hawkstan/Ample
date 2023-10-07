import { Link } from "react-router-dom";
import { HashRouter as Router, Route } from 'react-router-dom';
import EmmaPage from './models/Emma';
import Rabi from "../img/Rabi.png";
import Melissa from "../img/Melissa.png";
import Loic from "../img/Loic.png";
import Cassandra from "../img/Cassandra.png";
import Adeline from "../img/Adeline.png";
import Emma from "../img/Emma.png";

<Router>
  <Route path="/Emma" component={EmmaPage} />
  {/* Add more routes as needed */}
</Router>

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
                </p>
                <div className="button"><Link to="/infos">+ d'infos</Link></div>
            </section>
            <section className="modelsBlurb">
                <h1>Nos intervenant.es</h1>
                <ul>
                    <li>
                        <div className="image-wrapper">
                            <img src={Rabi} alt="une personne grosse d'apparence féminine, debout" useMap="#map-rabi" />
                            <div className="background"></div>
                        </div>
                        <Link to="/Rabi"><h3>Rabi</h3></Link>
                        <map name="map-rabi">
                            <area shape="circle" coords="100,140,90" href="#/Rabi" alt="Clickable Area" />
                        </map>
                    </li>
                    <li>
                        <div className="image-wrapper">
                            <img src={Melissa} alt="une personne grosse d'apparence féminine, assise en tailleur" useMap="#map-melissa" />
                            <div className="background"></div>
                            <Link to="/Melissa"><h3>Melissa</h3></Link>
                            <map name="map-melissa">
                                <area shape="circle" coords="100,140,90" href="#/Melissa" alt="Clickable Area" />
                            </map>
                        </div>
                    </li>
                    <li>
                        <div className="image-wrapper">
                            <img src={Loic} alt="une personne grosse d'apparence masculine, debout" useMap="#map-loic" />
                            <div className="background"></div>
                            <Link to="/Loic"><h3>Loïc</h3></Link>
                            <map name="map-loic">
                                <area shape="circle" coords="100,140,90" href="#/Loic" alt="Clickable Area" />
                            </map>
                        </div>
                    </li>
                    <li>
                        <div className="image-wrapper">
                            <img src={Cassandra} alt="une personne grosse d'apparence féminine, à genoux" useMap="#map-cassandra" />
                            <div className="background"></div>
                            <Link to="/Cassandra"><h3>Cassandra</h3></Link>
                            <map name="map-cassandra">
                                <area shape="circle" coords="100,140,90" href="#/Cassandra" alt="Clickable Area" />
                            </map>
                        </div>
                    </li>
                    <li>
                        <div className="image-wrapper">
                            <img src={Adeline} alt="une personne grosse d'apparence féminine, assise avec une jambe temdue et l'autre pliée" useMap="#map-adeline" />
                            <div className="background"></div>
                            <Link to="/Adeline"><h3>Adeline</h3></Link>
                            <map name="map-adeline">
                                <area shape="circle" coords="100,140,90" href="#/Adeline" alt="Clickable Area" />
                            </map>
                        </div>
                    </li>
                    <li>
                        <div className="image-wrapper">
                            <img src={Emma} alt="une personne grosse d'apparence féminine, assise avec une jambe pliée sous l'autre" useMap="#map-emma" />
                            <div className="background"></div>
                            <Link to="/Emma"><h3>Emma</h3></Link>
                            <map name="map-emma">
                                <area shape="circle" coords="100,140,90" href="#/Emma" alt="Clickable Area" />
                            </map>
                        </div>
                    </li>
                    {/* image-map sert à empêcher que l'image entière soit un lien, pour diminuer les missclicks
                    les coordonnées seront à modifier si la taille des images change*/}
                </ul>
            </section>
        </main>
    );
};
import { Link } from "react-router-dom";
import Rabi from "../img/RabiFull.jpg";
import Melissa from "../img/MelissaFull.jpg";
import Loic from "../img/LoicFull.jpg";
import Cassandra from "../img/CassandraFull.jpg";
import Adeline from "../img/AdelineFull.jpg";
import Emma from "../img/EmmaFull.jpg";

export default function Models(){
    return (
        <main className="models">
            <h1>Nos modèles</h1>
            <ul>
                <li>
                    <Link to="/models/Rabi">
                        <img src={Rabi} alt="une personne grosse d'apparence féminine, debout" />
                        <h3>Rabi</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/models/Melissa">
                        <img src={Melissa} alt="une personne grosse d'apparence féminine, assise en tailleur" />
                        <h3>Melissa</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/models/Loic">
                        <img src={Loic} alt="une personne grosse d'apparence masculine, debout" />
                        <h3>Loïc</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/models/Cassandra">
                        <img src={Cassandra} alt="une personne grosse d'apparence féminine, à genoux" />
                        <h3>Cassandra</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/models/Adeline">
                        <img src={Adeline} alt="une personne grosse d'apparence féminine, assise avec une jambe temdue et l'autre pliée" />
                        <h3>Adeline</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/models/Emma">
                        <img src={Emma} alt="une personne grosse d'apparence féminine, assise avec une jambe pliée sous l'autre" />
                        <h3>Emma</h3>
                    </Link>
                </li>
            </ul>
        </main>
    );
};
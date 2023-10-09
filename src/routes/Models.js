import { Link } from "react-router-dom";

export default function Models(){
    return (
        <main className="models">
            <h3>Nos modèles</h3>
            <p>texte</p>
            <ul>
                <Link to="/models/Rabi">Rabi</Link>
                <Link to="/models/Melissa">Melissa</Link>
                <Link to="/models/Loic">Loic</Link>
                <Link to="/models/Cassandra">Cassandra</Link>
                <Link to="/models/Adeline">Adeline</Link>
                <Link to="/models/Emma">Emma</Link>
            </ul>
        </main>
    );
};
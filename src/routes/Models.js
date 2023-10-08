import { Link } from "react-router-dom";

export default function Models(){
    return (
        <main className="models">
            <h3>Nos modèles</h3>
            <p>texte</p>
            <ul>
                <Link to="/Rabi">Rabi</Link>
                <Link to="/Melissa">Melissa</Link>
                <Link to="/Loic">Loic</Link>
                <Link to="/Cassandra">Cassandra</Link>
                <Link to="/Adeline">Adeline</Link>
                <Link to="/Emma">Emma</Link>
            </ul>
        </main>
    );
};
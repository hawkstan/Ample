import { Link } from "react-router-dom";

export default function NoRoute(){
    return (
        <main>
            <h3>ERROR</h3>
            <p>Cette page n'existe pas<br/>
            Essayez de sélectionner un lien valide ou <Link to="/home">retournez à l'accueil</Link></p>
        </main>
    );
}
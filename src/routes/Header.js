import React from 'react';
import { Link } from "react-router-dom";
//import mode from '../css/toggle'; //for a potential dark mode

function Header() {
    return(
        <header>
            <h1>Ample</h1>
            <nav>
                <ul>
                    <li><Link to="/home" >Accueil</Link></li>
                </ul>
            </nav>
            {/* <button 
                className="button" 
                aria-label="Toggle Light Mode" 
                onClick={mode()}>
                <span></span>
                <span></span>
            </button> */}
        </header>        
    )
}

export default Header;
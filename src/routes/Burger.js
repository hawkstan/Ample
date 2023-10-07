import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={`burgerMenu ${open ? 'open' : ''}`}>
        <button className="burgerToggle" onClick={toggleMenu}>
            <div className="barTop"></div>
            <div className="barMid"></div>
            <div className="barBot"></div>
        </button>
        <nav>
            <ul>
                <li>
                    <Link to="/home">Accueil</Link>
                </li>
                <li>
                    <Link to="/models">Modèles</Link>
                </li>
                <li>
                    <Link to="/testimonies">Témoignages écrits</Link>
                </li>
                <li>
                    <Link to="/infos">Posts info</Link>
                </li>
                <li>
                    <Link to="/project">Ce projet</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
};
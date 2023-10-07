import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burgerMenu ${isOpen ? 'open' : ''}`}>
        <button className="burgerToggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
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
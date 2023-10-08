import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
                    <NavLink to="/home" activeclassname="active">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/models" activeclassname="active">Modèles</NavLink>
                </li>
                <li>
                    <NavLink to="/testimonies" activeclassname="active">Témoignages écrits</NavLink>
                </li>
                <li>
                    <NavLink to="/infos" activeclassname="active">Posts info</NavLink>
                </li>
                <li>
                    <NavLink to="/project" activeclassname="active">Ce projet</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  );
};
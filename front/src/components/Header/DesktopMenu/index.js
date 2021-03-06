import React from 'react';
import { NavLink } from 'react-router-dom';

const DesktopMenu = ({ isLogged }) => (
  <div className="menu__desktop">
    <div className="menu__links">
      <NavLink exact to="/" className="link" href="#" alt="none">Accueil</NavLink>
      <NavLink exact to="/library" className="link" href="#" alt="none">Bibliothèque</NavLink>
      { isLogged && <NavLink exact to="/profil" className="link" href="#" alt="none">Mon profil</NavLink> }
      <NavLink exact to="/TeamPage" className="link" href="#" alt="none">L'équipe</NavLink>
      <NavLink exact to="/contact" className="link" href="#" alt="none">Contact</NavLink>
    </div>
  </div>
);

export default DesktopMenu;

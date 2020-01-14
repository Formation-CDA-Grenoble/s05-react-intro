import React from 'react';

import '../styles/Navbar.css';

function handleMouseEnter() {
  console.log("Souris sur la navbar!!!");
}

function handleMouseLeave() {
  console.log("Souris en-dehors de la navbar!!!");
}

function handleContextMenu(event) {
  event.preventDefault();
  console.log("Clic droit sur la navbar!!!");
}

function Navbar() {
  return (
    <nav class="Navbar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onContextMenu={handleContextMenu}
      >
      Composant barre de navigation
    </nav>
  );
}

export default Navbar;

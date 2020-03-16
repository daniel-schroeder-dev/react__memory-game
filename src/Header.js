import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <header className="header-container">
      <h1 className="header-container__page-title">Memory Game</h1>
      <nav>
        <ul className="header-container__nav-items">
          <li>New Game</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
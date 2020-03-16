import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <header className="header">
      <h1 className="header__page-title">Memory Game</h1>
      <nav>
        <ul className="header__nav-items">
          <li className="header__nav-item" onClick={props.onClick}>New Game</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
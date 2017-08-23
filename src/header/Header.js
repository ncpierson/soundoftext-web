import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <header>
      <h1 className="brand">Sound of Text</h1>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#about">About</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#learn">Learn</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#contribute">Contribute</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
